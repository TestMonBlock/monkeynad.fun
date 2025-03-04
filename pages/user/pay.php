<?php if(!defined('FastCore')){exit('Oops!');}

$opt['title'] = 'Withdrawal of funds';
$username = $user['login'];

if ($user['ban'] == 1){
    exit('Your account has been blocked for violating the rules');
}

# Конфигурация
$db->query("SELECT * FROM db_conf WHERE id = '1' LIMIT 1");
$cnf = $db->fetchArray();

/* Ищем пополнения за последние дни */
$tlast = time()-60*60*24*5;
$tnow = time();
$last_in = $db->query('SELECT SUM(sum) FROM db_insert WHERE `add` >= '.$tlast.' AND `add` <= '.$tnow.' AND status = 1 AND `uid` = '.$uid.'')->fetchArray();
$lastInvest = round($last_in['SUM(sum)'],0); // Общая сумма пополнений

if ($user['sum_in'] <= 499.9) {
if ($lastInvest <= 2.99) {
    $lastInsert = 1; // ок
} else {
    $lastInsert = 0;
}
} else {
    $lastInsert = 0;
}
/* Конец лимита пополнений за последние дни */


# Способ заказа выплаты
$py = $pg->segment[2] ?? NULL;
# Выбран способ оплаты
if ($py) {

  # Ищем платежную систему
  $pyName = filter_var($py, FILTER_SANITIZE_STRING);
  $paySys = $db->query("SELECT * FROM db_paysystem WHERE `name` = '$pyName'")->fetchArray();

  $varPy = 'TXtp6FhA3NXP2e434343ptFjaMECDcJ';
  $systemPay = $paySys['name'];
  $currency = $paySys['currency'];
  $minPay = round($paySys['minpay'],2); // минимальный вывод по валюте сайта
  $maxPay = 1000;
  $psVal = mb_strtolower($paySys['currency']); // иконка валюты
   

  $purseList = $db->query('SELECT * FROM db_purse WHERE `name` = ? AND `uid` = ?',array($systemPay, $uid))->fetchArray();

# Параметры лимитов
$accPay = 3; // 1 USD
$accPay2 = 15; // 1 USD

# начисляем лимит 
$dep = $user['sum_in'];
$refDep = round($user['income'],2);

if($dep >= $accPay2 && $dep <= 10000) {
    $sumlimit = ($dep * 0.12);
    $sumlimit = floor($sumlimit);
    $sumlimit = round($sumlimit,2);
    $userHitr = 0; // заглушка
   } else {
    $userHitr = 1; // заглушка
    $sumlimit = '0.3';
   }

   $valid = $purseList['purse'];
   $todayLimit = 12;
  $maxPay2 = $sumlimit;
?>
			
<div class="center-title">
<h2>Cashout</h2>
<p>Select payment: <?=$systemPay;?></p>
</div>

<?

# Фильтрация кошельков
$wallet = new wallets();

$pWallet = $systemPay.'_wallet';
$purse = $wallet->$pWallet($valid);

$sumUser = $user['money_p']-$user['money_b']; // -hold

# Заносим выплату
$csrfCheck = $func->csrfVerify();
if(isset($_POST['pay']) && $csrfCheck == TRUE) {

$sum = filter_var($_POST['sum'], FILTER_VALIDATE_FLOAT);

if ($sum > 2) {
  $commision = '8.00';
} else {
  $commision = '5.00';
}

$com = $sum - ($sum * $commision /100); // коммисия 0%
$com = round($com,2); // коммисия 0%

# конвертация в нужную валюту
$curs = $paySys['pairss'];
$sumCalc = $sum * $curs; 
$com2 = $sumCalc - ($sumCalc * $commision /100); // коммисия 0%
$com2 = round($com2,2); // коммисия 0%

  # валидация кошелька
if($valid != FALSE) {
  # валидация кошелька
if($purse == $valid) {
  # период выплат
  $payments = $db->query("SELECT * FROM db_payout WHERE uid = '$uid'")->fetchArray();
if (time() >= $payments['add']+(3600*$todayLimit)) {  
  # лимит минимальной и максимальной стандарт
if ($sum >= $minPay) {
if ($sum <= $maxPay) {
  # заглушка
if($user['sum_in'] >= $accPay) {
  # баланс юзера
if($sum <= $sumUser) {
  # лимит минимальной и максимальной от суммы депозита
if ($sum >= $minPay) {
if ($sum <= $maxPay2) {
  # если несколько дней не пополнял хотим ещё
if ($lastInsert == 0) {
  # большая сумма в ручные
if ($sum > 0.9) {

# Снимаем с пользователя
$db->query("UPDATE db_users SET money_p = money_p - '$sum' WHERE id = '$uid'");

# Вставляем запись в выплаты
$da = time();
$dd = $da + 60*60*24*15;
$db->query("INSERT INTO db_payout (uid, login, purse, sum, sum2, `sys`, `add`, `del`, status) VALUES ('$uid', '$username', '$purse','$sum','$com2','$currency','$da','$dd','1')");
$db->query("UPDATE db_users SET sum_out = sum_out + '$sum' WHERE id = '$uid'");

# Пишет в статистику
$db->query("UPDATE db_stats SET payments = payments + '$sum' WHERE id = '1'");

	echo '<div class="alert alert-success">The request for payment has been sent, wait for the administrator to check!<br/><small> verification time usually takes from 30 minutes to 48 hours.</small></div>';
}
else {
  if ($currency == 'USD') {

# Делаем выплату
$payeer = new rfs_payeer($config->py_NUM, $config->py_apiID, $config->py_apiKEY);
if ($payeer->isAuth()) {

$arBalance = $payeer->getBalance();
if($arBalance["auth_error"] == 0) {

$balance = $arBalance["balance"]["USD"]["DOSTUPNO"];
$psSys = '1136053';
if($balance >= $sum) {
$array = array(
	'action' => 'output',
	'ps' => $psSys,
	'curIn' => 'USD', // счет списания
	'sumOut' => $com2, // сумма получения
	'curOut' => 'USD', // валюта получения
	'param_ACCOUNT_NUMBER' => $purse // получатель
);


$initOutput = $payeer->initOutput($array);
	if ($initOutput){
	$historyId = $payeer->output();
		if (!empty($historyId)) {

# Снимаем с пользователя
$db->query("UPDATE db_users SET money_p = money_p - '$sum' WHERE id = '$uid'");

# Вставляем запись в выплаты
$da = time();
$dd = $da + 60*60*24*15;

$db->query("INSERT INTO db_payout (uid, login, purse, sum, sum2,`sys`, `add`, `del`, status) VALUES ('$uid','$username','$purse','$sum','$com2','$currency','$da','$dd','3')");
$db->query("UPDATE db_users SET sum_out = sum_out + '$sum' WHERE id = '$uid'");

# Пишет в статистику
$db->query("UPDATE db_stats SET payments = payments + '$sum' WHERE id = '1'");
	echo '<div class="alert alert-success">Funds have been successfully transferred to your wallet</div>';
} else {
	echo '<div class="alert alert-danger text-center">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.</div>';	
}
	}else{
	echo '<div class="alert alert-danger">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.</div>'; 
}
	}else echo '<div class="alert alert-danger">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.</div>';							
	}else echo '<div class="alert alert-danger">Error 630. Failed to pay! Try again later</div>';	
	}else echo '<div class="alert alert-danger">Error 631. Failed to pay! Try again later</div>';
// выплата через Payeer

} else {
	# Делаем выплату							
	$paykassa_api_id = $config->pka_id;
	$paykassa_api_password = $config->pka_pass;
	$paykassa_merchant_id = $config->pkm_id;
														 
	$test = false; // тестовый режим false - выключен, true - включен						
    $wallet = $purse;
    $comment = $user['id'];

    $paykassa = new PaykassaAPI($paykassa_api_id,$paykassa_api_password,$test);


    $params = [
        "merchant_id" => $paykassa_merchant_id, 
        "wallet" => [
            "address" => $wallet,
            "tag" => "",
        ],
        "amount" => $com2,
        "system" => $systemPay,
        "currency" => $currency,
        "comment" => "My comment".$comment,
        "priority" => "hign", // low, medium, high
    ];

    $res = $paykassa->sendMoney(
        $params["merchant_id"],
        $params["wallet"],
        $params["amount"],
        $params["system"],
        $params["currency"],
        $params["comment"],
        $params["priority"]
    );

	if ($res['error']) {        // $res['error'] - true если ошибка
	//	echo $res['message'];   // $res['message'] - текст сообщения об ошибке
		echo '<div class="alert alert-danger text-center">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.</div>';
	} else {
        //actions in case of success
        $merchant_id = $res["data"]["shop_id"];                     // merchant id that you originally made payment, example 122
        $transaction = $res["data"]["transaction"];                 // transaction number of the payment, example 130236
        $txid = $res["data"]["txid"];                               // txid 70d6dc6841782c6efd8deac4b44d9cc3338fda7af38043dd47d7cbad7e84d5dd can be empty
        // In this case, the information about the transaction can be obtained using a universal link from the Explorer_Transaction_Link field, see below
        $payment_id = $res["data"]["payment_id"];                   // Payment transaction number in the payment system, example 478937139
        $amount = $res["data"]["amount"];                           // the amount of the payment, how much was written off from the balance of the merchant 0.42
        $amount_pay = $res["data"]["amount_pay"];                   // the amount of the payment, as it is the user, example: 0.41
        $system = $res["data"]["system"];                           // the system of payment, which was made the payment, example: Bitcoin
        $currency = $res["data"]["currency"];                       // the payment currency, for example: BTC
        $number = $res["data"]["number"];                           // the address where you sent the funds
        $commission_percent = $res["data"]["shop_commission_percent"];// the transfer fee percentage, example: 1.5
        $commission_amount = $res["data"]["shop_commission_amount"];  // the transfer fee amount, example: 1.00
        $paid_commission = $res["data"]["paid_commission"];         // who paid for the Commission, for example: shop
    
    
        $explorer_address_link =
            $res["data"]["explorer_address_link"];          // A link to view information about the address
        $explorer_transaction_link =
            $res["data"]["explorer_transaction_link"];      // Link to view transaction information


# Снимаем с пользователя
$db->query("UPDATE db_users SET money_p = money_p - '$sum' WHERE id = '$uid'");

# Вставляем запись в выплаты
$da = time();
$dd = $da + 60*60*24*15;
$db->query("INSERT INTO db_payout (uid, login, purse, sum, sum2,`sys`, `add`, `del`, status) VALUES ('$uid','$username','$wallet','$sum','$com2','$currency','$da','$dd','3')");
$db->query("UPDATE db_users SET sum_out = sum_out + '$sum' WHERE id = '$uid'");

# Пишет в статистику
$db->query("UPDATE db_stats SET payments = payments + '$sum' WHERE id = '1'");
	echo '<div class="alert alert-success">Funds have been successfully transferred to your wallet.</div>';
} 
  
}
}
  } else echo '<div class="alert alert-danger">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.<br></div>';
  } else echo '<div class="alert alert-danger">Maximum payout amount is <b>'.$maxPay2.' {!VAL!}.</b></div>';
  }else echo '<div class="alert alert-danger">Minimum payout amount is <b>'.$minPay.' {!VAL!}.</b></div>';
  }else echo '<div class="alert alert-warning">Error. Available balance for withdrawal '.$sumUser.' {!VAL!}.</div>'; // Доступно для вывода
	}else echo '<div class="alert alert-danger">Make a deposit on '.$accPay.' {!VAL!}. After that, the payouts will be available.</div>';	 // заглушка 1
  }else echo '<div class="alert alert-danger">Maximum payout amount is <b>'.$maxPay.' {!VAL!}.</b></div>';
  }else echo '<div class="alert alert-danger">Minimum payout amount is <b>'.$minPay.' {!VAL!}.</b></div>';
	}else echo '<div class="alert alert-danger">You have already ordered a payment for the last '.$todayLimit.' hour. </div>'; // лимит час
	}else echo '<div class="alert alert-warning">Purse '.$purse.' filled in incorrectly.</div>'; // ошибка кошелька
}else echo '<div class="alert alert-danger text-uppercase">Error! '.$systemPay.' Address not saved.<br><b>You need to save the wallet address in <a href="/user/settings">settings</a>.</b></div>'; // ошибка кошелька
}

if ($valid == FALSE) {
    $userWallet = '<span class="text-success">You need to save the wallet address in <a href="/user/settings" class="text-light">settings</a>.</span>'; // ок
} else {
    $userWallet = '<span class="notranslate" id="mytrx">'.$valid.'</span>';
}

?>

<script>
var longtext = "<?=$valid; ?>";
var smalltext = "<?=substr_replace($valid, "<span style='color: #ff9218;'>.....</span>", -4, 3); ?>";
$(function() {
    $("#mytrx").html(smalltext);
    var done = false;
    $("#mytrx").click(function() {
        if (!done) {
            done = true;
            $(this).text(longtext);
        }
    });
});
</script>	


<div class="row">
<div class="col-lg-8">
  
<div class="p-1 blockprof mb-2" style="border-radius: 1em;">
	<table>
	<tr>
		<td ><img src="/img/pay/icon/<?=$psVal;?>.png" style="width: 50px;"></td>
		<td class="ps-2"><div><h5 class="mb-0 pb-0"><?=$userWallet;?></h5> <span>Your wallet (<?=$currency;?>):</span></div></td>
	</tr>
	</table>
</div>

<div class="card mt-3 mb-2 blockpay">


<div class="p-2">
<?php 

$curs = $paySys['pairss'];
$sumCalc = $sumUser * $curs; 

?>

    <form action="" method="POST">
<?php $func->csrf(); ?>


<div class="p-3 text-start"><label class="text-uppercase"><b>Payout amount:</b></label>



<div class="input-group input-group-lg mb-2">
	<input type="text" class="form-control" placeholder="Payout amount" value="<?=round($sumUser,2); ?>" id="change" onkeyup="GetSumPer();" min="<?=$minPay;?>" max="<?=$maxPay;?>" name="sum">
	<span class="input-group-text">{!VAL!}</span>
</div>

	<input type="hidden" class="form-control" value="<?=$curs;?>" name="per" id="percent" disabled="disabled">


	

  <b class="mb-1">You will receive coins: <span id="res_sum" name="res"><?=round($sumCalc,2); ?></span> <span><?=$currency;?></span></b><br><br>
<button class="btn btn-lg btn-success text-uppercase" name="pay" type="submit">Withdrawal</button>
</div>
</form>

<script language="javascript">GetSumPer();</script>
<script>

function GetSumPer(){
	var sum = parseFloat(document.getElementById("change").value);
	var percent = parseFloat(document.getElementById("percent").value);
	var add_sum = 0;

	if(sum > 0){
		if(percent > 0){
			add_sum = sum * percent;
		}
	//	document.getElementById("res_sum").innerHTML = Math.toFixed(sum+add_sum);
	$("#res_sum").html( (add_sum).toFixed(6));
	}
}
</script>

</div>
</div>

</div>
<div class="col-lg-4">


<div class="p-1 blockprof mb-2" style="border-radius: 1em;">
	<table>
	<tr>
		<td ><img src="/img/a9.png" style="width: 50px;"></td>
		<td class="ps-2"><div><h4 class="notranslate mb-0 pb-0"><?=$minPay;?> {!VAL!}</h4> <span>Mininum withdrawal:</span></div></td>
	</tr>
	</table>
</div>

<div class="p-1 blockprof mb-2" style="border-radius: 1em;">
	<table>
	<tr>
		<td ><img src="/img/a8.png" style="width: 50px;"></td>
		<td class="ps-2"><div><h4 class="notranslate mb-0 pb-0"><?=$maxPay;?> {!VAL!}</h4> <span>Maximum withdrawal:</span></div></td>
	</tr>
	</table>
</div>
<div class="p-1 blockprof mb-2" style="border-radius: 1em;">
	<table>
	<tr>
		<td ><img src="/img/a10.png" style="width: 50px;"></td>
		<td class="ps-2"><div><h4 class="mb-0 pb-0"><?=$todayLimit;?> HOUR</h4> <span>Withdrawal every:</span></div></td>
	</tr>
	</table>
</div>
<div class="p-1 blockprof mb-2" style="border-radius: 1em;">
	<table>
	<tr>
		<td ><img src="/img/a11.png" style="width: 50px;"></td>
		<td class="ps-2"><div><h4 class="mb-0 pb-0">INSTANT</h4> <span>Pending payout</span></div></td>
	</tr>
	</table>
</div>


</div>






</div>
<?php

return;
}
require_once '_fake_pay.php';
// конец
 ?>




<h3 class="text-center">SELECT METHOD PAYOUT</h3>
<div class="row m-1">
<?php

$pslist = $db->query('SELECT * FROM db_paysystem WHERE name != ?', array('FaucetPay'))->fetchAll();
foreach ($pslist as $psl) {
$psPage = mb_strtolower($psl['name']);
$psVal = mb_strtolower($psl['currency']);

 ?>
	<div class="col-xl-3 col-lg-4 col-md-6 p-1">
	<a href="/user/pay/<?=$psPage;?>" class="card mb-1 px-2 p-1">
	<div>
	<table>
	<tr>
		<td><img src="/img/pay/ps/<?=$psPage;?>.png" style="width: 50px;"></td>
		<td class="ps-3"><div><h4 class="notranslate mb-0"><?=$psl['title'];?></h4> <span class="btn btn-sm btn-light mb-2"><?=$psl['currency'];?></span></div></td>
	</tr>
	</table></div>
</a>
	</div>
	<?php
}
 ?>

</div>



<div class="pt-2">
<h5 class="text-uppercase text-white text-center">My last payouts</h5>
<table class="stats2 table table-sm table-striped mb-0">
	<thead>
		<th class="text-center">Status</th>
		<th class="text-center">Sum</th>
		<th class="text-center">Currency</th>
		<th class="text-end pe-2">Time</th>
	</thead>
<?php
$status_array2 = array(0 => '<span class="badge bg-warning text-dark">Wait...</span>', 1 => '<span class="badge bg-warning text-dark">Wait...</span>', 2 => '<span class="badge bg-danger">Cancel</span>', 3 => '<span class="badge bg-success text-white">Success</span>');
$payout = $db->query('SELECT * FROM db_payout WHERE uid = '.$uid.' ORDER BY id DESC LIMIT 10')->fetchAll();
foreach ($payout as $payout) {
		?>
		<tr class="notranslate">
			<td class="text-center"><?=$status_array2[$payout['status']]; ?></td>
			<td class="text-center"><span class="text-sum"><?= sprintf("%.2f",$payout['sum']); ?> <small>{!VAL!}</small></span> </td>
			<td class="text-center"><span class="text-sum"><?= sprintf("%.2f",$payout['sum2']); ?> <small><?= $payout['currency']; ?></small></span> </td>
			<td class="text-end pe-2"><?=date("d M Y - H:i",$payout['add']); ?> </td>
  		</tr>
		<?php
	}
  ?>
</table>
</div>

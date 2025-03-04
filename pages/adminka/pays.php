<?php
if(!defined('FastCore')){echo ('Выявлена попытка взлома!');exit();}
?>
<h3>Обработка заявок на выплату</h3>
<?PHP
# Отмена заявки на выплату
if(isset($_POST['cancel'])){
$cancel_id = intval($_POST['cancel']);
$uid_cancel = intval($_POST['uid_cancel']);
$sum_cancel = filter_var($_POST['sum_cancel'], FILTER_VALIDATE_FLOAT);
$db->query("UPDATE db_users SET money_p = money_p + $sum_cancel WHERE id = '$uid_cancel'");
$db->query("UPDATE db_payout SET `status` = '2' WHERE id = '$cancel_id'");
	echo "<div class='alert alert-success text-center'>Вы отменили заявку на выплату, деньги возвращены пользователю!</div>";
}
?>

<?PHP
# Пишем что выплата успешна
if(isset($_POST['success'])){
    
$success_id = intval($_POST['success']);
$uid_success = intval($_POST['uid_success']);
$sum = filter_var($_POST['sum_success'], FILTER_VALIDATE_FLOAT);

# Ищем выплату
$payout = $db->query("SELECT * FROM db_payout WHERE uid = '$uid_success'")->fetchArray();
$purse = $payout['purse'];
$psSys = $payout['sys'];
$sumStat = $payout['sum'];

$paySystems = $db->query("SELECT * FROM db_paysystem WHERE `currency` = '$psSys'")->fetchArray();
$systemPay = $paySystems['name'];

# Делаем выплату
$commision = '18.00';
$sum = filter_var($sum, FILTER_VALIDATE_FLOAT);
$com = $sum - ($sum * $commision /100); // коммисия 0%
$com = round($com,2); // коммисия 0%

	# Делаем выплату							
	$paykassa_api_id = $config->pka_id;
	$paykassa_api_password = $config->pka_pass;
	$paykassa_merchant_id = $config->pkm_id;
														 
	$test = false; // тестовый режим false - выключен, true - включен
														
													
    $wallet = $purse;
    $comment = $uid_success;
    $paid_commission = '';
    $tag = $purseTag;
    $real_fee = true; // поддерживаются - BTC, LTC, DOGE, DASH, BSV, BCH, ZEC, ETH

    $paykassa = new PaykassaAPI($paykassa_api_id,$paykassa_api_password,$test);

    $params = [
        "merchant_id" => $paykassa_merchant_id, 
        "wallet" => [
            "address" => $wallet,
            "tag" => "",
        ],
        "amount" => $com,
        "system" => $systemPay,
        "currency" => $psSys,
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
		echo $res['message'];   // $res['message'] - текст сообщения об ошибке
		echo '<div class="alert alert-danger text-center">Internal error - report it to the administrator!</div>';

}
else {
$da = time();
$dd = $da + 60*60*24*15;
$ppid = $historyId;

    //действия в случае успеха
	$shop_id = $res['data']['shop_id'];                         // id мерчанта, с которого была сделана выплата, пример 122
	$transaction = $res['data']['transaction'];                 // номер транзакции платежа, пример 130236
	$txid = $res['data']['txid'];                               // txid 70d6dc6841782c6efd8deac4b44d9cc3338fda7af38043dd47d7cbad7e84d5dd , может быть пустым,
	// в этом случае информацию о транзакции можно получить с помощью универсальной ссылки из поля explorer_transaction_link, смотрите ниже
	$amount = $res['data']['amount'];                           // сумма выплаты, сколько списалось с баланса мерчанта, 0.42
	$amount_pay = $res['data']['amount_pay'];                   // сумма выплаты, столько пришло пользователю, пример: 0.41
	$system = $res['data']['system'];                           // система выплаты, куда была сделана выплата, пример: Bitcoin
	$currency = $res['data']['currency'];                       // валюта выплаты, пример: BTC
	$number = $res['data']['number'];                           // номер адреса куда были отправлены средства
	$comission_percent = $res['data']['shop_comission_percent'];// комиссия за перевод в процентах, пример: 1.5
	$comission_amount = $res['data']['shop_comission_amount'];  // комиссия за перевод сумма, пример: 1.00
	$paid_commission = $res['data']['paid_commission'];         // кто оплачивал комиссию, пример: shop

	$explorer_address_link = $res["data"]["explorer_address_link"];          // Ссылка для просмотра информации о адресе
	$explorer_transaction_link = $res["data"]["explorer_transaction_link"];      // Ссылка для просмотра информации о транзакции

// $db->query("UPDATE db_stats SET payments = payments + '$sumStat' WHERE id = '1'");
$db->query("UPDATE db_payout SET `status` = '3', `del` = '$dd' WHERE id = '$success_id'");

	echo "<div class='alert alert-success text-center'>Вы успешно обработали заявку на выплату!</div>";
}	
}
?>
<table class="table table-bordered table-striped text-center bg-white">
<thead>
<tr>
	<th>#</th>
	<th>Логин</th>
	<th>Кошелек</th>
	<th>Сумма</th>
	<th>Получит</th>
	<th>Дата заявки</th>
	<th colspan="2">Действие</th>
</tr>
</thead>
<tbody>


<?php

$rows = $db->query("SELECT * FROM `db_payout` WHERE `id` > 0 AND `status` = 1")->numRows();
if($rows == 0) { 
	echo '<tr><td colspan="6"><div class="alert alert-danger">Заявок на выплату нет</div></td></tr>';
}
else {
$list = $db->query("SELECT * FROM `db_payout` WHERE `status` = 1 ORDER BY `id` DESC LIMIT 50")->fetchAll();
foreach ($list as $list) { 
?>
<tr>
	<td><?=$list['id']; ?></td>
	
	<td><a href="/<?=$adm;?>/users/info/<?=$list['uid'];?>"><?=$list['login'];?></a></td>
	<td><?=$list['purse']; ?></td>
	<td><?=$list['sum']; ?> {!VAL!}</td>
	<td><?=$list['sum2']; ?> <?=$list['sys']; ?></td>
	<td><?=date("d/m/Y в H:i",$list['add']);?></td>
	<td>
	<form action="" method="post" class="m-0 p-0">
		<input type="hidden" name="success" value="<?=$list['id'];?>" />
		<input type="hidden" name="uid_success" value="<?=$list['uid'];?>" />
		<input type="hidden" name="sum_success" value="<?=$list['sum2'];?>" />
		<button class="btn btn-success btn-sm" type="submit">Выплачено</button>
	</form>
	</td>
	<td>
	<form action="" method="post" class="m-0 p-0">
		<input type="hidden" name="cancel" value="<?=$list['id'];?>" />
		<input type="hidden" name="uid_cancel" value="<?=$list['uid'];?>" />
		<input type="hidden" name="sum_cancel" value="<?=$list['sum'];?>" />
		<button class="btn btn-danger btn-sm" type="submit">Отменить</button>
	</form>

	</td>
</tr>
<?php
	}
}
?> 
  </tbody>
</table>
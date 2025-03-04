<?php if(!defined('FastCore')){exit('Oops!');}

$opt['title'] = 'Make a deposit';
$username = $user['login'];
# Способ платежа
$py = $pg->segment[2] ?? NULL;

if ($user['ban'] == 1){
    exit('Your account has been blocked for violating the rules');
}

# Выбран способ оплаты
if ($py) {

$selectPS = mb_strtoupper($py);
$systemPay = $db->query('SELECT * FROM db_paysystem WHERE name = ? LIMIT 1',$selectPS)->fetchArray();
$minDep = $systemPay['mindep'];
$currencyPS = $systemPay['currency'];
$psTitle = $systemPay['title'];

# Заносим в БД
$db->query("INSERT INTO db_insert (uid, login, sum, sum_x, sys, `add`, role, type, status) VALUES ('$uid','$username','$minDep','$minDep','$currencyPS', '".time()."','1','1','0')");
$order_idd = $db->LastInsert();

$params = [
	"amount" => $minDep,
	"system" => $systemPay['name'],
	"currency" =>  $currencyPS,
	"order_id" => $order_idd,
	"comment" => "Insert by id-" .$order_idd,
];

$calculate = $systemPay['pairs'] * $minDep;

$test = false; // Режим тестирования

$paykassa = new PaykassaSCI($config->pkm_id, $config->pkm_pass,$test);


$res = $paykassa->createAddress(
	$params["system"],
	$params["currency"],
	$params["order_id"],
	$params["comment"]
);

if ($res['error']) {
	echo $res['message'];
	// ошибка когда что-то не так
} else {
	if (false === $test) {
		echo '<h3 class="text-center">MAKE A DEPOSIT METHOD - <span class="text-warning">'.$psTitle.'</span></h3><div class="row m-0 m-lg-1 m-xl-2">';
		$invoice_id = $res['data']['invoice'];

		$address = $res["data"]["wallet"];
		$tag = $res["data"]["tag"];
		$tag_name = $res["data"]["tag_name"];
		$is_tag = $res["data"]["is_tag"];

		$system = $res["data"]["system"];
		$currency = $res["data"]["currency"];

		$display = sprintf("%s", $address);
		if ($is_tag) {
			$display = sprintf("address %s %s: %s", $address, mb_convert_case($tag_name, MB_CASE_TITLE), $tag);
		}

		if (null === $params["amount"]) {
			echo sprintf(
				'<b>Send a money to the %s (%s) address</b>
				<div class="input-group input-group-lg mb-2">
					<input type="text" class="form-control notranslate" placeholder="wallet" value="%s" name="wall" id="purse" onclick="copier();">
					<span class="input-group-text copy" onclick="copier();"><i class="fa fa-copy"></i></span>
				</div>
				',
				$system,
				$currency,
				htmlspecialchars($display,ENT_QUOTES, "UTF-8")
			);
			
		} else {
			echo sprintf(
				'<div class="col-lg-8 p-0"><div class="card mt-3">
<div class="p-1 p-lg-3">
<b>Send a money to the %s address:</b>
				
				<div class="input-group input-group-lg mb-2">
					<input type="text" class="form-control notranslate" placeholder="wallet" value="%s" name="wall" id="purse" onclick="copier();">
					<span class="input-group-text copy" onclick="copier();"><i class="fa fa-copy"></i></span>
				</div>
<hr>
<p>Minimal deposit: <b>%s %s</b> </p>
<p>Minimum in site currency: <b>%s {!VAL!}</b> </p>

</div>
</div></div>',
				$system,
				htmlspecialchars($display, ENT_QUOTES, "UTF-8"),
				$params["amount"],
				$currency,
				$calculate
			);
		}


		//Creating QR
		/*
		$qr_request = $paykassa->getQrLink($res['data'], $params["amount"]);
		if (!$qr_request["error"]) {
			echo sprintf(
				'<div class="col-lg-4 p-1"><div>QR Code:</div><img alt="" src="http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=%s"></div>',
				$qr_request["data"]["link"]
			);
		}
		*/
		echo '</div>';
	} else {
		echo sprintf('Test link: <a target="_blank" href="%s">Open link</a>', $res["data"]["url"]);
	}
}
?>
<style>
.copy {
	color: #fff;
  text-transform: uppercase;
  cursor: pointer;
	background-color: #00ca1b;
}
.copy:hover {
	background-color: #ff9d00;
}
</style>
<script>
function copier() {
    $("#purse").select();
    document.execCommand('copy');
	document.getElementById('purse').style.backgroundColor = '#fadbb6';
	document.getElementById('purse').style.color = '#441605';
}
</script>
<?php 
} else {
?> 
<h3 class="text-center">SELECT METHOD DEPOSIT</h3>
<div class="row m-1">
<?php

$pslist = $db->query('SELECT * FROM db_paysystem')->fetchAll();
foreach ($pslist as $psl) {
$psPage = mb_strtolower($psl['name']);
$psVal = mb_strtolower($psl['currency']);

if ($psl['currency'] == 'USD') {
	$pss = '<span class="btn btn-sm btn-light mb-2 ms-1">EUR</span><span class="btn btn-sm btn-light mb-2 ms-1">RUB</span>';
}
else {
	$pss = '';

} 

 ?>
	<div class="col-xl-3 col-lg-4 col-md-6 p-1">
	<a href="/user/insert/<?=$psPage;?>" class="card mb-1 px-2 p-1">
	<div>
	<table>
	<tr>
		<td><img src="/img/pay/ps/<?=$psPage;?>.png" style="width: 50px;"></td>
		<td class="ps-3"><div><h4 class="notranslate mb-0"><?=$psl['title'];?></h4> <span class="btn btn-sm btn-light mb-2 notranslate"><?=$psl['currency'];?></span><?=$pss;?></div></td>
	</tr>
	</table></div>
</a>
	</div>
	<?php
}
 ?>

</div>





<div class="pt-3">
<h5 class="text-uppercase text-white text-center">My last deposits</h5>
<div class="table-responsive">
<table class="stats2 table table-sm table-striped mb-0">
	<thead>
		<th class="text-center">Status</th>
		<th class="text-center">Sum</th>
		<th class="text-end pe-2">Time</th>
	</thead>
<?php
$status_array = array(0 => '<i class="fa fa-clock text-warning" title="Wait"></i>', 1 => '<i class="fa fa-check text-success" title="Success"></i>'); // статусы

$inserts = $db->query('SELECT * FROM db_insert WHERE uid = '.$uid.' ORDER BY id DESC LIMIT 10')->fetchAll();
foreach ($inserts as $inserts) {
		$sumIn = sprintf("%.2f",$inserts['sum']);
		?>
		<tr class="notranslate">
			<td class="text-center"><?=$status_array[$inserts['status']]; ?> </td>
			<td class="text-center"><span class="text-sum"><?=$sumIn; ?> <small>{!VAL!}</small></span></td>
			<td class="text-end pe-2"><?=date("d M Y - H:i",$inserts['add']); ?></td>
  		</tr>
		<?php
	}
  ?>
</table>
</div></div>
<?php 
} 
?>
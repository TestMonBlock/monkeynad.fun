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
$sum_success = filter_var($_POST['sum_success'], FILTER_VALIDATE_FLOAT);

# Ищем выплату
$payout = $db->query("SELECT * FROM db_payout WHERE uid = '$uid_success'")->fetchArray();
$pSys = '1136053';
$purse = $payout['purse'];

# Делаем выплату
$payeer = new rfs_payeer($config->py_NUM, $config->py_apiID, $config->py_apiKEY);
if ($payeer->isAuth()) {

$arBalance = $payeer->getBalance();
if($arBalance["auth_error"] == 0) {

$balance = $arBalance["balance"]["USD"]["DOSTUPNO"];

if($balance >= $sum_success) {
$array = array(
	'action' => 'output',
	'ps' => $pSys,
	'curIn' => 'USD', // счет списания
	'sumOut' => $sum_success, // сумма получения
	'curOut' => 'USD', // валюта получения
	'param_ACCOUNT_NUMBER' => $purse // получатель
);
$initOutput = $payeer->initOutput($array);
	if ($initOutput){
	$historyId = $payeer->output();
		if (!empty($historyId)) {
		    
$da = time();
$dd = $da + 60*60*24*15;
$ppid = $historyId;

// $db->query("UPDATE db_stats SET payments = payments + '$sum_success' WHERE id = '1'");
$db->query("UPDATE db_payout SET `status` = '3', `sys` = '$ppid', `del` = '$dd' WHERE id = '$success_id'");

	echo "<div class='alert alert-success text-center'>Вы успешно обработали заявку на выплату!</div>";
	
} else {
	echo "<div class='alert alert-danger text-center'>Внутреняя ошибка - сообщите о ней администратору!</div>";	
}
	}else{
	echo '<div class="alert alert-danger">Ошибка ['.print_r($payeer->getErrors(), true).'] - попробуйте через 20-30 секунд или сообщите о ней администратору!</div>'; 
}
	}else echo '<div class="alert alert-danger">Не удалось выплатить! Попробуйте позже.</div>';							
	}else echo '<div class="alert alert-danger">Ошибка 630. Не удалось выплатить! Попробуйте позже</div>';	
	}else echo '<div class="alert alert-danger">Ошибка 631. Не удалось выплатить! Попробуйте позже</div>';
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
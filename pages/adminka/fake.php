<?php if(!defined('FastCore')){echo ('Выявлена попытка взлома!');exit();}
/*
$pass = '12121212';

# Хешируем пароль
$passs = password_hash($pass, PASSWORD_DEFAULT);
echo $passs;
*/
?>
<h3>Фейки</h3>

<div class="row m-0">

<div class="col-lg-2 col-md-0 p-2"></div>
<div class="col-lg-4 col-md-6 p-2">
<div class="card">
<div class="card-header p-2"><b>Пополнить фейку</b></div>
<div class="p-2">
<?PHP

if(isset($_POST['sum_add'])){

$sum = $_POST['sum'];
$vlt = $_POST['currency'];
$uid = $_POST['uid'];
$role = $_POST['role'];

        if(!empty($sum)){ 

	 $rows = $db->query("SELECT * FROM db_users WHERE id = ?")->numRows();
	if ($rows == 0){

	# фейку фейк
	$time = time();
	$sum = round(floatval($_POST["sum"]),2);
	
	if ($role == 1) {
	$rolee = '1';
	$sys = 'USDT';
	} else {
	$rolee = '2';
	$sys = 'USDT';
	}
	
$systemPay = $db->query('SELECT *  FROM db_paysystem WHERE currency = ? LIMIT 1',$vlt)->fetchArray();
$calculateSum = round($sum * $systemPay['pairs'],2);

	# Селектим фейка
	$feik = $db->query('SELECT * FROM db_users WHERE id = '.$uid.' LIMIT 1')->fetchArray();
	$fid = $feik['id'];
	$flogin = $feik['login'];


	
	$sum_x = $calculateSum;

	# Начисляем баланс
$db->query("UPDATE `db_users` SET `sum_in` = `sum_in` + '$sum_x', `money_b` = `money_b` + '$sum_x' WHERE `id` = '$fid'");
		
	# В статистику попополнений
	$db->query("INSERT INTO db_insert (uid, login, sum, sum_x, sys, `add`, `end`, status, role) VALUES ('$fid','$flogin','$sum_x','$sum_x','$vlt','$time','$time','1','$rolee')");


	# Реф-система
	$uref = new income_ref($db);
	$uref->uRef($uid, $sum_x);
	
    	# Конкурс реф
    	$contest_ref = new contest_ref($db);
    	$contest_ref ->UpdatePoints($uid, $sum_x);
		
	# Вставляем статистику
	$db->query("UPDATE db_stats SET inserts = inserts + '$sum_x' WHERE id = '1'");
	
	echo '<div class="alert alert-success">Баланс пополнен!</div>'; 

}	else { echo '<div class="alert alert-danger">Введите логин!</div>'; }
}	else { echo '<div class="alert alert-danger">Укажите сумму</div>'; }
}
?>

<form action="" method="post" class="mb-0">
Сумма: <input type="text" value="10" name="sum" class="form-control">
Валюта: <select name="currency" class="form-control">
<?php
$sysPay = $db->query("SELECT * FROM db_paysystem")->fetchAll();
foreach ($sysPay as $ps) {
?>
	<option value="<?=$ps['currency']; ?>"><?=$ps['currency']; ?></option>
<?php
}
?>
</select>
Пользователь: <select name="uid" class="form-control">
<?php
$sum_add = $db->query("SELECT * FROM db_users WHERE role = '2'")->fetchAll();
foreach ($sum_add as $ad) {
?>
	<option value="<?=$ad['id']; ?>"><?=$ad['login']; ?> (пополнено: <?=$ad['sum_in']; ?> руб)</option>
<?php
}
?>
</select>
<input type="submit" name="sum_add" class="btn btn-success mt-2" style="font-weight: bold;" value="ПОПОЛНИТЬ"> 
<span class="float-end"> 
<div class="input-group input-group-sm mt-2">
<span class="input-group-text">РОЛЬ</span>
<input type="text" value="2" name="role" class="form-control me-1" style="width: 50px;"></span>
</div>
</form>
</div>
</div>
</div>


<div class="col-lg-4 col-md-6 p-2">
<div class="card">
<div class="card-header p-2"><b>Выплатить фейку</b></div>
<div class="p-2">
<?PHP

if(isset($_POST['sum_out'])){

$sum = $_POST['sum'];
$uid = $_POST['uid'];

    if(!empty($sum)){ 

	# фейку фейк
	$sum = round(floatval($_POST["sum"]),2);
	$sys = 'payeer';

	# Селектим фейка
	$feik = $db->query('SELECT * FROM db_users WHERE id = '.$uid.' LIMIT 1')->fetchArray();
	$fid = $feik['id'];
	$flogin = $feik['login'];
	$da = time();
	$dd = $da + 60*60*24*15;
	$ppid = 'TRX';
	$pSys = '1136053';
	$purse = $flogin;

	# Начисляем баланс
	$db->query('UPDATE `db_users` SET `sum_out` = `sum_out` + '.$sum.', `money_p` = `money_p` - '.$sum.' WHERE `id` = '.$fid.'');

	# Вставляем запись в выплаты
	$db->query("INSERT INTO db_payout (uid, login, sum, sys, psys, `add`, `del`, status) VALUES ('$fid','$flogin','$sum','$ppid','$pSys','$da','$dd','3')");

	# Вставляем статистику
	$db->query("UPDATE db_stats SET payments = payments + '$sum' WHERE id = '1'");
	echo '<div class="alert alert-success">Пользователю выплачено <b>'.$sum.' руб</b>!</div>'; 

}	else { echo '<div class="alert alert-danger">Укажите сумму</div>'; }
}
?>

<form action="" method="post" class="mb-0">
Сумма: <input type="text" value="10" name="sum" class="form-control">
Пользователь: <select name="uid" class="form-control">
<?php
$sum_out = $db->query("SELECT * FROM db_users WHERE role = '2'")->fetchAll();
foreach ($sum_out as $ou) {
?>
	<option value="<?=$ou['id']; ?>"><?=$ou['login']; ?> (выплачено: <?=$ou['sum_out']; ?> руб)</option>
<?php
}
?>
</select>
<input type="submit" name="sum_out" class="btn btn-danger mt-2" style="font-weight: bold;" value="ВЫПЛАТИТЬ"> 
</form>
</div>
</div>
</div>


</div>

<?php 

# Форма входа
if (isset($_POST['auth'])){
$a_uid = $_POST['a_uid'];
$a_login = $_POST['a_login'];
$_SESSION['uid'] = $a_uid;
$_SESSION['login'] = $a_login;
 header('Location: /user/dashboard');return;
echo 'Вошли под';
}

?>

<center class="card p-2 m-2">
<h5 class="card-title">Список фейков</h5>
<table class="table table-striped table-sm table-bordered mb-0 text-center" style="width:70%;">
<thead>
	<th>ID</th>
	<th>Логин</th>
	<th>Пополнено</th>
	<th>Выплачено</th>
	<th>Аккаунт</th>
</thead>
<?php
$flist = $db->query("SELECT * FROM db_users WHERE role = '2' ORDER BY sum_in DESC")->fetchAll();
foreach ($flist as $fl) {
?>
<tr>
 	<td><?=$fl['id']; ?></td>
	<td><?=$fl['login']; ?></td>
	<td class="text-success alert-success"><?=$fl['sum_in']; ?></td>
	<td class="text-danger alert-danger"><?=$fl['sum_out']; ?></td>
	<td>

<form action="" method="POST" class="m-0 p-0">
  <input type="hidden" name="a_uid" class="form-control" value="<?=$fl['id']; ?>">
  <input type="hidden" name="a_login" class="form-control" value="<?=$fl['login']; ?>">
    <button class="btn btn-sm btn-outline-dark" name="auth" type="submit">Войти</button>
</form></td>
</tr>
<? } ?>
</table>
</center>
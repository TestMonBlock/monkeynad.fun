<?php if(!defined('FastCore')){exit('Opss!');}

# Инфа про юзера
if($pg->segment[2] === 'info'){

$id = filter_var($pg->params[1], FILTER_VALIDATE_INT);
$db->query("SELECT * FROM db_users WHERE id = '$id' LIMIT 1");

if($db->numRows() != 1){ 
	echo '<div class="alert alert-danger m-2">Игрока с таким ID не существует!</div>'; return;
}

$db->query("SELECT * FROM db_users WHERE id = '$id' LIMIT 1");	
$user = $db->fetchArray();

$userip = $db->query("SELECT * FROM db_uips WHERE id = '$id' LIMIT 1")->fetchArray();


?>

<h3>Редактирование пользователя #<?=$user['id']; ?></h3>
<div class="row m-1">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">

<ul class="list-group mb-3">
<li class="list-group-item bg-light">Информация о пользователе <b class="float-end"><?=$user['login']; ?></b></li>
<li class="list-group-item"><b>Данные пользователя:</b><br/>
Пользователь: <span class="float-end"><?=$user['email']; ?> / <?=$user['id']; ?></span><br/>
Реферер: <span class="float-end"><?=$user['referer']; ?> с ID <?=$user['rid']; ?></span><br/>
Дата регистрации: <span class="float-end"><?=date("d/m/Y в H:i",$user['reg']);?></span><br/>
Дата входа: <span class="float-end"><?=date("d/m/Y в H:i",$user['auth']);?></span><br/>
IP адрес рег: <span class="float-end"><?=$userip['ip'];?></span><br/>
IP адрес вход: <span class="float-end"><?=$userip['ip2'];?> </span><br/>
Пришел с сайта: <span class="float-end"><?=$user['refsite'];?></span><br/>
Заблокирован: <span class="float-end"><?=($user['ban'] > 0) ? '<span class="badge bg-danger">Да</span>' : '<span class="badge bg-success">Нет</span>'; ?></span>
</li>
<li class="list-group-item"><b>Финансовые данные:</b><br/>
Пополнил: <span class="float-end"><?=$user['sum_in']; ?> руб.</span><br/>
Выплачено: <span class="float-end"><?=$user['sum_out']; ?> руб.</span><br/>
Баланс для покупок: <span class="float-end"><?=$user['money_b']; ?> руб.</span><br/>
Доступно для вывода: <span class="float-end"><?=$user['money_p']; ?> руб.</span><br/>
Банк игрока: <span class="float-end"><?=$user['bankin']; ?> руб. / <?=$user['bankout']; ?> руб.</span><br/>

Скорость майнинга: <span class="float-end">[день <?=round($user['speed']/100,2); ?> руб.] [неделя <?=round($user['speed']/100*7,2); ?> руб.]</span><br/>
Принес рефереру: <span class="float-end"><?=$user['ref_to']; ?> руб.</span><br/>
Рефералов и заработок: <span class="float-end"><?=$user['refs']; ?> (<?=$user['income']; ?> руб.)</span><br/>
Серфинг: <span class="float-end"><?=$user['surf_earn']; ?> руб. (<?=$user['surf_view']; ?> просмотры)</span><br/>
</li>
</ul>




<ul class="list-group mb-3">
<li class="list-group-item bg-light">Движение</li>
<li class="list-group-item"><b>Депозиты:</b>
<table class="stats2 table table-sm table-striped mb-0">
	<thead>
		<th class="text-center">Валюта</th>
		<th class="text-center">Сумма</th>
		<th class="text-end pe-2">Дата</th>
	</thead>
<?php
$inserts = $db->query('SELECT * FROM db_insert WHERE uid = '.$user['id'].' AND status = 1 ORDER BY id DESC LIMIT 10')->fetchAll();
foreach ($inserts as $inserts) {
		$sumIn = sprintf("%.2f",$inserts['sum']);
		?>
		<tr class="notranslate">
			<td class="text-center"><?=$inserts['sys']; ?> </td>
			<td class="text-center"><span class="text-sum"><?=$sumIn; ?> <small>{!VAL!}</small></span></td>
			<td class="text-end pe-2"><?=date("d M Y - H:i",$inserts['add']); ?></td>
  		</tr>
		<?php
	}
  ?>
</table>
</li>
<li class="list-group-item"><b>Выплаты:</b>
<table class="stats2 table table-sm table-striped mb-0">
	<thead>
		<th class="text-center">Статус</th>
		<th class="text-center">Валюта</th>
		<th class="text-center">Сумма</th>
		<th class="text-end pe-2">Дата</th>
	</thead>
<?php
$status_array = array(0 => '<span class="badge bg-warning text-dark">Wait</span>', 1 => '<span class="badge bg-warning text-dark">Wait</span>', 2 => '<span class="badge bg-danger">Cancel</span>', 3 => '<span class="badge bg-success text-white">Success</span>');
$pays = $db->query('SELECT * FROM db_payout WHERE uid = '.$user['id'].' ORDER BY id DESC LIMIT 10')->fetchAll();
foreach ($pays as $pays) {
		$sumOut = sprintf("%.2f",$pays['sum']);
		?>
		<tr class="notranslate">
			<td class="text-center"><?=$status_array[$pays['status']]; ?></td>
			<td class="text-center"><?=$pays['sys']; ?> </td>
			<td class="text-center"><span class="text-sum"><?=$sumOut; ?> <small>{!VAL!}</small></span></td>
			<td class="text-end pe-2"><?=date("d M Y - H:i",$pays['add']); ?></td>
  		</tr>
		<?php
	}
  ?>
</table>
</li>
</ul>



</div>

<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
<div class="card mb-3">
<div class="card-header">Действия с пользователем: 
<form action="" method="POST" class="float-right m-0 p-0" style="position: absolute; right: 10px;top: 8px;">
	<input type="hidden" name="ban" value="<?=($user['ban'] > 0) ? 0 : 1 ;?>" />
	<button class="btn btn-sm btn-outline-dark float-right" name="baneed"><?=($user['ban'] > 0) ? 'Разблокировать' : 'Заблокировать'; ?></button>
</form>
</div>
<div class="card-body">
<?
if(isset($_POST["baneed"])){
	$db->query("UPDATE db_users SET ban = '".intval($_POST["ban"])."' WHERE id = '$id'");
	echo "<div class='alert alert-success'>Пользователь был ".($_POST["ban"] > 0 ? "заблокирован!" : "разблокирован!")."</div>";
}
?>

<?
if(isset($_POST["balance"])){
$sum = filter_var($_POST['sum'], FILTER_VALIDATE_FLOAT);
$bal = $_POST['schet'];
$type = ($_POST["balance"] == 1) ? "-" : "+";
$string = ($type == "-") ? "У пользователя снято {$sum} руб." : "Пользователю добавлено {$sum} руб.";
	$db->query("UPDATE db_users SET {$bal} = {$bal} {$type} {$sum}, hold = hold {$type} {$sum} WHERE id = '$id'");
	echo "<div class='alert alert-success text-center'>$string</div>";
}
?>
<b>Операции с балансом:</b>
<form action="" method="POST" class="row">
<div class="col-lg-6">
<select name="balance" class="form-control">
<option value="2">Добавить на баланс</option>
<option value="1">Снять с баланса</option>
</select>
</div><div class="col-lg-6">
<select name="schet" class="form-control">
<option value="money_p">Для покупок</option>
</select></div><div class="col-lg-12">
<input type="text" name="sum" value="100" class="form-control form-control-sm mt-2"/>

<button class="btn btn-outline-dark mt-2" type="submit">Выполнить</button>

</div>

</form>

</div>

</div>
<div class="card mb-3">
<div class="card-header">Подделать пользователя</div>
<div class="card-body">

<?php
if(isset($_POST["usar"])){
$loga = $_POST['loga'];
$emal = $_POST['emal'];
$roll = $_POST['role'];

 $db->query('UPDATE db_users SET login = ?, email = ?, role = ? WHERE id = ?',  $loga,$emal, $roll, $id);
	echo '<div class="alert alert-success text-center">Изменить</div>';
}
?>

<form action="" method="POST">
<div class="input-group input-group-sm mb-2">
<span class="input-group-text">Логин</span>
<input type="text" name="loga" value="<?=$user['login']; ?>" class="form-control">
</div>
<div class="input-group input-group-sm mb-2">
<span class="input-group-text">Email</span>
<input type="text" name="emal" value="<?=$user['email']; ?>" class="form-control">
</div>
<div class="input-group input-group-sm mb-2">
<span class="input-group-text">Роль</span>
<input type="text" name="role" value="<?=$user['role']; ?>" class="form-control">
</div>

<small> 1 - юзер; 2 - фейк;</small><br>
    <button class="btn btn-outline-dark mt-1" name="usar" type="submit">Изменить</button>
</form>

</div></div>




 </div>
</div>

<h4>Баунти</h4>

            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table table-striped align-items-center table-flush table-sm">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Логин</th>
                    <th scope="col">Задание</th>
                    <th scope="col">Награда</th>
                    <th scope="col">Дата</th>
                  </tr>
                </thead>
                <tbody>
<?PHP
$bounty = $db->query("SELECT * FROM db_reviews WHERE uid = '$id' ORDER BY reward DESC LIMIT 10")->fetchAll();
 foreach($bounty as $b){
$login_user2 = $b['login'];
?>
<tr>
	<td><a href="/<?=$adm;?>/users/info/<?=$b['uid'];?>"><?=$login_user2;?></a></td>
	<td><?=$b['text'];?> </td>
	<td><?=$b['reward'];?> {!VAL!}</td>
	<td><?=date("d.m.Y H:i",$b['date']); ?></td>
</tr>
<?PHP
	}
?>
                </tbody>
              </table>
            </div>


<h4>Рефералы</h4>

            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table table-striped align-items-center table-flush table-sm">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Логин</th>
                    <th scope="col">Баланс</th>
                    <th scope="col">Пароль</th>
                    <th scope="col">Источник</th>
                    <th scope="col">Регистрация</th>
                  </tr>
                </thead>
                <tbody>
<?PHP
$ref = $db->query("SELECT * FROM db_users WHERE rid = '$id' ORDER BY ref_to DESC, surf_earn DESC LIMIT 50")->fetchAll();
 foreach($ref as $r){
$login_user = $r['ban'] == 0 ? $r['login'] : '<div class="text-danger" title="забанен">'.$r['login'].'</div>';
?>
<tr>
	<td><a href="/<?=$adm;?>/users/info/<?=$r['id'];?>"><?=$login_user;?></a></td>
	<td><?=$r['money_b']+$r['money_p'];?> </td>
	<td><?=$pasw; ?></td>
	<td><?=$r['refsite']; ?></td>
	<td><?=date("d.m.Y в H:i",$r['reg']); ?></td>
</tr>
<?PHP
	}
?>
                </tbody>
              </table>
            </div>

</div>
<?PHP
return;
} else {
?>

<h3 class="">Пользователи</h3>

<form action="" method="POST" style="width: 250px;">
    <div class="input-group">
	<input type="text" name="login" class="form-control" placeholder="Введите логин" />
		<div class="input-group-append">
			<input type="submit" class="btn btn-success" value="Поиск" />
		</div>
	</div>
</form>
<?php

# Забанить выбранных пользователей
if(isset($_POST['submit_user'])){
    if(!empty($_POST['check_box'])){
		echo '<div class="alert alert-danger">Забанены пользователи:<br/><b> ';
		foreach($_POST['check_box'] as $check_up) { 
			$db->query("UPDATE db_users SET ban = '1' WHERE id = '$check_up'"); // обновляем
			
			$uuss = $db->query("SELECT * FROM db_users WHERE id = '$check_up'")->fetchArray();
			echo $uuss['login'].', ';
		}
	} echo '</b></div>'; 
}

?>
<?php
# Страница пользователей
$page = $pg->params[1] ?? 1;
$rows = 100;  // кол-во записей для вывода
$start = ($page * $rows) - $rows; // следущая запись после $rows

# Если логин найден
if(isset($_POST["login"])){
$login = $_POST["login"];
$db->query('SELECT * FROM `db_users` WHERE `login` LIKE "%$login%"');
$rows = 1;
$navs= 0;
}

?>

<form action="" method="POST">
<table class="table table-sm table-bordered table-hover text-center bg-white">
<thead class="bg-light">
	<th class="p-0"><input class="btn btn-danger btn-sm p-0" type="submit" name="submit_user" title="Забанить выбранных пользователей" value="БАН"></th>
	<th>ID</th>
	<th>Логин</th>
	<th>Баланс</th>
	<th>IN/OUT</th>
	<th>Referer</th>
	<th>Откуда</th>
	<th>Регистрация</th>
</thead>

<?php
if (isset($_POST["login"])) {
	$login = $_POST["login"];
	$u_data = $db->query("SELECT * FROM db_users WHERE login LIKE '%$login%'")->fetchAll();
} else {
	$n_rows = $db->query("SELECT id FROM db_users ORDER BY id DESC LIMIT 1")->fetchArray();
	$total = $n_rows['id'];
	$navs = ceil($total / $rows);

	$u_data = $db->query('SELECT * FROM `db_users` ORDER BY `id` DESC LIMIT '.$start.','.$rows.'')->fetchAll();
}

foreach ($u_data as $u) {
$login_user = $u['ban'] == 0 ? $u['login'] : '<div class="text-danger" title="забанен">'.$u['login'].'</div>';
?>
<tr>
	<td><input type="checkbox" name="check_box[]"  value="<?=$u['id'];?>"></td>
	<td><?=$u['id'];?></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$u['id'];?>"><?=$login_user;?></a></td>
	<td><?=$u['money_b']+$u['money_p'];?> </td>
	<td><span class="text-success"><?=$u['sum_in'];?> </span> / <span class="text-danger"><?=$u['sum_out'];?> </span></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$u['rid'];?>" class="text-dark"><?=$u['referer'];?></a></td>
	<td><?=$u['refsite'];?></td>
	<td><?=date("d/m/Y в H:i",$u['reg']);?></td>
</tr>
<?php
}
?>
</table>

</form>
<?php
	# Выводим страницы
	echo '<ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Страница</a></li>';
	for ($i = 1; $i <= $navs; $i++){ echo '<li class="page-item"><a class="page-link" href="/'.$adm.'/users/p/'.$i.'">'.$i.'</a></li>'; }
	echo '</ul>';
}
?>
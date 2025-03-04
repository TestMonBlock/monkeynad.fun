<?php if(!defined('FastCore')){exit('Opss!');}
$limits = 200;

if(!empty($pg->segment[2] ==='inserts')) $type=1; // пополнения
if(!empty($pg->segment[2] ==='payouts')) $type=2;  // выплаты
if(!empty($pg->segment[2] ==='store')) $type=3; // покупки
?>

<?php
if($type==1) { 
    
    if (isset($_POST['inall'])) {
        $inall = 0;
    } else {
         $inall = 1;
    }
    
    if (isset($_POST['daily'])) {
        $day = true;
    } 
?>
<h3>Статистика пополнений</h3>
<form method="post">
    <input type="submit" name="inall" class="btn btn-dark" value="Не оплаченные">
    <input type="submit" name="daily" class="btn btn-dark" value="По дням">
</form>

<table class="table table-sm table-bordered table-hover text-center bg-white">
<?php 
if ($day) {
    
 ?>
 
<thead class="bg-light">
	<th>Кол-во</th>
	<th>Пополнили</th>
	<th>День</th>
</thead>
 <?	
// вывод по дням
$inserts = $db->query("SELECT DATE(FROM_UNIXTIME(`add`)) AS daily, COUNT(*) AS id, SUM(sum) AS sumin
 FROM   db_insert WHERE status = 1 AND  role = 1 GROUP BY DATE(FROM_UNIXTIME(`add`)) ORDER BY daily DESC LIMIT 30")->fetchAll();
 foreach($inserts as $in) {
 $sumAll += $in['sumin'];
?>


<tr>
	<td><?=$in['id'];?> шт.</td>
	<td><b><?=round($in['sumin']);?> Руб.</b></td>
	<td><?=date($in['daily']);?></td>
</tr>
 <?  
}
echo '<tr><td colspan="3" class="bg-light">Общая сумма пополнений за 30 дней: <b>'.round($sumAll).'</b>  руб.</td></tr>';
} else {
?>
  
<thead class="bg-light">
	<th>ID</th>
	<th>Логин</th>
	<th>Пополнил</th>
	<th>Начислено</th>
	<th>PS</th>
	<th>Дата создания</th>
	<th>Дата завершение</th>
</thead>
<?
$insert = $db->query('SELECT * FROM db_insert WHERE status = '.$inall.' ORDER BY id DESC LIMIT '.$limits.'')->fetchAll();
	foreach ($insert as $in) {
	    
$ips = $db->query('SELECT * FROM db_uips WHERE id = '.$in['uid'].' LIMIT 1')->fetchArray();
$geoIP = $ips['country'];

?>
<tr>
	<td><?=$in['id'];?></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$in['uid'];?>"><i class="flag-<?=$geoIP;?>"></i> <?=$in['login'];?></a></td>
	<td><?=$in['sum'];?> Руб.</td>
	<td><?=$in['sum_x'];?> Руб.</td>
	<td class="badge-light"><?=$in['sys'];?></td>
	<td><?=date("d/m/Y в H:i",$in['add']);?></td>
	<td><?=date("d/m/Y в H:i",$in['end']);?></td>
</tr>
<?php
    } 
} 
?>
</table>

<?
} else if($type==2) {
    
    if (isset($_POST['daily2'])) {
        $day2 = true;
    } 
?>
<h3>Статистика выплат</h3>

<form method="post">
    <input type="submit" name="daily2" class="btn btn-dark" value="По дням">
</form>

<table class="table table-sm table-bordered table-hover text-center bg-white">
    <?php 
if ($day2) {
    
 ?>
 
<thead class="bg-light">
	<th>Кол-во</th>
	<th>Пополнили</th>
	<th>День</th>
</thead>
 <?	
// вывод по дням
$inserts = $db->query("SELECT DATE(FROM_UNIXTIME(`add`)) AS daily, COUNT(*) AS id, SUM(sum) AS sumout
 FROM db_payout WHERE status = 3 GROUP BY DATE(FROM_UNIXTIME(`add`)) ORDER BY daily DESC LIMIT 30")->fetchAll();
 foreach($inserts as $in) {
 $sumAll += $in['sumout'];
?>


<tr>
	<td><?=$in['id'];?> шт.</td>
	<td><b><?=$in['sumout'];?> Руб.</b></td>
	<td><?=date($in['daily']);?></td>
</tr>
 <?  
}
echo '<tr><td colspan="3" class="bg-light">Общая сумма выплат за 30 дней: <b>'.$sumAll.'</b>  руб.</td></tr>';
} else {
?>
<thead class="bg-light">
	<th>ID</th>
	<th>Логин</th>
	<th>Вывел</th>
	<th>Кошелек</th>
	<th>Система</th>
	<th>Дата</th>
</thead>
<?
$payout = $db->query('SELECT * FROM db_payout WHERE status = 3  ORDER BY id DESC LIMIT '.$limits.'')->fetchAll();
	foreach ($payout as $py) {
?>
<tr>
	<td><?=$py['id'];?></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$py['uid'];?>"><?=$py['login'];?></a></td>
	<td><?=$py['sum'];?> Руб.</td>
	<td><?=$py['purse'];?></td>
	<td><?=$py['sys'];?></td>
	<td><?=date("d/m/Y в H:i",$py['add']);?></td>
</tr>
<? } 
}
?>
</table>
<?php

} else if($type==3) {

?>
<h3>Статистика покупок персонажей</h3>
<table class="table table-sm table-bordered table-hover text-center bg-white">
<thead class="bg-light">
	<th>ID</th>
	<th>Логин</th>
	<th>Название</th>
	<th>Скорость</th>
	<th>Дата сбора</th>
	<th>Покупка</th>
	<th>Закрытие</th>
</thead>
<?

$items = $db->query('SELECT * FROM db_store ORDER BY id DESC LIMIT '.$limits.'')->fetchAll();
	foreach ($items as $buy) {
$login = $db->query('SELECT login FROM db_users ORDER BY id = '.$buy['uid'].' DESC LIMIT 1')->fetchArray();
?>
<tr>
	<td><?=$buy['id'];?></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$buy['uid'];?>"><?=$login['login'];?></a></td>
	<td><?=$buy['title'];?></td>
	<td><?=$buy['speed'];?> Руб.</td>
	<td><?=date("d/m/Y в H:i",$buy['last']);?></td>
	<td><?=date("d/m/Y в H:i",$buy['add']);?></td>
	<td><?=date("d/m/Y в H:i",$buy['end']);?></td>
</tr>
<?} ?>
</table>
<?php
}
?>
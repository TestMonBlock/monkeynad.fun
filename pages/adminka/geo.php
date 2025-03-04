<?php if(!defined('FastCore')){exit('Opss!');}
$limits = 50;
$times = time()+60*60*20;
//$times = time();

	# Удаляем клик за 24/12 часа если время прошло
	$db->query('DELETE FROM db_surf_views WHERE time_end < '.$times.'');
?>

<h3>Список просмотров</h3>
<table class="table table-sm table-bordered table-hover text-center bg-white">
<thead class="bg-light">
	<th>ID</th>
	<th>Ссылка</th>
	<th>Логин</th>
	<th>Вход</th>
	<th>Визит</th>
</thead>
<?
$surfview = $db->query('SELECT * FROM db_surf_views WHERE id ORDER BY id DESC LIMIT '.$limits.'')->fetchAll();
	foreach ($surfview as $sv) {
$svl = $db->query('SELECT login,auth FROM db_users ORDER BY id = '.$sv['uid'].' DESC LIMIT 1')->fetchArray();
?>
<tr>
	<td><?=$sv['id'];?></td>
	<td><?=$sv['link'];?></td>
	<td><a href="/<?=$adm;?>/users/info/<?=$sv['uid'];?>"><?=$svl['login'];?></a></td>
	<td><?=date("H:i:s",$svl['auth']);?></td>
	<td><?=date("H:i:s",$sv['time_end']-(86400));?></td>
</tr>
<? } ?>
</table>
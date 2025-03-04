<?php if(!defined('FastCore')){ exit('Oops!'); }

/*
* Модуль ежедневного конкурса инвесторов с 5% банком от суммы пополнений за текущий день, банк распределяется на 5 участников.
* Powered by Jumast - jumast@ya.ru 
* Date: v1 - 10/05/2020;
*/

# Заголовок
$opt['title'] = 'Leaders today';

# Начало и конец конкурса
$c_date = date("Ymd",time());
$c_date_begin = strtotime($c_date." 00:00:00");
$c_date_end = strtotime($c_date." 23:59:59");

# Таймер
$dt=$c_date_end-time();
$dd=(int)($dt/86400);
$hh=(int)(($dt-$dd*86400)/3600);
$mm=(int)(($dt-$dd*86400-$hh*3600)/60);
$ss=(int)($dt-$dd*86400-$hh*3600-$mm*60);

# Определение платежей за текущий день
$sum_in = $db->query('SELECT SUM(sum) FROM db_insert WHERE `add` >= '.$c_date_begin.' AND `add` <= '.$c_date_end.' AND status = 1')->fetchAll();
foreach ($sum_in as $all) {
	$jackpot = round($all['SUM(sum)']/10,2); // банк 5% от пополнений за текущий день
}


?>

<div class="alert bg-light text-center">
Become one of the leaders of the day among the active ones and take a consolation prize!<br/>
When replenishing the game balance, you are already in the table of participants for the current day.<br/>
The Fund is <font style="color:#e21;"><b>5%</b></font> which is formed from the amount
of deposits during the day, 5 winners share the whole bank, the more you replenish the higher the place. 
The competition is held daily. Results at 0:00 +3 GMT<br/>

</div>
<div class="m-1 mb-3 text-center">
<b>PRIZES<br/><i>
<span class="badge bg-warning" style="font-size: 100%;">1ST PLACE: 50%</span>
<span class="badge bg-danger" style="font-size: 100%;">2ND PLACE: 25%</span>
<span class="badge bg-info" style="font-size: 100%;">3RD PLACE: 15%</span>
<span class="badge bg-secondary" style="font-size: 100%;">4TH PLACE: 5%</span>
<span class="badge bg-secondary" style="font-size: 100%;">5TH PLACE: 5%</span></i>
</b>
</div>

<div class="row">

<div class="col-lg-2 col-md-0">
</div>

<div class="col-lg-8 col-md-12">

<div class="alert about blockprof text-center">
 <b style="font-size: 34px;">CURRENT FUND: <font style="color:#fcd357;font-weight: bold;"><?=$jackpot; ?><span class="notranslate"> USD</span></font></b><hr class="my-1">
 <span>ENDING AFTER: <b><span id="my_timer"> <?=sprintf("%02d:%02d:%02d", $hh, $mm, $ss);?></span></b> hour</span></div>

</div>

<div class="col-md-12">


<div class="stats-title text-uppercase">Leaders Today</div>
<div class="table-responsive">
<table class='stats2 table table-bordered text-center mb-0'>
  <thead>
	<th>#</th>
	<th>User</th>
	<th>Deposit</th>
	<th>Prize</th>
  </thead>

<?php
# Список лидеров на сегодня
$sum_in = $db->query('SELECT login, SUM(sum) AS `sum` FROM db_insert WHERE `add` >= '.$c_date_begin.' AND `add` <= '.$c_date_end.' AND status = 1 GROUP BY login ORDER BY `sum` DESC LIMIT 10')->fetchAll();

	$rubs = '<span class="badge btn-success p-1 px-2 rounded-pill notranslate" style="font-size: 120%;"><i class="fa fa-gift" style="opacity: 0.7;"></i>&nbsp; ';
	$rub = ' USD</span>';
if($sum_in == true) {
$i=1;
foreach ($sum_in as $bon) {
?>
<tr>
	<td><b><?=$i; ?></b></td>
	<td><b class="notranslate"><?=$bon["login"]; ?></b></td>
	<td><b class="notranslate"><?=round($bon["sum"],2); ?> usd.</b></td>
	<td><?php if ($i==1) echo $rubs. $jackpot*0.5. $rub; else if ($i==2) echo $rubs. $jackpot*0.25. $rub; else if ($i==3) echo $rubs. $jackpot*0.15. $rub; else if ($i==4) echo $rubs. $jackpot*0.05. $rub; else if ($i==5) echo $rubs. $jackpot*0.05. $rub; else echo "-";?></td>
</tr>
<?php
	$i++;
		}
	} else echo '<tr><td align="center" colspan="4">No one has replenished today yet, there are no participants</td></tr>'
?>

</table>

</div>
</div>

<div class="col-md-12 p-2">
<center>
	<h4>Results of past winners</h4>
</center>
<div class="row m-0">
<?php
# Прошлые конкурсы
$end_contest = $db->query('SELECT * FROM db_liders WHERE id ORDER BY id DESC LIMIT 9')->fetchAll();
foreach ($end_contest as $li) {
?>
<div class="col-lg-4 col-md-6 p-2">
<div class="list-group mb-2">

<div class="list-group-item bg-warning p-1"><b>Round #<?=$li['id'];?></b></div>

<div class="list-group-item p-1">Date end:
<span class="float-end"><b><?=date("d/m/Y",$li['date_add']-24*60*60);?></b></span>
</div>

<div class="list-group-item p-1">Bank:
<span class="float-end"><b><?=$li['bank'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i></span>
</div>

<div class="list-group-item p-1">1-place:
<span class="float-end notranslate"><b><?=$li['u1'];?> (<?=$li['1m'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i>)</span>
</div>

<div class="list-group-item p-1">2-place:
<span class="float-end notranslate"><b><?=$li['u2'];?> (<?=$li['2m'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i>)</span>
</div>

<div class="list-group-item p-1">3-place:
<span class="float-end notranslate"><b><?=$li['u3'];?> (<?=$li['3m'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i>)</span>
</div>

<div class="list-group-item p-1">4-place:
<span class="float-end notranslate"><b><?=$li['u4'];?> (<?=$li['4m'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i>)</span>
</div>

<div class="list-group-item p-1">5-place:
<span class="float-end notranslate"><b><?=$li['u5'];?> (<?=$li['5m'];?></b> <i class="fa fa-dollar-sign" style="font-size: 80%;"></i>)</span>
</div>

</div>
</div>

<?php 
}
?>
</div>

</div>
</div>
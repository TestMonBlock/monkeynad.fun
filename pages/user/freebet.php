<? if(!defined('FastCore')){ exit('Oops!');}
$opt['title'] = 'Spin Win';

?>

<div class="alert text-center">
Try your luck, make a deposit and get spins!<br/>
For each deposit in the amount of 20 {!VAL!}. You get 1 spin to try your luck for free!<hr class="my-1">
<h4>Spin awards: <b class="text-danger notranslate">1, 3, 5, 10, 20 {!VAL!}</b></h4>
</div>
<style>
	.btn-spin {
	background: rgb(104, 202, 0);
  width: 100%;
  height: 75px;
  line-height: 50px;
  border-radius: 10px;
  border-width: 0px 0px 5px;
  border-style: none none solid;
  border-color: current;
  color currentcolor rgb(115, 155, 4);
  border-image: none;
  color: rgb(12, 52, 102);
  text-align: center;
  cursor: default;
  font-size: 20px;
  font-weight: bold;}
  .btn-spin:hover {
	background: rgb(104, 202, 0);

  }
</style>



<div class="row">
<div class="col-lg-3"></div>
<div class="col-lg-6 ps-3 pe-3" style="border-left: 6px dashed #042377;border-right: 6px dashed #042377;border-radiu1s: 6px;background:#eee;">
<div style="background:#3f51b5;padding:15px;border-radius:5px;width:100%;margin:10px auto;border-bottom:5px solid  #2f41a5;">
<div class="card card-body alert-primary text-center text-uppercase mt-2 mb-2 bg-light" style="min-height: 100px;">
<?php

# Начало
if(isset($_POST['freebet'])){	

	# Проверяем билеты
	if(1 <= $user['freebet']) {

		# Кол-во и сумма призов
		$gift_cnt = array(1 => "1", 2 => "1", 3 => "3", 4 => "1", 5 => "3", 6 => "1", 7 => "3");

		# Настройка шанса
		$rand = rand(1, 200);
		if($rand >= 1 && $rand <= 35) {$i= 1;} // 43%
		elseif($rand >= 36 && $rand <= 45) {$i= 2;} // 3%
		elseif($rand >= 46 && $rand <= 55) {$i= 3;}  // 2%
		elseif($rand >= 56 && $rand <= 81) {$i= 4;} // 33%
		elseif($rand >= 82 && $rand <= 83) {$i= 5;} // 1%
		elseif($rand >= 84 && $rand <= 90) {$i= 6;} // 8%
		elseif($rand >= 91 && $rand <= 200) {$i= 7;} // 10%

		$random_sum = $gift_cnt[$i];
		$money_bill = $random_sum; // рандомная сумма
		$freebet = 1; // списываем 1 билет
		$time = time();
		$login = $user['login'];

		# Начисляем выигрыш и списываем билет
		$db->query("UPDATE db_users SET freebet = freebet - $freebet, money_p = money_p + $money_bill WHERE id = '$uid'");
		# Вносим в статистику
		$db->query("INSERT INTO db_loto_wins (uid, login, num_bill, sum, `add`) VALUES ('$uid', '$login', '$rand', '$money_bill', '$time')");

		echo '<h3 class="text-success m-0 p-0"><b>You win: '.$money_bill.' {!VAL!}</b><br/> <small>Congratulations!</small></h3>';
	}	else echo '<h3 class="m-0 p-0" style="color: #e34;"><b>No Spins!</b> <br/><small style="color: #334;">Make a deposit of 20 {!VAL!}!</small></h3>';	
} else {
	echo '<h3 class="m-0 p-0"><b>Try your luck!</b><br/><small>Press button!</small></h3>';
}
?></div>


</div>
<div class="row">
<div class="col-lg-6">
<div style="background:#3f51b5;width:100%;height:75px;border-radius:10px;border-bottom:5px solid #2f41a5;float:left;color:#FFF;font-size:20px;line-height:50px;padding:10px 20px;font-family:'Barlow Semi Condensed',sans-serif;font-weight:bold"><span>SPINS</span>
<div style="float:right;background: #4f61c5;width:50%;height:50px;border-radius:5px;border-top:5px solid  #2f41a5;text-align:center;line-height:40px" id="cnt_free_spins"><?=$user['freebet']; ?></div></div>
</div>
<div class="col-lg-6">
<form action="" method="post" class="mb-2 mt-o text-center">
	<input type="hidden" name="freebet" />
	<button class="btn btn-success btn-spin" type="submit" > <i class="fas fa-bolt"></i> <b>SPIN</b></button>
</form></div>
</div>
</div>


</div>



<div class="row">

<div class="col-lg-3"></div>
<div class="col-lg-6">
<br>
<div class="card p-2">
<h5 class="text-center">Your history</h5>
<table class="table table-sm table-bordered text-center">  
<thead>
	<th>#</th>
	<th>Win</th>
	<th>Time</th>
</thead>
<?php
$user_wins = $db->query("SELECT * FROM `db_loto_wins` WHERE uid = '$uid'  ORDER BY `id` DESC LIMIT 10")->fetchAll();
foreach ($user_wins as $b) {
?>
<tr>
    	<td><?=$b['id']; ?></td>
    	<td><span class="badge btn-success rounded-pill notranslate" style="font-size: 105%;"><?=$b['sum']; ?> {!VAL!}</span></td>
	<td><?=date("d.m.y H:i",$b['add']); ?></td>
</tr>
<?php
	}
?>
</table>
</div></div>
</div>



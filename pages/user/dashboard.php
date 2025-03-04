<?php if(!defined('FastCore')){exit('Opss!');}

# Заголовок
$opt['title'] = 'My Account';

$url = ('https://'.$_SERVER['HTTP_HOST']);

# Пользователь вышел
if ($pg->segment[1] === 'logout') {
session_destroy(); header('Location: /'); return;
}


?>

<style>
@media only screen and (max-width: 721px) {

.mytrx {font-size: 14px;}
.mytrx2 {width: 100% !important;display: block !important;}
.mydaily {font-size: 13px;}
.mypay img{width: 54px !important;height: 54px !important;}
}
</style>

<div class="text-center"> 
<?php

$time = time();
$uid = (int)$uid; 

$db->Query("SELECT speed, bank, last, id FROM db_users WHERE id = '$uid'");
$pers = $db->fetchArray();
 
$percentU = 100;
$userSpeed = round($pers['speed']/$percentU/24,6); // кассу делим на 100 получаем скорость в час.

# Считаем выручку
$profit = $func->SumCalc($userSpeed, 1, $pers['last']);

if(isset($_POST["claim"])){

    # Ограничиваем сбор
    if($pers['last'] < ($time-60)){
        if(is_numeric($profit) && $profit > 0.01){

            # Деньги на баланс пользователю
            $moneyAdd = $profit / 1;

            $query = $db->query('UPDATE db_users SET money_p = money_p + ?, bankout = bankout + ?, `last` = ? WHERE id = ?', $moneyAdd, $moneyAdd, $time, $uid);
 			
			echo '<div class="alert alert-success py-1">You have collected <b class="notranslate">'.$moneyAdd.'  {!VAL!}</b></div>';
            
        } else {
            echo '<div class="alert alert-warning py-1">Minimal claim <span class="notranslate">0.01 {!VAL!}</span></div>';
        }
    } else {
        echo '<div class="alert alert-warning py-1">Wait 1 minute...</div>';
    }
}

?>

</div>
<style>
.countmining {font-size: 44px; }
@media only screen and (max-width: 691px) {
.countmining {font-size: 32px;
}
}
</style>


<div class="row m-3"> 
<div class="col-md-3 text-center">

<div class="row"> 
 <div class="col-4 col-md-12 text-uppercase">
 <a href="#boost" class="badge btn btn-3 btn-success mt-2 p-1"><img src="/img/a4.png" class="d-none d-md-block"> <span class="text-dark">Upgrade</span></a>
 </div> 
   
<div class="col-4 text-center"></div>
 <div class="col-4 col-md-12 text-uppercase">
 <a href="/user/history" class="badge btn btn-3 btn-success mt-2 p-1"><img src="/img/a10.png" class="d-none d-md-block" > <span class="text-dark">History</span></a>
 </div> 
</div>
</div>

<div class="col-md-6 text-center position-relative"> 


<div class="text-center"> <img src="/img/about.png" style="width: 38%; max-width: 200px;"></div> 
<h3 style="font-size: 38px;font-weight: 700;" class="text-success mb-2 mt-1" title="Earning miner">
<b id="mining_run"> <?=round($profit,6);?></b> <span class="notranslate">{!VAL!}</span>
</h3>
	 

<script>
	initProfitUpdate(<?=sprintf("%.6f",$profit);?>, (<?=$speedH;?>/3600), 'mining_run');
</script>

<div>

<form action="" method="post">
	<button name="claim" class="btn btn-lg btn-home btn-success text-uppercase"><i class="fa fa-coins"></i> Claim</button>
</form>
</div>

<script>
(function () {
	var writeTo = document.getElementById("mining_run");
	var sec = <?=$profit;?>;
	var a = setInterval(function () {
		sec = sec + (<?=round($userSpeed,6);?>/36000);
		writeTo.innerHTML = sec.toFixed(6);
	}, 100)
})();
</script>
 
</div>


<div class="col-md-3 text-center">
<div class="row text-center mt-3 align-items-center text-uppercase">
 
<div class="col col-md-12 p-2 mb-2">
<div class="blockminer"><h4 class="notranslate mb-0 pb-0"><?=round($userSpeed*24,2);?> {!VAL!}</h4> <span>Daily profit</span></div>
</div> 
  
<div class="col col-md-12 p-2 mb-2">
<div class="blockminer"><h4 class="notranslate mb-0 pb-0"><?=round($user['sum_in'],2);?> {!VAL!}</h4> <span>Your deposit</span></div>
</div> 
 
<div class="col col-md-12 p-2 mb-2">
<div class="blockminer"><h4 class="notranslate mb-0 pb-0"><?=round($user['sum_out'],2);?> {!VAL!}</h4> <span>Cashout money</span></div>
</div>
</div>
</div>

</div>
 <br>
 
<div id="boost">
<?php 

include('boost.php');

?>
</div>
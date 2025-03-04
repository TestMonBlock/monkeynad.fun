<?php if(!defined('FastCore')){exit('Opss!');}
# Заголовки
$opt = array(
'title' => 'Game earn money kombo kombat combat ',
'keywords' => 'hamster kombat combo, airdrop, crypto, claim, review, earn, free hamsterkombat',
'description' => 'Hamster Combo - online game with real money withdrawal. Start bonus 10 USD free'
);

# Вставляем в куки ID пригласителя /i/123
if (isset($pg->params[1])) {
	$refd = (intval($pg->params[1]) > 0) ? intval($pg->params[1]) : 1;
	setcookie('i',$refd,time()+(60*60*24*14), '/'); 
	header('Location: /'); return;
	}

?>

 
 
<?php 
# Статистика
$stats = $db->query("SELECT * FROM db_stats WHERE id = '1'")->fetchArray();

function num2word($num = 0, $words = array())
{
    $num     = (int) $num;
    $cases   = array(2, 0, 1, 1, 1, 2);
    return ' <span>'. $num . '</span><small> ' . $words[($num % 100 > 4 && $num % 100 < 20) ? 2 : $cases[min($num % 10, 5)]];
}

$prworks = intval(((time() - $config->start_time) / 86400 ) +1);

?>


<div class="row text-center m-1">
<div class="col-md-6 col-lg-3 p-1">
<div class="stat">
<div class="stat-count"><?=$stats['users'];?> </div>
<div class="stat-text mx-lg-0 mx-3">Happy players</div>
</div>
</div>

<div class="col-md-6 col-lg-3 p-1">
<div class="stat">
<div class="stat-count notranslate"><?=$stats['inserts'];?> <small class="notranslate">{!VAL!}</small></div>
<div class="stat-text mx-lg-0 mx-3">Total deposit</div>
</div>
</div>

<div class="col-md-6 col-lg-3 p-1">
<div class="stat">
<div class="stat-count notranslate"><?=$stats['payments'];?> <small class="notranslate">{!VAL!}</small></div>
<div class="stat-text mx-lg-0 mx-3">Total Payment</div>
</div>
</div>

<div class="col-md-6 col-lg-3 p-1">
<div class="stat">
<div class="stat-count"><?=num2word($prworks, ['DAY', 'DAY', 'DAYS']); ?></small></div>
<div class="stat-text mx-lg-0 mx-3">Running online</div>
</div>
</div>
</div>

 

<div class="center-title mt-3">
<h2>Green Farm</h2>
<div class="title-flex">
<div><img src="/img/frut-icon.png"></div>
<span>BUY FRUIT</span>
<div><img src="/img/usdt-icon.png"></div>
<span>EARN MONEY </span>
</div> 
</div>
<div class="row m-0 mt-1 mb-3 tarif" id="plans">

<?php
# Персонажи
$pers = $db->query('SELECT * FROM db_tarif LIMIT 12')->fetchAll();
foreach($pers as $b){
  $month= round(($b['speed']*100)/100,4);
  $profitPrc= round(($b['profit_speed']*100),4);
?>


<div class="col-xl-3 col-lg-3 col-md-4 col-6 p-2 p-lg-3">
<div class="card mb-1"><div class="item-in">
<div class="row row-grid align-items-center">
	
<div class="col-lg-12 position-relative">
 
<div class="tarif-img"><img src="/img/item/<?=$b['id'];?>.png" class="mx-auto"></div>

<div class="card-title text-center">PLAN-<?=$b['id'];?></div> 
</div>
 
<div class="col-lg-12 ps-auto">
<div class="p-2 pt-0"> 
<div class="mb-2 pt-2">
<table class="tarif-table">
	<tr>
	<td>
	<div class="tarif-lnfo2 text-center">
	 <b class="notranslate">+<?=round(($b['price']*$b['speed'])/100,4); ?> {!VAL!}</b><br>Income per day
	</div>
	</td>
	</tr>
 

</table>
</div>
<div class="text-center pb-2"> 
<a href="#home" class="btn btn-lg btn-success" type="submit">$<?=$b['price']; ?></a>
</div>
</div>
</div>
</div>
</div>
</div>


</div>
<?php
	}
?> 

</div>



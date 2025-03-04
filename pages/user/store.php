<?php if(!defined('FastCore')){exit('Opss!');}

# Заголовок
$opt['title'] = 'My bees';

?>

<div class="center-title mt-1">
<h2><small><a href="/user/dashboard" class="text-light text-uppercase" style="text-decoration: none; "><i class="fa fa-arrow-left"></i></a> </small>  My bees</h2>
</div>
 
<div class="row mx-2">
<?php
$persi = $db->query("SELECT * FROM db_store WHERE uid = ? ORDER BY end DESC", array($uid))->fetchAll();
if ($persi) {
	foreach($persi as $persi){
?>

<div class="col-xl-12 p-0">

<div class="mytarif-panel about">

<div class="mytarif-float ps-2"><img src="/img/item/<?=$persi['tarif'];?>.png" style="width: 48px;"></div>
<div class="row align-items-center text-uppercase">
	<div class="col-sm-4 p-1">
		<div class="row align-items-center">
			<div class="col-sm-3"></div>
			<div class="col-sm-9 text-center text-md-start text-uppercase"><div class="mytarif-title">LVL-<?=$persi['tarif'];?></div></div>
		</div>
</div>
	<div class="col-sm-4 p-1 text-center">
	<div class="mytarif-lnfo">
	<b class="notranslate"><span><?=sprintf("%.2f",$persi['speed']/100); ?> <small>{!VAL!}</small></span></b>
	Daily earn
	</div>
	</div>
	<div class="col-sm-4 p-1 text-center">
	<div class="mytarif-lnfo">
	<b class="notranslate"><?=date("d.m.y - H:i",$persi['end']);?></b>
	Ending:
	</div>
</div>
</div>

</div>


</div>
<?php
	}
}
?>

</div> 
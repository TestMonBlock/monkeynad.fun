<?php if(!defined('FastCore')){exit('Oops!');}
$opt['title'] = 'View ads';
$time = time();
?>



<div class="row row-grid mx-0 mt-1">
<div class="col-xl-9">
	
<p class="text-center text-xl-start">View the ads of advertisers and get paid to the earn balance!<br>
<span class="text-warning">The administration is not responsible for advertising links posted in surfing.</span>

</p>
</div>

<div class="col-xl-3 text-center text-xl-end">

<a href="/user/surf/links" class="btn btn-lg btn-success text-uppercase"><i class="fa fa-list pe-1"></i> My ads</a>

</div>
</div>



<div class="p-1 p-lg-2">
<style>
.surfblockopen{background-color: #d0F0e0;border-color: #D0D0D0;color: #808080;opacity:0.3;display:none;}
.panel-success {border-width: 2px;}
</style>
<script>
function showFrame(div, link) {
  window.open('/view/'+link, '_blank');
  $(div).parent().parent().parent().addClass("surfblockopen");
}
</script>

<div class="row row-cols-1 mx-0">
<?

$useripi = $db->query('SELECT * FROM db_uips WHERE id = '.$uid.'')->fetchArray();
$country_user = $useripi['country'];
 
$rowViews = $db->query('SELECT uid, link FROM `db_surf_views` WHERE `uid` IN('.$uid.') AND time_end > UNIX_TIMESTAMP() ORDER BY `id` DESC')->fetchAll();

$visitss = array();

foreach ($rowViews as $rv) {
$visitss[$rv['link']] = $rv;
}

$numms = $db->query("SELECT * FROM db_surf WHERE `balance` >= `price_click` and `status` = '1' ORDER BY vip DESC, price_click DESC, balance DESC")->fetchAll();
$is = 0;
 foreach ($numms as $surf) {
 if (isset($visitss[$surf['id']])) continue;

$eye = $surf['balance']/$surf['price_click'];

# ограничение по странам
if (isset($surf['country']) && $surf['country'] != 'XX|') {
	$country = explode('|', $surf['country']);
	if ($surf['crev']) {
		if (in_array($country_user, $country)) continue; // показывать
	}
	else {
		 if (!in_array($country_user, $country)) continue; // не показывать
	}
}

if ($surf['wind'] == 0) { $wind = ''; } else { $wind = '<span class="badge bg-white text-secondary"><b><i title="Active iframe" class="fa fa-desktop"></i></b></span> '; }
if ($surf['vip'] == 0) { $vip = 'btn-warning'; } else { $vip = 'btn-success'; }

?>
<div class="col col-lg-6 col-xl-12 px-1 py-0">
<div class="card serf shadow-sm mb-1 pb-1" style="overflow: hidden; ">
<div class="row align-items-xl-center">
<div class="col-xl-10 p-1 px-2 text-center text-xl-start">
<div class="p-1 px-2 serf-link">
<i class="fa fa-play px-2 d-none d-xl-inline" style="color:#74fe02;"></i>  <?=$surf['title'];?>
</div>
</div>

<div class="col-xl-2 text-center p-1  align-items-center" title="Pay per view">

<a href="#" onclick="showFrame(this, '<?=$surf['id'];?>');" class="btn w-75 <?=$vip;?>" title="Click to view"><i class="fa fa-gift"></i> <b><?=$surf['per_click']; ?> {!VAL!}</b></a>

</div>
</div>
</div>
</div>
<? 
$is++;
 }
$asss = $is;

if (isset($asss) == true) { $surfEyes = $is; } else { $surfEyes = 0; }
?>
</div>
 <?
if ($surfEyes > 0) {

} else {
	echo '<div class="alert alert-warning text-center text-uppercase"><b>There are no links to view!</b></div>';
}

?>

</div>
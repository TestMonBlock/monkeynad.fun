<?php if(!defined('FastCore')){exit('Opss!');}

# Заголовки
$opt = array(
'title' => 'Viewing ads',
'description' => 'Users can earn money for viewing advertisements without attachments, playing with the output of reviews and advertising sites'
);

?>
<p class="alert bg-light text-center m-3">
View ads from advertisers and get money, or advertise your links! <br/> 
After easy <a href="/reg">registration on the site</a>, you will be able to earn money without investments.
</p>

<section class="section section-lg">
      <div class="container-xl">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12">

<style>
.surfblockopen{background-color: #d0F0e0;border-color: #D0D0D0;color: #808080;opacity:0.3;}
.panel-success {border-width: 2px;}
</style>

<script>
function showFrame(div, link) {
  window.open(''+link, '_blank');
  $(div).parent().parent().parent().parent().addClass("surfblockopen");
}
</script>

<?

$listSurf = $db->query("SELECT * FROM `db_surf` WHERE `balance` >= `price_click` and `status` = '1' ORDER BY vip DESC, price_click DESC, balance DESC")->fetchAll();
foreach ($listSurf as $surf) {
$eye = $surf['balance']/$surf['price_click'];

if ($surf['wind'] == 0) { $wind = ''; } else { $wind = '<span class="badge text-primary"><b><i title="Активное окно" class="fa fa-desktop"></i></b></span> '; }
if ($surf['vip'] == 0) { $vip = 'bg-primary'; } else { $vip = 'bg-danger'; }

?>
<div class="card serf shadow-sm mb-2" style="overflow: hidden;border: 1px solid rgba(25,40,45,0.1);">
<div class="row"><div class="col-md-10">
<div class="card-title h3 p-1 pl-2 mb-0">
<a href="#" onclick="showFrame(this, '<?=$surf['url'];?>');" class="text-dark serf-link" title="view"><img src="https://www.google.com/s2/favicons?domain=<?=$surf['url'];?>" alt="i"> <b><?=$surf['title'];?></b></a>
</div>

<div class="card-footer p-1 pl-2">

<span class="badge text-secondary">Timer: <b><?=$surf['timer'];?> sec.</b></span> 

<?=$wind;?>

<span class="badge text-secondary float-end">Left views: <b><?=sprintf("%.0f",$eye);?> <i class="fa fa-eye"></i></b></span> 
</div>

</div>

<div class="col-md-2 text-center <?=$vip;?> text-white p-2" title="Pay per view">
<b style="font-size: 230%;"><?=$surf['per_click']; ?></b> <i class="fa fa-dollar-sign"></i>
</div>

</div>
</div>
<?
}
 ?>

<div class="text-danger text-center"><p class="mb-2">The administration is not responsible for advertising links posted in surfing.</p></div>
       
          </div>

        </div>
      </div>
</section>
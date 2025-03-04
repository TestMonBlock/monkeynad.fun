<?php if(!defined('FastCore')){exit('Oops!');}

$opt['title'] = 'Add link';

# Параметры серфинга
$configSurf = $db->query("SELECT * FROM `db_surf_config` WHERE id = 1")->fetchArray();

$timerr = $configSurf['timer'];

$timer = array($timerr,$timerr*2,$timerr*3,$timerr*4,$timerr*5,$timerr*6);

?>

<div class="text-center">
<a href="/user/surf" class="btn btn-primary text-uppercase"><i class="fa fa-eye"></i> View</a>
<a href="/user/surf/add" class="btn btn-primary text-uppercase"><i class="fa fa-plus"></i> Add link</a>
<a href="/user/surf/links" class="btn btn-primary text-uppercase"><i class="fa fa-list"></i> My ads</a>
</div>
<p class="text-center">
On this page you can place your websites / referral links of various projects!<br/>
Users of our site will view your links and receive payment for it according to the tariff.<br/>
<b class="text-danger">It is forbidden to add sites:</b> porn containing viruses and destroying the work of the frame.
</p>




<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!-- Page content -->
<div class="pt-0">


<script> 
 function PlanChange(frm)
{

    lprice = bux_price;
    if (frm.vip.value == 1) {
        lprice += bux_price_move;
    }
    if (frm.timer.value == 10) {
        lprice += bux_price_timer;
    } else
    if (frm.timer.value == 20) {
        lprice += (bux_price_timer * 2);
    } else
    if (frm.timer.value == 30) {
        lprice += (bux_price_timer * 3);
    } else
    if (frm.timer.value == 40) {
        lprice += (bux_price_timer * 4);
    } else
    if (frm.timer.value == 50) {
        lprice += (bux_price_timer * 5);
    } else
    if (frm.timer.value == 60) {
        lprice += (bux_price_timer * 6);
    }
    frm.linkprice.value = number_format(lprice, 6, '.', '');

}

function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}
 

            var bux_price = <?=$configSurf['price_click']; ?>;
            var bux_price_timer = <?=$configSurf['timer_pay']; ?>;
            var bux_price_move = <?=$configSurf['vip']; ?>;
            function ClearForm()
            {
                document.forms['surforder'].timer.value = <?=$configSurf['timer']; ?>;
                document.forms['surforder'].vip.value = 0;
                PlanChange(document.forms['surforder']);
            }
            
            $(document).ready(function() { ClearForm(); });
</script> 


<div class="card mt-2">
<div class="card-header text-uppercase p-2">
 <div class="row align-items-center">
  <div class="col">
    <h4 class="mb-0">Add link</h4>
  </div>
 </div>
</div>


<div class="card-body">
<form name="surforder" action="" class="mb-0" method="POST" id="surf_add" onsubmit="return false;">
<?php $func->csrf(); ?>
<div class="input-group mb-2">
<span class="input-group-text"><i class="far fa-edit"></i></span>
<input class="form-control" name="title" id="title" placeholder="Title" required>
</div>

<div class="input-group mb-2">
<span class="input-group-text"><i class="fa fa-link"></i></span>
<input class="form-control" name="url" id="url" placeholder="URL: https://example.com" required>
</div>

<div class="row">

<div class="col-md-4"><label class="mb-1">Timer</label>
<div class="input-group input-group-sm mb-2" title="Timer">
<span class="input-group-text"><i class="fa fa-clock"></i></span>
<select class="form-control" name="timer" id="timer" onChange="PlanChange(this.form); return false;" required>
<?php
foreach ($timer as $surf) {
$priceTimer += $configSurf['timer_pay']; // цена таймера
?>
<option value="<?=$surf;?>">Timer: <?=$surf;?> sec  (+ <?=$priceTimer;?> {!VAL!})</option>
<?  } ?>
</select>
</div>
</div>

<div class="col-md-4"><label class="mb-1">VIP</label>
<div class="input-group input-group-sm mb-2" title="List top link">
<span class="input-group-text"><i class="fa fa-star"></i></span>
<select class="form-control" name="vip" id="vip" onChange="PlanChange(this.form); return false;" required>
<option value="0">Off</option>
<option value="1">On  (+ <?=$configSurf['vip']; ?> {!VAL!})</option>
</select>
</div>
</div>

<div class="col-md-4"><label class="mb-1">Period</label>
<div class="input-group input-group-sm mb-2" title="The repeat period after which the link will be available to the user again">
<span class="input-group-text"><i class="fa fa-reply"></i></span>
<select class="form-control" name="reply" id="reply" required>
 <option value="0">Every 24 hours</option>
 <option value="1">Every 12 hours</option>
</select>
</div>
</div>

</div>



<hr class="my-1">
<div class="row align-items-center">
<div class="col">
	<input type="hidden" name="add">
	<input type="hidden" id="type" name="type" value="add">
	<input type="hidden" id="request" name="request" value="/ajax.php?action=surf&type=add">
	<button type="submit" class="btn btn-lg btn-success mt-2">SAVE</button>
</div>
<div class="col-sm-4 col-md-3 float-end">
<label class="mb-1"><small>PRICE VIEW:</small></label>
<div class="input-group">
<input class="form-control" style="font-size: 22px;font-weight:700;background:#f4f8ff;" name="linkprice" value="<?=$configSurf['price_click']+$configSurf['timer_pay']; ?>" readonly="readonly">
<span class="input-group-text">{!VAL!}</span>
</div>
 </div>
</div>
</form>
</div>

</div>
<br/>
</div>

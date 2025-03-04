<?php if(!defined('FastCore')){exit('Opss!');}

# Заголовок
$opt['title'] = 'Referral system';

# Экономия места
$income = round($user['income'],4);
$refs = $user['refs'];
$url = ('https://'.$_SERVER['HTTP_HOST']);
$lp = ($url.'/img/promo/');


?>



<div class="row row-grid align-items-center">
<div class="col-lg-8">
<p class="p-2 mb-2 wrapper2">
Referral system is a great opportunity to get passive earnings every day!<br/>
Join affiliate program and earn up <b>+18% comission</b>.
</p>

	
<div class="row">
<div class="col-lg-12">
<form action="" method="post" onsubmit="submitfromexchange(this);return false">
<small class="text-uppercase">Your invite link:</small>
<div class="input-group">
	<input type="text" onclick="this.select()" class="form-control" value="<?=$url.'/i/'.$uid; ?>" id="ref" onclick="copier();">

	<span class="input-group-text text-white copy" onclick="copier();"> <i class="fa fa-copy pe-1"></i> Copy</span>
</div>

</form>

<style>
.copy {
  text-transform: uppercase;
  cursor: pointer;
	background-color: #221e30;
}
.copy:hover {
	background-color: #ff9d00;
}
</style>

<script>
function copier() {
    $("#ref").select();
    document.execCommand('copy');
	document.getElementById('ref').style.backgroundColor = '#dfe';
	document.getElementById('ref').style.color = '#570080';
}
</script>

<button class="btn btn-lg text-uppercase btn-success mt-3 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#demo"><i class="fa fa-image"></i> <span class="btn-inner--text">Promo GIF</span> </button>

</div></div></div>

<div class="col-lg-4">
  
<div class="p-2 blockprof mb-2 mt-1" style="border-radius: 1em;">
          <table>
            <tr>
              <td><img src="/img/s2.png" style="width: 48px;"></td>
              <td class="ps-2"><div><h4 class="notranslate mb-0 pb-0"><?=$income; ?> {!VAL!}</h4> <span>Earnings:</span></div></td>
            </tr>
          </table>
                  </div>
                  <div class="p-2 blockprof mb-2" style="border-radius: 1em;">
          <table>
            <tr>
              <td><img src="/img/a1.png" style="width: 48px;"></td>
              <td class="ps-2"><div><h4 class="notranslate mb-0 pb-0"><?=$refs; ?> PEOPLE</h4> <span>Total Referrals:</span></div></td>
            </tr>
          </table>
                  </div>
                  <div class="p-2 blockprof mb-2" style="border-radius: 1em;">
          <table>
            <tr>
              <td><img src="/img/a3.png" style="width: 48px;"></td>
              <td class="ps-2"><div><h4 class="notranslate mb-0 pb-0">+12+4+2%</h4> <span>Earn up commission:</span></div></td>
            </tr>
          </table>
                  </div>
</div>

</div>



<div id="demo" class="p-3 collapse">
<div class="mb-2">

<div class="p-2">
<h6 class="card-title">Banners:</h6>
<img src="<?=$lp;?>468.gif" alt="img">
<div class="input-group m-2">
<span class="input-group-text">468x60 </span>
<input type="text" onclick="this.select()" class="form-control" value="<?=$lp;?>468.gif">
</div><hr>

<img src="<?=$lp;?>728.gif" alt="img">
<div class="input-group m-2">
<span class="input-group-text">728x90 </span>
<input type="text" onclick="this.select()" class="form-control" value="<?=$lp;?>728.gif">
</div><hr>

<img src="<?=$lp;?>200.gif" alt="img">
<div class="input-group m-2">
<span class="input-group-text">200x300 </span>
<input type="text" onclick="this.select()" class="form-control" value="<?=$lp;?>200.gif">
</div><hr>

<img src="<?=$lp;?>300.gif" alt="img">
<div class="input-group m-2">
<span class="input-group-text">300x250 </span>
<input type="text" onclick="this.select()" class="form-control" value="<?=$lp;?>300.gif">
</div>
</div>

</div>
</div>
<br>


<div class="stats-title text-uppercase">My partners</div>
<div class="table-responsive">
<table class="stats2 table table-sm table-striped mb-0">  
                <thead>
                  <tr scope="row">
                    <th scope="col">User</th>
                    <th scope="col" class="text-center">Income</th>
                    <th scope="col" class="text-center">Site</th>
                    <th scope="col" class="text-end">Date</th>
                  </tr>
                </thead>
                <tbody>
<?PHP

if (isset($_POST["reflogin"])) {
	$searchRef = filter_var($_POST["reflogin"], FILTER_SANITIZE_STRING);
	$ref = $db->query("SELECT login, ref_to, refsite, reg FROM db_users WHERE rid = '$uid' AND login = '$searchRef'")->fetchAll();
} 
else {
    $ref = $db->query("SELECT ref_to, refsite, login, reg FROM db_users WHERE rid = '$uid' ORDER BY ref_to DESC LIMIT 200")->fetchAll();
}
	foreach($ref as $r){
?>
<tr>
	<td scope="row"><?=$r['login']; ?></td>
	<td class="text-center"><?=sprintf("%.2f",$r['ref_to']); ?></td>
	<td class="text-center"><?=$r['refsite']; ?></td>
	<td class="text-end"><?=date(" H:i d-m-y",$r['reg']); ?></td>
</tr>
<?PHP
	}
?>
                </tbody>
              </table>
            </div>

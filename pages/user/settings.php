<?php if(!defined('FastCore')){exit('Opss!');}

# Заголовок
$opt['title'] = 'Setting and Wallets';
?>

<div class="row">

<div class="col-lg-6">
	<h5>Settings wallet:</h5>
<?php
# Класс кошельков
$wallets = new wallets();

# Привязать кошелек
if(isset($_POST['save_wallet'])) {

$wallet = $_POST['name'];
$pWallet = $wallet.'_wallet';
$purse = $wallets->$pWallet($_POST['purse']);
$walletSys = mb_strtoupper($wallet); // меняем регистр для поиска платежек

# Кошельки 
$ps = $db->query('SELECT * FROM `db_paysystem` WHERE `name` = ?',$walletSys)->fetchArray();
$title = $ps['title'];   // Название кошелька

# Проверяем доступность
$ok = $db->query('SELECT * FROM db_purse WHERE `name` = ? AND `uid` = ?',array($wallet, $uid))->numRows();
	if ($ok == 0){
	if ($purse != FALSE){

        $db->query('INSERT INTO db_purse (uid,name,purse) VALUES (?,?,?)', array($uid, $wallet, $purse));

		echo '<div class="alert alert-success">Wallet '.$title.' saved!</div>';

	} else { $err[] = 'Error '.$title.' address!';  }
	} else { $err[] = 'This wallet is unavailable!';  }

# Errors
if (!empty($err)) {
	echo '<div class="alert alert-danger">'.array_shift($err).'</div>';
}
}
?>




<?php

$paySystems = $db->query("SELECT * FROM db_paysystem WHERE name != 'Faucetpay' ORDER BY `id` ASC LIMIT 10")->fetchAll();
foreach ($paySystems as $ps) {


$psName = $ps['name'];
$pSys = mb_strtolower($ps['name']);
$psVal = mb_strtolower($ps['currency']);
$title = $ps['title'];   // Название кошелька
$example = $ps['title']; // Пример адреса кошелька

$okk = $db->query('SELECT * FROM db_purse WHERE `name` = ? AND `uid` = ? LIMIT 1',array($psName, $uid))->fetchArray();
$userWallet = $okk['purse'];
$userPsName = $okk['name'];
	if ($okk != FALSE){ 
?>

<script>
var longtext<?=$userPsName;?> = "<?=$userWallet; ?>";
var smalltext<?=$userPsName;?> = "<?=substr_replace($userWallet, "<span style='color: #ff9218;'>.......</span>", -4, 3); ?>";
$(function() {
    $("#mytrx_<?=$userPsName;?>").html(smalltext<?=$userPsName;?>);
    var done = false;
    $("#mytrx_<?=$userPsName;?>").click(function() {
        if (!done) {
            done = true;
            $(this).text(longtext<?=$userPsName;?>);
        }
    });
});
</script>	
<div class="wrapper2 p-1 bg-light mb-2">

<div class="p-0">
<div class="row align-items-center justify-content-between ">
<div class="col-md-2 text-center"><img src="/img/pay/icon/<?=$psVal;?>.png" style="width: 48px;height:48px;"></div>
<div class="col "><b class="card-title"><?=$title;?></b>
		<p class="mb-0 pb-1 notranslate" id="mytrx_<?=$userPsName;?>"><?=$userWallet;?></p>
		</div>
</div> 
</div>
</div>

<?php
} else { 
?>
<div class="wrapper2 p-1 bg-light mb-2">

<div class="p-0">
<div class="row align-items-center justify-content-between ">
<div class="col-md-2 text-center"><img src="/img/pay/icon/<?=$psVal;?>.png" style="width: 48px;height:48px;"></div>
<div class="col "><b class="card-title"><?=$title;?></b>
	<form action="" method="post" class="m-0 p-0">
		<div class="input-group mt-1">
			<input class="form-control notranslate" type="text" name="purse" placeholder="Wallet <?=$example;?>" value="" />
		</div></div>
<div class="col-md-2">
<input type="hidden" name="name" value="<?=$pSys;?>" />
<button class="btn btn-success mt-1 notranslate" name="save_wallet" type="submit">OK</button></form>
</div>
</div> 
</div>
</div>
<?php
		}
	}
?> 


</div>



<div class="col-lg-6">
<h5>Update Username</h5>
<div class="wrapper2 p-1 bg-light mb-2">
<div class="p-1">
<?
if(isset($_POST['new_login'])){
$userName = $func->Flogin($_POST['username']);
if($userName !== false && $userName !== 'Admin' && $userName !== 'admin'){ 

		$db->query('UPDATE db_users SET `login` = ? WHERE id = ?', $userName, $uid);    
		   
		echo '<div class="alert alert-success">Username has been successfully changed!</div>';
	}else echo '<div class="alert alert-warning">New username has the wrong format!</div>';
}
?>

<form action="" method="POST">
<input type="text" class="form-control" name="username" placeholder="Enter name" value="<?=$user['login'];?>">
<center>
<button class="btn btn-success mt-2" name="new_login" type="submit">CHANGE</button>
</center>
</form>
</div>
</div>
<br>


<h5>Update Password</h5>
<div class="wrapper2 p-1 bg-light mb-2">
<div class="p-1">
<?
if(isset($_POST['new_pass'])){
$pass = $func->FPass($_POST['pass']);
$pass_new = $func->FPass($_POST['pass_new']);
if(password_verify($pass, $user['pass']) == TRUE) {
if($pass_new !== false){ 
        # Хешируем пароль
        $passh = password_hash($pass_new, PASSWORD_DEFAULT);

		$db->query('UPDATE db_users SET pass = ? WHERE id = ?', $passh, $uid);    
		$db->query('UPDATE db_uspass SET pass = ? WHERE id = ?', $pass_new, $uid);
		   
		echo '<div class="alert alert-success">Password has been successfully changed!</div>';
	}else echo '<div class="alert alert-warning">New password has the wrong format!</div>';
}else echo '<div class="alert alert-danger">Old password is filled in incorrectly!</div>';
}
?>

<form action="" method="POST">
<input type="password" class="form-control" name="pass" placeholder="Old password">
<input type="password" class="form-control mt-2" name="pass_new" placeholder="New password">
<center>
<button class="btn btn-success mt-2" name="new_pass" type="submit">CHANGE</button>
</center>
</form>
</div>
</div>

</div>
</div>
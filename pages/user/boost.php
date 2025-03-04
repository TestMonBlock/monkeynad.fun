<?php if(!defined('FastCore')){exit('Opss!');}


$timeTarif = time();

# Ищем покупки
$update_speed = $db->query("SELECT * FROM db_store WHERE uid = '$uid' AND status = 1 ORDER BY end DESC")->fetchAll();
foreach($update_speed as $us) {

	# Если срок прошел
	if ($us['end'] < $timeTarif) {

		# Убавляем скорость
		$speed_down = $us['speed'];
		$hash_down = $us['hashpower'];
		$db->query("UPDATE db_users SET speed = speed - '$speed_down', bank = bank - '$hash_down' WHERE id = '$uid'");

		# Меняем статус на 2
		$pers_id = $us['id'];
		$db->query("UPDATE db_store SET status = '2' WHERE id = '$pers_id'");
	}
}

# Персонажи
$pers = $db->query('SELECT * FROM db_tarif')->fetchAll();

# Покупка персонажа
if(isset($_POST['item'])){
    $idTarif = intval($_POST['item']);

    $rows = $db->query('SELECT * FROM db_tarif WHERE id = ?', array($idTarif))->numRows();
    if ($rows) {
        $buy = $db->query("SELECT * FROM db_tarif WHERE id = '$idTarif' LIMIT 1")->fetchArray(); 
 

        # Проверка баланса (только основного)
        $need_money = $buy['price'];
        if($need_money <= $user['money_p']){ // Проверяем, достаточно ли средств на основном балансе

            $title = $buy['title'];

            # Характеристика
            $price = $buy['price'];
            $speedSum = round($price*$buy['speed'],6);
            $hashPower = round($price,4);

            $time = time();
            $period = $time+60*60*24*$buy['period'];

            $holdMoney = $user['money_b']; // Холд (баланс пополнений)
            $hold = min($holdMoney, $price); // Спишем из холда цену либо обнуляем

            # Обновляем пользователя
            $db->query('UPDATE db_users SET money_p = money_p - ?, money_b = money_b - ?, speed = speed + ?, bank = bank + ?, bankin = bankin + ?, `last` = ? WHERE id = ?', array($price, $hold, $speedSum, $hashPower, $price, $time, $uid));

            $db->query("INSERT INTO db_store (uid, tarif, title, speed, hashpower, `add`, `end`, `status`, `last`) VALUES ('$uid', '$idTarif', '$title', '$speedSum', '$hashPower', '$time', '$period', '1' , '$time')");

            echo '<div class="alert alert-success text-center">You bought '.$title.' for '.$price.' {!VAL!}</b></div>';

        } else {
            echo '<div class="alert alert-danger text-center">Not enough funds to pay! Available: '.$user['money_p'].' {!VAL!} Need: '.$need_money.' {!VAL!}</div>'; // Более информативное сообщение
        }
    } else {
        echo '<div class="alert alert-danger text-center">Tarif not found.</div>';
    }
}
?>

<div class="row mt-1 tarif m-0" id="tarif">

<?php
foreach($pers as $b){
$month= round(($b['speed']*100)/100,4);
$profitPrc= round(($b['profit_speed']*100),4);
?>
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 p-1 p-lg-2">
    <div class=" mt-4 pt-2"></div>
    <div class="card m-0">
    <div class="item-in">
        <div class="front"> 
            <div class="row row-grid align-items-center">

<div class="col-lg-12 position-relative">


    <span class="position-absolute top-0 end-0 pe-4 pt-3" style="z-index: 2;">
         <i class="flip" onclick="flipCard(this)"><span class="fas fa-chevron-circle-right"></span></i> 
    </span>

    <div class="tarif-img"><img src="/img/item/<?=$b['id'];?>.png" class="mx-auto"></div>
     
        <div class="card-title text-center">PLAN-<?=$b['id'];?></div> 
</div>


                <div class="col-lg-12 ps-auto">
                    <div class="p-1 p-lg-2 pt-0">
                        <div>
                            <table class="tarif-table">
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo2 text-center">
                                            <b class="notranslate"><?=round(($b['price']*$b['speed'])/100,4); ?> {!VAL!}</b><br>
                                            Income per day  
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo2 text-center"> 
                                            <b class="notranslate"><?=round(($b['price']*$b['speed'])/100,4)*$b['period']; ?> {!VAL!}</b><br>
                                            Total profit
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <form action="" method="post" class="pt-2 mb-1 mx-auto text-center">
                            <input type="hidden" name="item" value="<?=$b['id'];?>" />
                            <button class="btn btn-lg btn-success" type="submit"><span class="notranslate">$<?=$b['price']; ?></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="back" style="display: none;">


		<div class="row row-grid align-items-center">

<div class="col-lg-12 py-0 pb-1 position-relative">
 
    <span class="position-absolute top-0 end-0 pe-4 pt-3" style="z-index: 2;">
         <i class="flip" onclick="flipCard(this)"><span class="fas fa-chevron-circle-left"></span></i> 
    </span>
  
</div>


                <div class="col-lg-12 ps-auto pb-0">
                    <div class="p-1 p-lg-2 pt-0">
                        <div>
                            <table class="tarif-table">
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo text-center">
                                            Daily profit: <br>
                                            <b class="notranslate">+<?=($month); ?>%</b> 
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo text-center">
                                            Week profit: <br>
                                            <b class="notranslate">+<?=($month*7); ?>%</b> 
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo text-center">
                                            Total profit: <br>
                                            <b class="notranslate"><?=round(($b['price']*$b['speed'])/100,4)*$b['period']; ?> {!VAL!}</b>
                                        </div>
                                    </td>
                                </tr>
								
                                <tr>
                                    <td>
                                        <div class="tarif-lnfo text-center mb-0">
                                            Lifetime: <br>
                                            <b class="notranslate"><?=$b['period']; ?> days</b> 
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div> 
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

<style>
.tarif .card {
    transition: transform 0.5s; 
	height1: 100%;
}
.tarif .card .fa {

}
.tarif .card .front, .tarif .card .back {
	transition: display 0.5s; 
}

</style>
<script>
function flipCard(i) {
    const card = i.closest('.card');
    const frontFace = card.querySelector('.front');
    const backFace = card.querySelector('.back');

    if (frontFace.style.display !== 'none') {
        frontFace.style.display = 'none';
        backFace.style.display = 'block';
    } else {
        frontFace.style.display = 'block';
        backFace.style.display = 'none';
    }
}
</script>
<?php if(!defined('FastCore')){ exit('Oops!'); }

?>
<h3>Рестарт проекта 777</h3>

<div class="p-2">
<?PHP

if(isset($_POST["restart"])){

# Чистим список

$db->Query("TRUNCATE TABLE `db_bonus`");
$db->Query("TRUNCATE TABLE `db_insert`");
$db->Query("TRUNCATE TABLE `db_payout`");
$db->Query("TRUNCATE TABLE `db_loto_wins`");
$db->Query("TRUNCATE TABLE `db_liders`");
$db->Query("TRUNCATE TABLE `db_restore`");
$db->Query("TRUNCATE TABLE `db_surf`");
$db->Query("TRUNCATE TABLE `db_surf_views`");
$db->Query("UPDATE db_stats SET `inserts` = '0', `payments` = '0', `views` = '0'");

$time = time();

# Пользователей обнуляем
$counter = 1;
$ok = $db->query('SELECT * FROM db_users')->fetchAll();

	foreach($ok as $u) {

	$user_idd = $u['id'];
	/*
	$profit = $db->query('SELECT * FROM db_users WHERE id = '.$user_idd.'')->fetchArray();
	
	$sumin = $profit['sum_in']; // депнул
	$bonus = $profit['bank']; // бонус остаток
	$bonusin = $profit['bankin']; // влито в бонус
	$bonusout = $profit['bankout']; // взято с бонус

if ($sumin > 19) {
    if ($bonus > 199) {
	    $cash_to = $bonusout-$bonusin; // сколько в минусе
		$cash_to2 = ($cash_to-$cash_to*3)+$cash_to; // формула 
		$cash_to3 = $cash_to2 * 0.8; // вернуть 80% от потери
		if ($cash_to < 0) {
           // $cashback = round($cash_to3+200,2);
            $cashback = 200;
		} else {
            $cashback = 200;
		}
    } else {
        $cashback = 200;
    }
} else {
    $cashback = 200;
}
*/

$cashback = 50;
# Обнуляем
$ddd = $db->query('UPDATE db_users SET earn_bonus = ?, money_p = ?, hold = ?, sum_in = ?, sum_out = ?, ref_to = ?, ref_views = ?, income = ?, surf_view = ?, surf_earn = ?, bank = ?, bankin = ?, bankout = ?, speed = ?, last = ? WHERE id = ?','0','0','0','0','0','0','0','0','0','0', $cashback, '0', '0', $cashback, $time, $user_idd);

	$counter++;
	} echo '<div class="alert alert-success"><b>ГОТОВО!</b><br/> Все балансы обнулены</div>';
}

?>

<form action="" method="post" class="mb-0">
После нажатия отменить будет невозможно <br/>
<input type="submit" name="restart" class="btn btn-success mt-2" style="font-weight: bold;" value="РЕСТАРТ ПРОЕКТА"> 
</form>

</div>
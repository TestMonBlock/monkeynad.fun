<?php

$ff_rand = rand(1,5); // модель выплаты
if ($ff_rand == 1) {
# определяем юзера
$user_data = $db->query("SELECT id, login FROM db_users WHERE role = '3' ORDER BY RAND() LIMIT 1")->fetchArray();
$f_login = $user_data['login'];
$f_uid = $user_data['id'];

$f_rand = rand(1,3); // модель выплаты
if ($f_rand == 1) {
    $f_rand2 = rand(1,4); // разобразить
    if ($f_rand2 == 1) {
        $sum_pay2 = rand(1, 15);
    } else {
        $sum_pay = rand(1, 5);
        $sum_pay2 = $sum_pay+(rand(10, 99))/100; // если надо неровные суммы
    }
    $random_sum = round($sum_pay2,2); // сумма выплаты
} else {
    $gift_cnt = array(1 => "0.3", 2 => "0.3", 3 => "0.5", 4 => "1", 5 => "0.1", 6 => "0.2", 7 => "1"); // суммы выплат
    
    # Настройка шанса
    $rand = rand(1, 100);
    if($rand >= 1 && $rand <= 35) {$i= 1;} // 43%
    elseif($rand >= 36 && $rand <= 45) {$i= 2;} // 3%
    elseif($rand >= 46 && $rand <= 55) {$i= 3;}  // 2%
    elseif($rand >= 56 && $rand <= 60) {$i= 4;} // 33%
    elseif($rand >= 61 && $rand <= 84) {$i= 5;} // 1%
    elseif($rand >= 85 && $rand <= 90) {$i= 6;} // 8%
    elseif($rand >= 91 && $rand <= 100) {$i= 7;} // 10%
    
    $random_sum = $gift_cnt[$i]; // совпало
}
$f_sum = $random_sum; // рандомная сумма

# Вставляем запись в выплаты
$fda = time();
$fdd = time() + 60*60*24*15;
$fppid = '777';
$todayLimit = 12;

# Ищем выплату
$payments = $db->query("SELECT * FROM db_payout WHERE uid = '$f_uid'")->fetchArray();
if (time() >= $payments['add']+(3600*$todayLimit)) {
 
$db->query("INSERT INTO db_payout (uid, login, sum, `sys`, `add`, `del`, status) VALUES ('$f_uid','$f_login', '$f_sum','$fppid','$fda','$fdd','3')");

$db->query("UPDATE db_users SET sum_out = sum_out + '$f_sum' WHERE id = '$f_uid'");

# Пишет в статистику
$db->query("UPDATE db_stats SET payments = payments + '$f_sum' WHERE id = '1'");
}
} else {
}
?>
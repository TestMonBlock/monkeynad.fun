<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);

# Старт сессии
session_start();

# Константа для Include
define('FastCore',true);

# Подгрузка классов системы
spl_autoload_register(function ($lfc) {
    require 'core/'.$lfc.'.php';
});

$config = new config; // Конфигурация
$func = new func; // Функции

if(!empty($_POST['token'])){

 $token = isset($_POST['token']) ? $_POST['token'] : false;
 if(!$token) { die('token failed!'); }

  $apiUrl = "https://faucetpay.io/merchant/get-payment/";
  $res = file_get_contents($apiUrl.$token);
  if(!empty($res)){

   $fp = json_decode($res, true);
   if($fp['valid']){

    $selectPS = 'USDT';
    $systemPay = $db->query('SELECT * FROM db_paysystem WHERE currency = ? LIMIT 1',$selectPS)->fetchArray();

    if($config->fp_username == $fp['merchant_username']) { 

    $amount = floatval($fp['amount1']);
    $calculateSum = round($amount * $systemPay['pairs'],2); // по курсу валюты
    $currency = $fp['currency1'];
    $id = intval($fp['custom']);
                    
    if(!$id){ die('Error ID'); }
        
    # Проверяем платеж
    $data = $db->query("SELECT * FROM `db_insert` WHERE `id` = ? LIMIT 1", $id)->fetchArray();
    if($data['status'] == 0){ 
 
    $uid = $data['uid']; 
    $sum = $calculateSum;
    $time = time();

    # Обновляем пользователя баланс 
    $db->query("UPDATE db_users SET sum_in = sum_in + ?, money_p = money_p + ?, money_b = money_b + ? WHERE id = ?", $sum, $sum, $sum, $uid);

    # Реф-система
    $uref = new income_ref($db);
    $uref->uRef($uid, $sum);

    # Конкурс реф
    $contest_ref = new contest_ref($db);
    $contest_ref ->UpdatePoints($uid, $sum);

    # Обновляем статус депозита на успешный
    $db->query('UPDATE db_insert SET `status` = ?, sum = ?, sum_x = ?, `end` = ?, `sys` = ? WHERE id = ?', '1', $sum, $sum, $time, $currency, $id);

    # Обновляем статистику
    $db->query("UPDATE `db_stats` SET `inserts` = `inserts` + '$sum' WHERE `id` = '1'");

    } 
   }
  }
 }
}

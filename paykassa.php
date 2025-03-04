<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);

######################################
# Скрипт FastCore
# Мерчант PAYKASSA
# Автор Jumast
######################################

# Старт сессии
session_start();

# Константа для Include
define('FastCore',true);

# Подгрузка классов системы
spl_autoload_register(function ($lfc) {
    require 'core/'.$lfc.'.php';
});

# Класс конфига
$config = new config;


# Функции
$func = new func;

$paykassa = new PaykassaSCI(
	$config->pkm_id,      // идентификатор мерчанта
	$config->pkm_pass // пароль мерчанта
);


//private_hash Мы посылаем в POST запросе при отправке IPN. Важно: для sci_confirm_order и sci_confirm_transaction_notification разные URL в настройках мерчанта.

    $private_hash = $_POST["private_hash"];

    $res = $paykassa->checkOrderIpn(
        $private_hash
    );

    if ($res['error']) {
        echo $res['message'];
        // actions in case of an error
    } else {
        // actions in case of success
        $id = $res["data"]["order_id"];        // unique numeric identifier of the payment in your system, example: 150800
        $transaction = $res["data"]["transaction"]; // transaction number in the system paykassa: 96401
        $hash = $res["data"]["hash"];               // hash, example: bde834a2f48143f733fcc9684e4ae0212b370d015cf6d3f769c9bc695ab078d1
        $currency = $res["data"]["currency"];       // the currency of payment, for example: DASH
        $system = $res["data"]["system"];           // system, example: Dash
        $address = $res["data"]["address"];         // a cryptocurrency wallet address, for example: Xybb9RNvdMx8vq7z24srfr1FQCAFbFGWLg
        $tag = $res["data"]["tag"];                 // Tag for Ripple and Stellar
        $partial = $res["data"]["partial"];         // set up underpayments or overpayments 'yes' to accept, 'no' - do not take
        $amount = $res["data"]["amount"];    // invoice amount example: 1.0000000

$selectPS = mb_strtoupper($currency);
$systemPay = $db->query('SELECT *  FROM db_paysystem WHERE currency = ? LIMIT 1',$selectPS)->fetchArray();
$calculateSum = round($amount * $systemPay['pairs'],2);

	if ($partial === 'yes') {
		// сумма заявки может не совпадать с полученной суммой, если включен режим частичной оплаты
		// актуально только для криптовалют, по умолчанию 'no'
	}

//	$num = $db->query("SELECT * FROM `db_insert` WHERE `id` = ?", $id)->numRows();
 //   if($num == 0) {	echo $res["data"]["order_id"].'|error'; exit(); }

    $data = $db->query("SELECT * FROM `db_insert` WHERE `id` = ? LIMIT 1", $id)->fetchArray();
    if($data['status'] == 0){ 
		//тут выполняем если все ок:

		$uid = $data['uid'];
		$sum = $calculateSum;
		$time = time();

		# Пополнение и автовыбор тарифа
		$sumDep = round($sum,2); 
 
		 # Обновляем пользователя
		 $db->query("UPDATE db_users SET sum_in = sum_in + ?, money_p = money_p + ?, money_b = money_b + ? WHERE id = ?", $sumDep, $sumDep, $sumDep, $uid);

    	# Реф-система
    	$uref = new income_ref($db);
    	$uref->uRef($uid, $sum);

    	# Конкурс реф
    	$contest_ref = new contest_ref($db);
    	$contest_ref ->UpdatePoints($uid, $sum);
        
	   $db->query('UPDATE db_insert SET `status` = ?, sum = ?, sum_x = ?, `end` = ?, `sys` = ? WHERE id = ?', '1', $sum, $sum, $time, $currency, $id);

		# Пишем в статистику
		$db->query("UPDATE `db_stats` SET `inserts` = `inserts` + '$sum' WHERE `id` = '1'");
      

        echo $id.'|success'; // обязательно, для подтверждения зачисления платежа
	}
}

?>
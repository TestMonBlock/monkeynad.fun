<?php
//header("Content-type: text/plain; charset=utf-8");
// header("Cache-Control: no-store, no-cache, must-revalidate");
// header("Cache-Control: post-check=0, pre-check=0", false);

if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }

if(isset($_POST['add'])) {
    
	$title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
	$url = $func->validUrl(trim($_POST['url']));
	
	$timers = filter_var($_POST['timer'], FILTER_SANITIZE_NUMBER_INT);
	$vip = filter_var($_POST['vip'], FILTER_SANITIZE_NUMBER_INT);
	$reply = filter_var($_POST['reply'], FILTER_SANITIZE_NUMBER_INT);
	$timeAdd = time();

	if ($title === FALSE) {
		$data['error'] = 'Error title!';
		$data['id'] = 'title';
	}
	if ($url === FALSE) {
		$data['error'] = 'Error URL!';
		$data['id'] = 'url';
	}
	if (iconv_strlen($title) > 65) {
		$data['error'] = 'You can only write 65 characters in the Title field!';
		$data['id'] = '';
	}
	if (strlen($url) > 255) {
		$data['error'] = 'You can only write 255 characters in the URL field!';
		$data['id'] = '';
	}
	if ($timers === FALSE || $vip === FALSE || $reply === FALSE && empty($data)) {
		$data['error'] = 'The value could not be determined!';
		$data['id'] = '';
	}
	if (intval($vip > 1) || intval($reply > 1)) {
		$data['error'] = 'There is no such value!';
		$data['id'] = '';
	}
	if (!empty($data)) {
		$data['status'] = 'error';
		$data['title'] = 'Error';
		$data['redirect'] = '';
	}

	if (empty($data)) {

	$surf = $db->query('SELECT * FROM db_surf_config WHERE id = ?', array(1))->fetchArray();
	
	$timer = isset($_POST['timer']) ? (int)$_POST['timer'] : $surf['timer'];
	$timerArr = array($timer, $timer*2, $timer*3, $timer*4, $timer*5,$timer*6);

	if ($timer == 10) { $selTimer = $timerArr[0]; $buyTimer += $surf['timer_pay']; } 
	if ($timer == 20) { $selTimer = $timerArr[0]; $buyTimer += ($surf['timer_pay'] * 2); } 
	if ($timer == 30) { $selTimer = $timerArr[0]; $buyTimer += ($surf['timer_pay'] * 3); }
	if ($timer == 40) { $selTimer = $timerArr[0]; $buyTimer += ($surf['timer_pay'] * 4); }
	if ($timer == 50) { $selTimer = $timerArr[0]; $buyTimer += ($surf['timer_pay'] * 5); }
	if ($timer == 60) { $selTimer = $timerArr[0]; $buyTimer += ($surf['timer_pay'] * 6); }

	$priceTimer = number_format($buyTimer, 6, '.', ''); // Цена таймера
	$timerAd = $selTimer; // Таймер

	if ($vip == 1) { 
	$priceVip = $surf['vip']; 
	$priceWind = $surf['wind'];  
	$wind = 1;
	} else { 
	$priceVip = 0.00; 
	$priceWind = 0.00;
	$wind = '0';
	}
	if ($reply == 1) { $period = 12; } else { $period = 24; }

	$priceAd = $surf['price_click']+$priceTimer+$priceWind+$priceVip; // Цена рекламодателю
	$perAd = $surf['per_click']+$priceTimer+$priceWind; // Цена исполнителю

	$addSurfing = $db->query("INSERT INTO db_surf (uid, title, url, timer, wind, vip, reply, price_click, per_click, date_add, status) VALUES (?,?,?,?,?,?,?,?,?,?,?)",$uid,$title,$url,$timerAd,$wind,$vip,$period,$priceAd,$perAd,$timeAdd,'2');
	$addSurfing->affectedRows();
	
	$data['status'] = 'success';
	$data['title'] = 'Success';
	$data['error'] = 'You have successfully added the link!';
	$data['redirect'] = '/user/surf/links';
	}
} else {
	$data['status'] = 'error';
	$data['title'] = 'Error';
	$data['error'] = 'Data error';
	$data['redirect'] = '';
}
echo json_encode($data);
<?php
header("Content-type: text/plain; charset=utf-8");

if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }

$csrfCheck = $func->csrfVerify();
if(isset($_POST['edit']) && $csrfCheck == TRUE) {

	$surf_id = filter_var($_POST['surf_id'],FILTER_SANITIZE_NUMBER_INT);
	$title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
	$url = $func->validUrl(trim($_POST['url']));
	
	$strr = array('-', '"', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ':', '<', '>', '?', '[', ']', ';', "'", ',', '.', '/', '', '~', '`', '=');
	$country = str_replace($strr, '', implode($_POST['country'],"|"));
	$countryCheck = (empty($country)) ? 'XX|' : $country;
	$crev = filter_var($_POST['crev'], FILTER_SANITIZE_NUMBER_INT);
	
	$timers = filter_var($_POST['timer'], FILTER_SANITIZE_NUMBER_INT);
	$wind = filter_var($_POST['wind'], FILTER_SANITIZE_NUMBER_INT);
	$vip = filter_var($_POST['vip'], FILTER_SANITIZE_NUMBER_INT);
	$reply = filter_var($_POST['reply'], FILTER_SANITIZE_NUMBER_INT);

	if($serf_id === FALSE && empty($data)){
		$data['error'] = 'Incorrect data!';
		$data['id'] = 'surf_id';
	}
	if($title === FALSE && empty($data)){
		$data['error'] = 'Error title!';
		$data['id'] = 'title';
	}
	if($url === FALSE && empty($data)){
		$data['error'] = 'Error URL!';
		$data['id'] = 'url';
	}
	if($country === FALSE && empty($data)){
		$data['error'] = 'Не определено значение страны!';
		$data['id'] = 'country';
	}
	if($crev === FALSE && empty($data)){
		$data['error'] = 'Не определен запрет страны!';
		$data['id'] = 'crev';
	}
	if (iconv_strlen($title) > 65) {
		$data['error'] = 'You can only write 65 characters in the Title field!';
		$data['id'] = '';
	}
	if (strlen($url) > 255) {
		$data['error'] = 'You can only write 255 characters in the URL field!';
		$data['id'] = '';
	}
	if (strlen($country) > 500) {
		$data['error'] = 'The country selection limit has been exceeded!';
		$data['id'] = '';
	}
	if ($timers === FALSE || $wind === FALSE || $vip === FALSE || $reply === FALSE && empty($data)) {
		$data['error'] = 'The value could not be determined!';
		$data['id'] = '';
	}
	if (intval($vip > 1) || intval($wind > 1) || intval($reply > 1) || intval($crev > 1)) {
		$data['error'] = 'There is no such value!';
		$data['id'] = '';
	}

    if(empty($data)){
		$numbe =  $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->numRows();
        if($numbe > 0){
			$data_surf = $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->fetchArray();
			$owner = $data_surf['uid'];
            if($uid != $data_surf['uid']){
				$data['error'] = "The link does not belong to you!";
			}
		} else {
			$data['error'] = 'No link!';
        }
    }
	if(!empty($data)){
		$data['status'] = 'error';
		$data['title'] = 'Error';
		$data['redirect'] = '';
	}
	if(empty($data)){
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

	if ($wind == 1) { $priceWind = $surf['wind']; } else { $priceWind = 0.00; }
	if ($vip == 1) { $priceVip = $surf['vip']; } else { $priceVip = 0.00; }
	if ($reply == 1) { $period = 12; } else { $period = 24; }
	if ($countryCheck == 'XX|') { $priceCountry = 0.00; } else { $priceCountry = 0.01; }
	if ($crev == 1) { $crev2 = 1; } else { $crev2 = 0; }

	$priceAd = $surf['price_click']+$priceTimer+$priceWind+$priceVip+$priceCountry; // Цена рекламодателю
	$perAd = $surf['per_click']+$priceTimer+$priceWind; // Цена исполнителю

	$datas_edit = $db->query('SELECT * FROM db_surf WHERE id = ?', array($surf_id))->fetchArray();
	$balanceSurf = $datas_edit['balance'];
	
	$editLinkSurf = $db->query('UPDATE db_surf SET title = ?, url = ?, country = ?, crev = ?, timer = ?, wind = ?, vip = ?, reply = ?, price_click = ?, per_click = ?, balance = ?, status = ? WHERE id = ?', $title, $url, $countryCheck, $crev2, $timerAd, $wind, $vip, $period, $priceAd, $perAd, $balanceSurf, '2', $surf_id);
    $editLinkSurf = $db->close();
	
	$data['status'] = 'success';
	$data['title'] = 'Success';
	$data['error'] = 'You have successfully edited surfing!';
	$data['redirect'] = '/user/surf/links';
	}
} else {
	$data['status'] = 'error';
	$data['title'] = 'Error';
	$data['error'] = 'Data error';
	$data['redirect'] = '';
}
echo json_encode($data);
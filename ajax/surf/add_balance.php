<?php
header("Content-type: text/plain; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }

if (!empty($_POST['surf_id'])) {
	
	$surf_id = filter_var($_POST['surf_id'],FILTER_SANITIZE_NUMBER_INT);
	$surfSum = filter_var($_POST['money'],FILTER_VALIDATE_FLOAT);

	if (empty($data)) {
		$numb =  $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->numRows();
		if ($numb > 0) {
				$data_surf = $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->fetchArray();
				$owner = $data_surf['uid'];
		if ($uid != $data_surf['uid']) {
				$data['error'] = 'The link does not belong to you!';
		}
	} else {
			$data['error'] = 'No link!';
		}
	}
	
	$data_user = $db->query('SELECT money_b, sum_in, money_p FROM db_users WHERE id = ?', array($uid))->fetchArray();
	$balanceUser = $data_user['money_p'];
	$balanceSurf = $data_user['money_b'];
	$sumInUser = $data_user['sum_in'];

/* Лимит пополнения на серфинг */
$balanceSurf2 = round($balanceSurf+0.01,2); // Общая сумма пополнений
$balance_x = ($sumInUser*1.2);
if ($balanceSurf2+$surfSum > $balance_x) {
    $lastInsert = 1; // ок
} else {
    $lastInsert = 0;
}
/* Конец лимита пополнений в серфинг */

	if ($surf_id === FALSE) {
		$data['error'] = 'Data error!';
	}
	if ($surfSum === FALSE) {
		$data['error'] = 'The amount is not specified!';
		$data['id'] = 'money';
	}
	if ($balanceUser <= $surfSum) {
		$data['error'] = 'Not enough funds!';
	}
	if ($lastInsert == 1) {
		$data['error'] = 'You need to make a deposit of 1 USD';
	}
	if ($surfSum < 0) {
		$data['error'] = 'The amount cannot be 0!';
	}
	if(!empty($data)){
		$data['status'] = 'error';
		$data['title'] = 'Error!';
		$data['redirect'] = '';
	}

	if(empty($data)){
		 
	$hold = min($balanceSurf, $surfSum); // Спишем из холда цену либо обнуляем

		$db->query('UPDATE db_surf SET balance = balance + ? WHERE id = ?', $surfSum, $surf_id);
		$db->query('UPDATE db_users SET money_p = money_p - ?, money_b = money_b - ? WHERE id = ?', $surfSum, $hold, $uid);

		$db->close();
		
		$data['status'] = 'success';
		$data['title'] = 'Success';
		$data['error'] = 'You have successfully replenished the balance of the link for '.$surfSum.' USD';
		$data['redirect'] = '';
		
	}
} else {
	$data['status'] = 'error';
	$data['title'] = 'Error';
	$data['error'] = 'Data error';
	$data['redirect'] = '';
}
echo json_encode($data);
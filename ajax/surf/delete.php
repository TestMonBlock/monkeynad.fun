<?php
header("Content-type: text/plain; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }

if (!empty($_POST['surf_id'])) {
	$surf_id = filter_var($_POST['surf_id'], FILTER_SANITIZE_NUMBER_INT);

	if ($surf_id === FALSE) {
		$data['error'] = 'Data error!';
	}

    if(empty($data)){
		$numbst =  $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->numRows();
        if($numbst > 0){
			$data_surf = $db->query('SELECT uid, balance FROM db_surf WHERE id = ?', array($surf_id))->fetchArray();
			$owner = $data_surf['uid'];
            if($uid != $owner){
				$data['error'] = "The link does not belong to you!";
			}
		} else {
			$data['error'] = 'No link!';
        }
    }
	
	if (!empty($data)) {
		$data['status'] = 'error';
		$data['title'] = 'Error';
		$data['redirect'] = '';
	}
	if (empty($data)) {
		
		$moneyBack = $data_surf['balance'];
		$owner = $data_surf['uid'];
		
		$db->query('UPDATE db_users SET money_p = money_p + ?, money_b = money_b + ? WHERE id = ?', $moneyBack, $moneyBack, $owner);
		$db->query('DELETE FROM db_surf WHERE id = ?',array($surf_id));
		$db->close();
		
		$data['status'] = 'success';
		$data['title'] = 'Success';
		$data['error'] = 'You have successfully deleted the link, the funds have been returned to you!';
		$data['redirect'] = '';
	}
}else{
	$data['status'] = 'error';
	$data['title'] = 'Error';
	$data['error'] = 'Data error';
	$data['redirect'] = '';
}
echo json_encode($data);
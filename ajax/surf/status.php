<?php
header("Content-type: text/plain; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }

if(!empty($_POST['surf_id']) && !empty($_POST['status'])){
	$status_array = array(1,2);
	$surf_id = filter_var($_POST['surf_id'], FILTER_SANITIZE_NUMBER_INT);
	$status = filter_var($_POST['status'], FILTER_SANITIZE_NUMBER_INT);
	
	if ($surf_id === FALSE) {
		$data['error'] = 'Incorrect data!';
	}
	
	if (!in_array($status,$status_array) && empty($data)) {
		$data['error'] = 'Data error';
	}
	
    if(empty($data)){
		$numbst =  $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->numRows();
        if($numbst > 0){
			$data_surf = $db->query('SELECT uid FROM db_surf WHERE id = ?', array($surf_id))->fetchArray();
			$owner = $data_surf['uid'];
            if($uid != $owner){
				$data['error'] = 'The link does not belong to you!';
			}
		} else {
			$data['error'] = 'The link does not exist!';
        }
    }
	
	if(!empty($data)){
		$data['status'] = 'error';
		$data['title'] = 'Error';
		$data['redirect'] = '';
	}
	
	if(in_array($status,$status_array) && empty($data)) {
	
	$db->query('UPDATE db_surf SET status = ? WHERE id = ?', $status, $surf_id);
	$db->close();

	$data['status'] = 'success';
	$data['title'] = 'Success';
	$data['error'] = 'You have successfully approved the ad';
	$data['redirect'] = '';
	}
} else {
	$data['status'] = 'error';
	$data['title'] = 'Error';
	$data['error'] = 'Data error';
	$data['redirect'] = '';
}
echo json_encode($data);
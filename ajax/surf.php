<?php
if (!defined('FastCore') || FastCore !== true) { Header('Location: /404'); return; }
if (!isset($_SESSION['uid'])) { exit(); }
$type = filter_var($_GET['type'],FILTER_SANITIZE_STRING);

$arr = ['add' => 'add', 'add_balance' => 'add_balance', 'delete' => 'delete', 'edit' => 'edit', 'status' => 'status'];

$ajax = $arr[$type];

if($ajax != NULL) {
	
	if (strpos($type, ".") !== false) {
		exit('Unknown request'); 
	} else {

	if(file_exists(BASE_DIR.'/ajax/surf/'.$type.'.php')) {
		
		$uid = $_SESSION['uid'];
		$login = $_SESSION['login'];
		$data = array();
		
		include(BASE_DIR.'/ajax/surf/'.$type.'.php');

	}	else { 
			exit('Unknown request 2'); 
		}
	}
} else {
		exit('Unknown request 3'); 
}
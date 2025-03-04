<?php if(!defined('FastCore')){exit('Opss!');}
header('Content-Type: text/html; charset=utf-8');
$update = json_decode(file_get_contents('php://input'), true);

if($update) {
    if(time()-($update['message']['date']) > 59) {
        exit('Update Time Out!');
    }
}
else{
    exit('Error');
}

$bot_token = $config->telegram_token;
$telegramTut = $config->telegram;

$start = explode(' ', trim($update['message']['text']))[0];
$id_and_md5 = explode(' ', trim($update['message']['text']))[1];

$channel = urlencode('@'.$telegramTut); // тут айди канала

$userIdTelegram = urlencode($update['message']['from']['id']);
  

if(($start) && ($id_and_md5)){
    $id = explode('_', trim($id_and_md5))[0];
    $md5 = explode('_', trim($id_and_md5))[1];
    if(!is_numeric($id)){
        exit('Error');
    }
    if($md5!=md5($id.'fvfhtrdcmt45')){
        exit('Error');
    }
    $chat_id = $update['message']['chat']['id'];
	
	
    $rows = $db->query("SELECT * FROM `db_bonus_tg` WHERE `uid` = '$id' AND tgid = '$chat_id' AND status = '1' ORDER BY id DESC")->numRows();
    if($rows!=0){
        $message = urlencode('You already received your bonus! Bonus can be received 1 time.');
        file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message");
        exit('OK');
    } else{
        $db->query("DELETE FROM db_bonus_tg WHERE tgid = ? AND status != ?", $chat_id, 1);
       
        $db->query("INSERT INTO `db_bonus_tg` (`uid`, `tgid`, `status`, `date_add`) VALUES (?, ?, ?, ?)", $id, $chat_id, 0, time());
        $message = urlencode("Hello, to get bonus you need to subscribe to Our Channel @$telegramTut then come back here and click the button below 'Subscribed'");
		
		
        file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message&reply_markup=".json_encode([
            'keyboard' => [[['text' => 'Subscribed']]],
            'resize_keyboard' => true,
            'one_time_keyboard' => true
        ]));
		
        exit('OK');
    }
}

if ($update['message']['text'] == 'Subscribed'){
	
	$chat_id = $update['message']['chat']['id'];

$rows = $db->query("SELECT * FROM `db_bonus_tg` WHERE  tgid = '$chat_id' AND status = '1' ORDER BY id DESC")->numRows();
    if($rows != 0){
        $message = urlencode('You already received your bonus! Bonus can be received 1 time.');
        file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message");
        exit('OK');
    } else{
		
	// Проверяем подписку на канал
	$chat_member = file_get_contents("https://api.telegram.org/bot$bot_token/getChatMember?chat_id=$channel&user_id=$userIdTelegram");
		
		$datas = json_decode($chat_member);
		$status_user = $datas->result->status;
	//	$first_name = $datas->result->user->first_name;
	//	$last_name = $datas->result->user->last_name;
		$username = $datas->result->user->username;
	//	$language_code = $datas->result->user->language_code; 
		
		if($status_user === 'member') {
			//тут пишем в базу что чел подписался и делаем все необходимое
		
			$rows = $db->query("SELECT * FROM db_bonus_tg WHERE tgid = ? AND status = ? ORDER BY id DESC", $chat_id, 0);
			
			$row = $rows->fetchArray();
			$uid = $row['uid'];
			
			$user_login = $db->query("SELECT `id`, `login` FROM `db_users` WHERE `id` = '$uid'")->fetchArray();
			$login = $user_login['login'];
			
			
			$time = time();
			$sum = $config->bonus_tg;

			$db->query("UPDATE db_bonus_tg SET login = ?, status = ? WHERE id = ?", $login, 1, $row['id']);
			
			$db->query("UPDATE db_users SET money_p = money_p + ?, username = ? WHERE id = ?", $sum, $username, $uid);
			 
			$message = urlencode('Bonus '.$sum.' USD has been successfully credited to you, you can check it.');
			
    
			file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message");
			exit('OK');
		} else {
			 $message = urlencode("You're not subscribed to the channel, subscribe and click the button again!");
			file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message&reply_markup=".json_encode([
            'keyboard' => [[['text' => 'Subscribed']]],
            'resize_keyboard' => true,
            'one_time_keyboard' => true
        ]));
		exit('OK');
		}
		
		
}



}
 
if ($update['message']['text'] == '/start'){
    $chat_id = $update['message']['chat']['id'];
    $message = urlencode('Your query was not found. Go to the bot via the link on the page https://genkiminer.net/user/bonus and press start again');
    file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message");
}
else{
    $chat_id = $update['message']['chat']['id'];
    $message = urlencode("I don't understand you.");
    file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?chat_id=$chat_id&text=$message");
}

exit('OK');

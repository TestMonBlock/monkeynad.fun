<?php if(!defined('FastCore')){exit('Opss!');}
 
# Заголовок
$opt['title'] = 'Telegram bonus';

// Телеграм бот
$tgBot = $config->telegram_bot;

?>

<div class="text-center">
You can get <span class="text-success"><b><?=$config->bonus_tg;?> USD </b></span> bonus just for 1 simple action - subscribe to our channel in Telegram.<br>
In order to get the bonus click the button below, you will go to the bot opening page.<br>
 Next you need to click the "Run" button.<br>
 After that follow the instructions from the bot and the bonus is yours!
</div>


<div class="pb-3 text-center">
<?php
$num = $db->query("SELECT * FROM `db_bonus_tg` WHERE `status` = '1' AND `uid` = '$uid'")->numRows();
if($num == 0) {
echo '<a href="http://t.me/'.$tgBot.'?start='.$uid.'_'.md5($uid.'fvfhtrdcmt45').'" target="_blank" class="btn btn-lg btn-primary mt-2">TELEGRAM BONUS</a>';
} else {
	
}

?>
</div>


<div class="stats pb-1 mb-2 mt-3">
<div class="stats-title text-uppercase text-white">Last 10 bonuses</div>
<table class="stats2 table table-sm table-striped mb-0">  
<thead>
		<th class="text-center">#</th>
	<th class="text-start">User</th>
	<th class="text-center">Bonus</th>
	<th class="text-end">Time</th>
</thead>
<?php

$bon = $db->query("SELECT * FROM db_bonus_tg WHERE `status` = '1' ORDER BY `id` DESC LIMIT 10")->fetchAll();
 
foreach ($bon as $b) {
?>
<tr class="notranslate">
	<td class="text-center"><img src="/img/s1.png" height="22" /></td>
    <td class="text-start"><b><?=$b['login']; ?></b></td>
    <td class="text-center"><span class="text-sum"><?=$config->bonus_tg;?> <small>{!VAL!}</small></span></td>
	<td class="text-end"><?=date("d M Y - H:i",$b['date_add']); ?></td>
</tr>
<?php
	}

?>
</table>
</div>
 
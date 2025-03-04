<?php if(!defined('FastCore')){ exit('Oops!'); }

# База данных
const dbHost = 'localhost';
const dbUser = 'gree4170_core';
const dbPass = 'XFn;pSQnUxlX';
const dbName = 'gree4170_core'; 

# Подключение к БД
include('classes/db.php');
$db = new db(dbHost, dbUser, dbPass, dbName);

class config {
	# Настройки сайта
	public $start_time = '1739998800'; // Старт (timestamp).
	public $sitename = 'Hamster Game'; // Название сайта
	public $siteurl = 'Hamster-game.Net'; // Название сайта
	public $email = 'support@hamster-game.net'; // Почта

	public $telegram = 'genkiminer'; // Telegram Channel or Group
	public $telegram_bot = 'genkuminer_bot'; // Telegram Bot
	public $telegram_token = '123123:g1e2n3k4u5m6i7n8e9r'; // Telegram token API
	public $bonus_tg = '1'; // Бонус за подписку в TG

	public $bonus = '10'; // Бонус за регистрацию
	public $valuta = 'USD'; //  Валюта сайта
	public $percent = '20'; // Процент доходност

	# Админка меняем под себя
	# меняем тут /pages/название админ директории 
	public $adm_dir = 'adminka'; // Директория меня для себя
	public $adm_name = 'admin'; // Логин
	public $adm_pass = '123456'; // Пароль

	# PAYEER
	public $py_shop = '2086772540'; // ID магазина
	public $py_secret = 'VJ0mrvtTwVaJJD6Z'; // SECRET ключ магазина
	public $py_NUM = 'P1094972722'; // Номер кошелька
	public $py_apiID = '2087239995'; // API ID
	public $py_apiKEY = 'cMiiAauYSVTXPXy';// API KEY
	
    # PAYKASSA
	public $pkm_id = '26594'; // ID магазина
	public $pkm_pass = 'WaG3VWOt6lnDxBGbNrJEgpdoLSbI8JxQ'; // PASS магазина
	public $pka_id = '29206'; // ID API
	public $pka_pass = 'nXr4l3kEzxHHmQN9pkG0bZqKGBAzP4u'; // PASS API 
	
	# FAUCETPAY
	public $fp_username = 'hamadeep'; // Login
	public $fp_apiKEY = 'qwqwqwqwqwqwqwqw'; // Secret key
}

?>
<?php if(!defined('FastCore')){echo ('Выявлена попытка взлома!');exit();}

/**
 * Маршрутизатор (правила маршрутизации страниц).
 */

$GLOBALS['routes'] = array (
'_404' => '../inc/404.php', // 404
'/' => 'home.php', // Главная
'/p/([0-9]+)?' => '/home.php', // Реф-ссылка
'/i/([0-9]+)?' => '/home.php', // Реф-ссылка
'/view/([0-9]+)?' => '/inc/view.php', // iFrame
'/'.$tgCallbackUrl.'' => ''.$tgCallbackUrl.'.php', // Telegram Callback
'/stats' => 'stats.php', // Статистика
'/bounty' => 'bounty.php', // Buy script
'/news' => 'news.php', // Новости
'/news/p/([0-9]+)?' => 'news.php',
'/login' => 'login.php', // вход и регистрация
'/terms' => 'terms.php', // Правила
'/privacy' => 'privacy.php', // Правила
'/contest' => 'contest.php', // Конкурсы
'/help' => 'help.php', // Поддержка

# Аккаунт
'/user' => 'dashboard.php', // Профиль
'/user/dashboard' => 'dashboard.php', // Профиль
'/user/bonus' => 'bonus.php', // Бонусы
'/user/swap' => 'swap.php', // Менять баланс
'/user/history' => 'store.php', // история
'/user/insert' => 'insert.php', // Пополнить
'/user/insert/payeer' => 'insert_payeer.php', // Пополнить
'/user/insert/faucetpay' => 'insert_faucetpay.php', // Пополнить 
'/user/insert/([^/]+)' => 'insert.php', // Пополнить выбран
'/user/deposit' => 'deposit.php', // Пополнить
'/user/deposit/([^/]+)' => 'deposit.php', // Пополнить выбран
'/user/pay' => 'pay.php', // Спобом заказа выплаты
'/user/pay/([^/]+)' => 'pay.php', // Выплата
'/user/surf' => 'surf/earn.php', // Серфинг
'/user/surf/add' => 'surf/add.php', // Серфинг добавить
'/user/surf/edit' => 'surf/edit.php', // Серфинг редактирование
'/user/surf/links' => 'surf/links.php', // Серфинг кабинет
'/user/refs' => 'referals.php', // Рефералы
'/user/leaders' => 'leaders.php', // Лидеры дня
'/user/spins' => 'freebet.php', // Счастливый билет
'/user/settings' => 'settings.php', // Настройки
'/user/success' => 'status_success.php', // Success
'/user/fail' => 'status_fail.php', // Fail
'/user/logout' => 'dashboard.php', // Выход

# Админка
'/'.$adm.'' => 'login.php', // Вход
'/'.$adm.'' => 'main.php', // Главная
'/'.$adm.'/' => 'main.php', // Главная слеш
'/'.$adm.'/config' => 'config.php', // Настройки
'/'.$adm.'/contest_ref' => 'contest_refs.php', // Реф-конкурс
'/'.$adm.'/contest_ref/list' => 'contest_refs.php', // Реф-конкурс 
'/'.$adm.'/contest_ref/add' => 'contest_refs.php', // Реф-конкурс 
'/'.$adm.'/youtube' => 'youtube.php', // Yotube bounty
'/'.$adm.'/users' => 'users.php', // Пользователи
'/'.$adm.'/users/info/([0-9]+)?' => 'users.php', // Пользователь
'/'.$adm.'/users/p/([0-9]+)?' => 'users.php', // Пользователи страницы
'/'.$adm.'/uips' => 'uips.php', // Пользователи IP
'/'.$adm.'/uips/p/([0-9]+)?' => 'uips.php', // Пользователи страницы IP
'/'.$adm.'/st/([^/]+)' => 'stats.php', // Статистика
'/'.$adm.'/news' => 'news.php', // Новости
'/'.$adm.'/news/add' => 'news.php', // Новости
'/'.$adm.'/news/edit/([0-9]+)?' => 'news.php', // Новости
'/'.$adm.'/pers' => 'pers.php', // Персонажи
'/'.$adm.'/pers/add' => 'pers.php', // Персонажи
'/'.$adm.'/pers/edit/([0-9]+)?' => 'pers.php', // Персонажи
'/'.$adm.'/referers' => 'referers.php', // Источники
'/'.$adm.'/referers/all' => 'referers.php', // Источники
'/'.$adm.'/geo' => 'geo.php', // просмотры
'/'.$adm.'/paysystem' => 'paysystem.php', // Платежные системы
'/'.$adm.'/fake' => 'fake.php', // Фейки
'/'.$adm.'/restart' => 'restart.php', // Фейки
'/'.$adm.'/pays' => 'pays.php', // руч.выплаты
'/'.$adm.'/pays_payeer' => 'pays_payeer.php', // руч.выплаты
);
?>
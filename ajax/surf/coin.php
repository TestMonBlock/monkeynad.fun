<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
ini_set('error_reporting', 0);

header("Content-type: text/html; charset=utf-8");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);

session_start();

define('FastCore',true);
define('TIME', time());
define('BASE_DIR', $_SERVER['DOCUMENT_ROOT']);

    function get_codek_ckick($dek) {
        $codek[1] = array(1 => '2', 2 => '6', 3 => '3', 4 => '4', 5 => '5', 6 => '1', 7 => '7', 8 => '8');
        $codek[2] = array(1 => '3', 2 => '2', 3 => '8', 4 => '4', 5 => '5', 6 => '7', 7 => '6', 8 => '1');
        $codek[3] = array(1 => '8', 2 => '2', 3 => '4', 4 => '7', 5 => '5', 6 => '6', 7 => '3', 8 => '1');
        if (isset($codek[$dek])) return $codek[$dek];
        return false;
    }

if (!isset($_SESSION['uid'])) { exit('1'); }

if (isset($_POST['cnt']) && isset($_POST['num']) && isset($_SESSION['view']) && $_POST['cnt'] == $_SESSION['view']['cnt'])
{
    $num = (int)$_POST['num'];
    if ($num)
    {
        $minus = TIME - $_SESSION['view']['timestart'];
        if ($minus < $_SESSION['view']['timer']) exit('2');
        $codek = get_codek_ckick($_SESSION['view']['codek_click']);
        foreach ($codek as $k => $v)
        {
            if ($v == $num)
            {
                $num = $k;
                break;
            }
        }

        if ($num == $_SESSION['view']['captcha']) {
			
	# Система
	spl_autoload_register(function ($lfc) {
		require_once (BASE_DIR.'/core/'.$lfc.'.php');
	});

	# Функции
	$config = new config;
	$func = new func;
	
	$time = time();

	# Ищем пользователя
	$usid = $_SESSION['uid'];
	$user_info  = $db->query('SELECT * FROM db_users WHERE id = ?',$usid)->fetchArray();
	$rid = $user_info['rid'];
	$ref_info  = $db->query('SELECT * FROM db_users WHERE id = ?',$rid)->fetchArray();

	$num_rows = $db->query("SELECT * FROM db_surf WHERE id = '".$_SESSION['view']['id']."' and balance >= price_click AND status = '1' LIMIT 1")->numRows();
	if ($num_rows > 0) {

	$num24 = $db->query('SELECT link, time_end FROM db_surf_views WHERE link = '.$_SESSION['view']['id'].' AND uid = '.$_SESSION['uid'].' AND time_end > '.$time.'')->numRows();
	
		if ($num24 >= 1) exit('<div class="blockerror">Re-viewing is not available yet!</div>');

		$result = $db->query("SELECT * FROM  db_surf WHERE id = '".$_SESSION['view']['id']."' and balance >= price_click LIMIT 1")->fetchArray();
		$move = $result['url'];
		$id = $result['id'];

			if ($id != $_SESSION['view']['id']) exit('<div class="blockerror">ERROR!!!</div>');

			$params = $db->query('SELECT * FROM db_surf WHERE id = ? LIMIT 1', array($id))->fetchArray();
			$timend  = time()+60*60*$params['reply'];

	
		# Цена
		$price = $result['price_click'];
		$price = number_format($price*2,6); // спишет
		
		$payUser = $result['per_click'];
		$payUser = number_format($payUser,6); // начислит
		
		$payRef = number_format(0.00500,6); // рефу


		# Записываем что просмотрена ссылка
               $num_rows_click = $db->query("SELECT id, link FROM db_surf_views WHERE uid = '".$_SESSION['uid']."' and link = '".$id."' LIMIT 1")->numRows();
                if ($num_rows_click >= 1)
                {
                   $db->query("INSERT INTO db_surf_views (`link`, `time_end`, `uid`) VALUES (?,?,?)",array($id,$timend, $_SESSION['uid']));
                }
                else
                {
                   $db->query("INSERT INTO db_surf_views (`link`, `time_end`, `uid`) VALUES (?,?,?)",array($id,$timend,$_SESSION['uid']));
                }

		# Обновляем пользователя
		$db->query('UPDATE db_users SET surf_view = surf_view + 1, money_p = money_p + ?, surf_earn = surf_earn + ?, ref_to = ref_to + ? WHERE id = ?', $payUser, $payUser, $payRef, $usid);

		# Обновляем рефовода
		$db->query('UPDATE db_users SET money_p = money_p + ?, income = income + ?, ref_views = ref_views + ? WHERE id = ?', $payRef, $payRef, '1',$rid);

		# Обноляем площадку
		$db->query('UPDATE db_surf SET views = views +?, balance = balance -? WHERE id = ?', '2', $price, $id);

		# Пишем в статистику
		$db->query("UPDATE db_stats SET views = views + 1 WHERE id = '1'");

				# Успешный просмотр, удаляем сессию
				unset($_SESSION['view']);
				exit('OK;'.$payUser.';'.$move.'');
            }
            else
            {
                exit(3);
            }

        }
        else
        {
            exit('<div class="blockerror">Error!<br /><span>Incorrectly solved captcha!</span></div>');
        }
    }
    else if ($num == 0)
    {
        $codek_new = rand(1, 3);
        $_SESSION['view']['codek_click'] = $codek_new;
        $codek = get_codek_ckick($codek_new);
        $rand = rand(1000000, 9999999);
    ?>
        <div class="clocktable">
                <div class="captcha-img"><img src="/assets/captcha/captcha-st/captcha.php?sid=<?php echo $rand; ?>" alt="captcha..."></div>
                <div class="captcha-code" nowrap="nowrap">
                    <?php
                    for($n = 1; $n<=8; $n++)
                    {
                        if ($n == 5) echo '<br />';
                    ?>
                        <span class="serfnum" onclick="vernum(<?php echo $codek[$n] ?>);"><?php echo $n; ?></span>
                    <?php
                    }
                    ?>
                </div>
        </div>
<?php
	}
    else { exit('4'); }
}
else { exit('5'); }
?>
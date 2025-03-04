<?php if(!defined('FastCore')){exit('Opss!');}
 
?>

<div class="py-2"> 
<?php
if ($uid) { } else {
 

# Форма регистрации
if (isset($_POST['reg'])){

$login = $func->FMail($_POST['email']);
$pass = $func->FPass($_POST['password']);

    $time = time();
    
    # Источник перехода
    if (!empty($_COOKIE['rsite'])) $rsite = $_COOKIE['rsite'];
    $host = parse_url($rsite);
    $siter = $host['host'];
    if ($siter) { 
    $site = $siter;
     } else {
    $site = '-';
    }

    # Кто пригласил
    $rid = (isset($_COOKIE["i"])) ? intval($_COOKIE["i"]) : 1;
    $referer = $rid == 1 ? null : $db->query('SELECT login FROM db_users WHERE id = ? LIMIT 1',array($rid))->fetchArray();
    $referer = $referer['login'];
    
    if($referer == null) {$rid = 1; $referer = "Admin";}
    
    # IP адрес
    $ipGet = $func->ipGet();
    $ip = $func->ipValid($ipGet);
    
# Если пустое поле
if(empty($_POST['email'] and $_POST['password'])) { $errors[] = 'Not all fields are filled in!'; }

    # Проверка на валидность
    if(empty($login)) { $errors[] = 'Error email!'; }
    
    # Если не найден пользовтель уходит на регистрацию
    $users = $db->query('SELECT * FROM db_users WHERE email = ?',array($login))->fetchArray();
    if ($users['email'] == $login){  
     
# Проверка пароля
if (password_verify($pass,$users['pass']) != FALSE) {
	# Если забанен
	if ($users['ban'] == 1) {
		$errors[] = 'Your account has been blocked!';
	}
} else {
	$errors[] = 'Password is incorrect'; 
}

# Успешный вход
if (empty($errors)) {
        $userID = $users['id'];
        $db->query('UPDATE db_users SET auth = ? WHERE id = ?',array($time, $userID));
        $db->query('UPDATE db_uips SET ip2 = ?, time = ? WHERE id = ?',array($ip, $time, $userID));
        $_SESSION['uid'] = $users['id'];
        $_SESSION['login'] = $users['login']; 
        header('Location: /user/dashboard');return;
     
} else {
	# Вывод ошибок
	echo '<div class="alert alert-warning"><i class="fa fa-warning"></i> '.array_shift($errors).'</div>';
	}
    
    } else {
    
$ipUser = $db->query('SELECT * FROM db_uips WHERE ip = ?',array($ip))->numRows();
if ($ipUser >= 2){ $errors[] = 'Registration from this IP ('.$ip.') has already been!'; }

    # Успешная регистрация
    if (empty($errors)) {

        $bonusreg = $config->bonus;

        $login_u = 'Player'.rand(10000,99999); // Присвоим рандом логин
        $pass_h  = password_hash($pass, PASSWORD_DEFAULT); // Хешируем пароль
    
        # Создаем пользователя
        $db->query('INSERT INTO db_users (login, email, pass, reg, auth, money_p, money_b, `last`, rid, referer, refsite) VALUES (?,?,?,?,?,?,?,?,?,?,?)', array($login_u, $login, $pass_h, $time, $time, $bonusreg, $bonusreg, $time, $rid, $referer, $site));
        $lid = $db->LastInsert();
    
        # Дополнительно
        $db->query('INSERT INTO db_uips (id,ip,ip2,time) VALUES (?,?,?,?)', array($lid, $ip, $ip, $time));
        
        # Прибавляем рефоводу +1
        $db->query('UPDATE db_users SET refs = refs + ? WHERE id = ?',array('1',$rid));
         
    if ($lid) {

        # Пишем в статистику
        $db->query("UPDATE `db_stats` SET `users` = `users` + 1 WHERE `id` = '1'");
    }

        $_SESSION['uid'] = $lid;
        $_SESSION['login'] = $login_u; 
        header('Location: /user/dashboard');
        return;
        }
    else {
        # Вывод ошибок
        echo '<div class="alert alert-danger">'.array_shift($errors).'", "error"); </div>';
        }
    }
    }
}    
?> 

<div class="row mt-0 mb-2"> 
      <div class="col-lg-10 col-md-12"> 
        <div class="auth-bg p-1 p-md-3">
<?php if ($uid) { ?><br>
  <div class="text-center"> 
    <img src="/img/genki.png" style="width: 33%;"><hr>
<a href="/user/dashboard" class="btn btn-lg  btn-danger btn-home2 me-auto">PLAY NOW</a>
</div>
  <?php } else { ?>
    <form action="" method="POST"> 

    <div class="mb-3 login-home">
      <div class="login-ico px-1"><i class="fa fa-envelope"></i></div>
      <div class="login-form w-100">
      <label>Email:</label><br>
      <input type="email" name="email" class="notranslate" placeholder="Enter email">
      </div>
    </div> 

    <div class="mb-3 login-home">
      <div class="login-ico px-1"><i class="fa fa-lock"></i></div>
      <div class="login-form w-100">
      <label>Password:</label><br>
      <input type="password" name="password" class="notranslate" placeholder="Enter password">
    </div> 
    </div> 
 
<div class="text-center"> 
    <button name="reg" type="submit" class="btn btn-lg btn-danger btn-home2 mx-auto">PLAY NOW</button>
   
  </div>
    </form>
 
  <?php } ?>
       </div>
      </div>
    </div> 
</div>
<?php if(!defined('FastCore')){ exit('Oops!');}

class func {

	# ============================
	# Калькулятор сбора прибыли
	# ============================
	public function SumCalc($per_h, $sum_tree, $last_sbor){
	if($last_sbor > 0){
	if($sum_tree > 0 AND $per_h > 0){
	round($sum_tree,6);
	$last_sbor = ($last_sbor < time()) ? (time() - $last_sbor) : 0;
	$per_sec = $per_h;
	return round( ($per_sec / 3600) * $last_sbor,6);
	}else return 0;
	}else return 0;
	}


    

	# ============================
	# Получаем IP
	# ============================
	public function ipGet() {
	$ipp = $_SERVER['REMOTE_ADDR'];
	return $ipp;
	}

	# ============================
	# Версия IP
	# ============================
	public function ipValid($ip) {
	if (filter_var($ip, FILTER_VALIDATE_IP)) {
	return $ip;
	}
	return false;
	}
		
    
	# ============================
	# Фильтрация Логина
	# ============================
	public function FLogin($login, $mask = "^[а-яА-ЯЁёa-zA-Z0-9_]", $len = "{4,50}") {
		return (is_array($login)) ? false : (preg_match("/{$mask}{$len}$/u", $login)) ? $login : false;
		}
	
	
	# ============================
	# Фильтрация Пароля
	# ============================
    public function FPass(string $pass): ?string { 
        $length = strlen($pass);
        if ($length < 6 || $length > 55) {
            return null;
        } 
        return $pass; 
    } 
	
	# ============================
	# Фильтрация Почты
	# ============================
	public function FMail($email){
		if(is_array($email) && empty($email) && strlen($email) > 255 && strpos($email,'@') > 64) return false;
			return (!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,9}$/ix", $email)) ? false : strtolower($email);
	}
		
	# ============================
	# Фильтрация URL
	# ============================
    public function validUrl($url) {
    $check_url = filter_var($url, FILTER_SANITIZE_URL);
        if(filter_var($check_url, FILTER_VALIDATE_URL)) {
            return $check_url;
        }
        return false;
    }
    
		# ============================
		# Генерация csrf
		# ============================
	public function csrf() {
        if (@!$_SESSION) {
            session_start();
        }
        $_SESSION['csrf'] = crc32(time()) . md5(time()) . strtoupper(sha1(time())) . strtoupper(md5(time())) . sha1(time());
        echo('<input type="hidden" name="@secury" value="'.$_SESSION['csrf'].'">');
    }
		/*
		 * Verify CSRF input
		 */
		
    public function csrfVerify() {
        if (@!$_SESSION) {
            session_start();
        }
        $value = filter_input(INPUT_POST, '@secury', FILTER_SANITIZE_STRING);
        if ($value == @$_SESSION['csrf']) {
            unset($_SESSION['csrf']);
            return 'true';
        } else {
            unset($_SESSION['csrf']);
            return 'false';
        }
    }
}
?>
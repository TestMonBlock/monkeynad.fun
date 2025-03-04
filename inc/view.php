<?php
//session_start();
$id = intval($pg->params[1]);

if (!isset($_SESSION['uid'])) { exit(); }

$nums = $db->query("SELECT * FROM db_surf WHERE id = '".$id."' and balance >= price_click and status = '1' LIMIT 1")->numRows();
if ($nums >= 1){
$list = $db->query("SELECT * FROM db_surf WHERE id = '$id'")->fetchArray();
$price = $list['price_click'];

	$_SESSION['view']['cnt'] = md5(session_id().$list['uid'].$list['id']);
	$_SESSION['view']['id'] = $list['id'];
	$_SESSION['view']['timer'] = $list['timer'];
	$_SESSION['view']['timestart'] = time();

$opt = array('title' => false,'description' => false);

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>View: <?=$list['title'];?></title>
	<link rel="dns-prefetch" href="https://fonts.googleapis.com">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com">
	<link rel="dns-prefetch" href="<?=$list['url']; ?>">
	<link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet">
	<link href="/assets/css/frame.css" rel="stylesheet" type="text/css">
	<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">

	
	<script type="text/javascript">
		var vtime = stattime = <? echo $_SESSION['view']['timer'];?>;
		var cnt = '<? echo $_SESSION['view']['cnt'];?>';
	</script>
	<script type="text/javascript">
		startClock();
	</script>

	<script type="text/javascript">
  function getXMLHTTP() {
    var xmlhtmp=null;
    if(window.XMLHttpRequest) {
      xmlhtmp=new XMLHttpRequest();
    } else if(window.ActiveXObject) {
      xmlhtmp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhtmp;
  }
  var cptfix=0;
  var cptcode=0;
  var focus=1;
  var focuscheck=<?=$list['wind'];?>;
  var time=<?=$list['timer'];?>;
  var TTimer;
  function timerStep() {
    if(time<0) {
      time=0;
      cptfix=1;
      checkClick();
      return;
    }
    else
    {
      if(document.getElementById("timer")!=null) {
        time--;
        document.getElementById("timer").innerHTML=time;
        if(time==0) {
          clearTimeout(TTimer);
          cptfix=1;
          getCaptcha();
        }
        else
        {
          TTimer=setTimeout(timerStep, 1000);
        }
      }
    }
  }

  function hasIsFocus() {
    if(cptfix==0) {
      if(document.hasFocus()) {
        if(focus==0) {
          console.log("ass");
          document.getElementById("check").innerHTML='Wait timer to end:<div class="timer notranslate" id="timer">'+time+'</div>';
          timerStart();
          focus=1;
        }
      }
      else
      {
        if(focus==1) {
          clearTimeout(TTimer);
          document.getElementById("check").innerHTML='<span style="color:#be0525;">The window is not active! Go back to the tab!</span>';
          focus=0;
        }
      }
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeCpt(num) {
    cptcode=num;
    checkClick();
  }

  function loadArguments() {
    var xmlh=getXMLHTTP();
    xmlh.onreadystatechange=function() {
      if(xmlh.readyState==4 && xmlh.status==200) {
        if(xmlh.responseText!='') {
          $("#check").append(xmlh.responseText);
        }
      }
    };
    xmlh.open("GET", "/ajax/surf/coin.php", true);
    xmlh.setRequestHeader("Content-Type", "text/xml")
    xmlh.send(null);
  }

  function getCaptcha() {
    document.getElementById('check').style.display = 'none';
    nextstep(0, cnt);
  }

  function checkFocus() {
    setInterval(hasIsFocus, 100);
  }

  function timerStart() {
    clearTimeout(TTimer);
    TTimer=setTimeout(timerStep, 1000);
  }

  function checkClick() {
    var xmlh=getXMLHTTP();
    xmlh.onreadystatechange=function() {
      if(xmlh.readyState==4 && xmlh.status==200) {
        if(xmlh.responseText!='time_error' && xmlh.responseText!='create_error' && xmlh.responseText!='captcha_error') {
          window.location.href = '';
        }
        else if(xmlh.responseText=='captcha_error') {
          getCaptcha();
        }
        else
        {
          document.getElementById("check").innerHTML='Viewing error! Repeat later';
        }
      }
    };
    //xmlh.open("GET", "", true);
    //xmlh.setRequestHeader("Content-Type", "text/xml")
    //xmlh.send(null);
    document.getElementById("check").innerHTML='Wait, site is loading...';
  }

  setTimeout(function() {
    timerStart();
    if (focuscheck == 1) {
      checkFocus();
    }
    document.getElementById('blockwait').style.display = 'none';
  }, 1000);

  </script>
	</head>
	<body>
<div class="center">
	<div class="table-row">
		<div class="table-col col-left">
			<div class="logo"><?=$config->sitename;?></div>
		</div>
		<div class="table-col col-right">
			<div class="loadwait">
				<div id="check">Wait timer to end:<div class="timer notranslate" id="timer"><?=$_SESSION['view']['timer'];?></div></div>
				<div id="blockverify">
				<div id="blockwait">Wait, site is loading...</div>
				<div id="blocktimer" style="display: none;">
					<form class="clockalert" name="frm" method="post" action="" onsubmit="return false;">
					<input name="clock" size="3" readonly="readonly" type="text" value=""/><br />
					<span></span>
					</form>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>

<iframe class="frame" src="<?=$list['url']; ?>" id="framesite" frameborder="0" scrolling="yes"></iframe>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/assets/js/surf.frame.js"></script>
</body>
</html>
<?php
} else {
	exit('Does not exist or views have ended');
}
?>
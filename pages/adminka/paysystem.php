<?php if(!defined('FastCore')){exit('Opss!');}

ini_set('error_reporting', 1);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 0);

?>
<h3>Управление платежными системами</h3>
<?php

if(isset($_POST['getcurrency'])){
require_once  "./core/PaykassaCurrency.php";

$pairs = [
	"TRX_USDT",
	"DOGE_USDT",
	"LTC_USDT",
	"USDT_USDT",
	"BTC_USDT",
	"DASH_USDT",
	"BNB_USDT",
	"ETH_USDT",
	"BCH_USDT",
	"XRP_USDT",
	"XLM_USDT",
	];

    $res = PaykassaCurrency::getCurrencyPairs($pairs);


    if ($res["error"]) {
        die($res["message"]);
    } else {
        $map_pairs = [];
        array_map(function ($pairs) use (&$map_pairs) {
            foreach ($pairs as $pair => $value) {
                $map_pairs[$pair] = $value;
            }
        }, $res["data"]);
echo'<div class="card m-2 col-lg-4 text-center"><table class="table table-sm table-bordered mb-0">';
        foreach ($map_pairs as $pair => $rate) {
            echo sprintf("<tr><td>Pairs - %s </td><td> %s</td></tr>", $pair, $rate);

	$cursValut = strstr($pair, '_', true); // This is; // чистим все что до

	$db->query("UPDATE db_paysystem SET pairs = '$rate' WHERE currency = '$cursValut'"); // обновляем курс валют

        }
echo'</table><b>ВАЛЮТА САЙТА TRX</b></div>';

    }

}


if(isset($_POST['getcurrency2'])){
require_once  "./core/PaykassaCurrency.php";

$pairs2 = [
	"USDT_TRX",
	"USDT_DOGE",
	"USDT_LTC",
	"USDT_USDT",
	"USDT_BTC",
	"USDT_DASH",
	"USDT_BNB",
	"USDT_ETH",
	"USDT_BCH",
	"USDT_XRP",
	"USDT_XLM",
	];

    $res2 = PaykassaCurrency::getCurrencyPairs($pairs2);


    if ($res2["error"]) {
        die($res2["message"]);
    } else {
        $map_pairs2 = [];
        array_map(function ($pairs2) use (&$map_pairs2) {
            foreach ($pairs2 as $pair2 => $value2) {
                $map_pairs2[$pair2] = $value2;
            }
        }, $res2["data"]);
echo'<div class="card m-2 col-lg-4 text-center"><table class="table table-sm table-bordered mb-0">';
        foreach ($map_pairs2 as $pair2 => $rate2) {
            echo sprintf("<tr><td>Pairs - %s </td><td> %s</td></tr>", $pair2, $rate2);

//	$cursValut2 = mb_substr($pair2, 0, 3); // This is; // чистим все что до

	$cursValut2 = mb_substr($pair2, 5); // This is; // чистим все что до

echo $cursValut2;
	$db->query("UPDATE db_paysystem SET `pairss` = '$rate2' WHERE currency = '$cursValut2'"); // обновляем курс валют

        }

    }
}

?>

<?php 
	if(isset($_POST['update'])){
	$psid = $_POST['psid'];
	$title = htmlspecialchars($_POST['title']);
	$name = htmlspecialchars($_POST['name']);
	$currency = htmlspecialchars($_POST['currency']);
	$pairs = $_POST['pairs'];
	$pairs2 = $_POST['pairss'];
	$minDep = $_POST['mindep'];

	$db->Query("UPDATE db_paysystem SET title = '$title', name = '$name', currency = '$currency', pairs = '$pairs', pairss = '$pairs2', mindep = '$minDep' WHERE id = '$psid'");
	 echo '<div class="alert alert-success">Платежная система обновлена</div>';
	}

	if(isset($_POST['add'])){
	$title = 'VIEW PAYMENT';
	$name = 'NAME PAYMENT';
	$currency = 'USDT';
	$pairs = 1;
	$minDep = 10;

    # Добавить поле
    $db->query('INSERT INTO db_paysystem (title,name,currency,pairs,pairss,mindep) VALUES (?,?,?,?,?)', array($title,$name, $currency, $pairs, $pairs, $minDep)); 
	 echo '<div class="alert alert-success">Платежная система добавлена</div>';
	}
?>

<table class="table table-bordered table-striped text-center bg-white">
<thead>
<tr>
	<th>#</th>
	<th>Вид</th>
	<th>Название</th>
	<th>Валюта</th>
	<th colspan="2">Курс валют <form action="" method="post" class="m-0 p-0 d-inline">
		<button class="btn btn-outline-warning btn-sm" name="getcurrency" type="submit"><i class="fa fa-exchange"></i></button>
	</form> <form action="" method="post" class="m-0 p-0 d-inline">
		<button class="btn btn-outline-danger btn-sm" name="getcurrency2" type="submit"><i class="fa fa-exchange"></i></button>
	</form></th>
	<th>Мин. Депозит</th>
	<th colspan="2">Действие</th>
</tr>
</thead>
<tbody>


<?php

$paySystems = $db->query("SELECT * FROM `db_paysystem` ORDER BY `id` DESC LIMIT 50")->fetchAll();
foreach ($paySystems as $ps) {
?>
<tr>
	<td><?=$ps['id']; ?></td>
	<td>
	<form action="" method="post" class="m-0 p-0"><input type="text" name="title" class="form-control form-control-sm m-0" value="<?=$ps['title']; ?>"/></td>
	<td><input type="text" name="name" class="form-control form-control-sm m-0" value="<?=$ps['name']; ?>"/></td>
	<td><input type="text" name="currency" class="form-control form-control-sm m-0" value="<?=$ps['currency']; ?>"/></td>
	<td><input type="text" name="pairs" class="form-control form-control-sm m-0" value="<?=$ps['pairs']; ?>"/></td>
	<td><input type="text" name="pairss" class="form-control form-control-sm m-0" value="<?=$ps['pairss']; ?>"/></td>
	<td><input type="text" name="mindep" class="form-control form-control-sm m-0" value="<?=$ps['mindep']; ?>"/></td>
	<td><input type="hidden" name="psid" value="<?=$ps['id'];?>" /><button class="btn btn-primary btn-sm" name="update" type="submit">Изменить</button></form></td>
	<td>
	<form action="" method="post" class="m-0 p-0">
		<input type="hidden" name="delete" value="<?=$ps['id'];?>" />
		<button class="btn btn-danger btn-sm" type="submit">X</button>
	</form>
	</td>
</tr>
<?php
	}
?> 
  </tbody>
</table>
<div class="p-2 mb-3">
	<form action="" method="post" class="m-0 p-0">
		<button class="btn btn-success" name="add" type="submit">Добавить новое поле</button>
	</form>
</div>

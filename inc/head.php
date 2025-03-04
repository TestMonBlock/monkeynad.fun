<?php if(!defined('FastCore')){exit();} ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title><?=$config->sitename;?> - {!TITLE!} </title>
<?php if (empty($pg->segment[0] ==='user')) { ?>
  <meta name="description" content="{!DESCRIPTION!}">
<?php 
}
?> 
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/fav/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/img/fav/favicon-16x16.png">
  <link rel="manifest" href="/img/fav/site.webmanifest">

  <link rel="dns-prefetch" href="https://use.fontawesome.com">
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
  <link rel="dns-prefetch" href="https://translate.google.com">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" crossorigin="anonymous">
	<link rel="stylesheet" href="/assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="/assets/css/animate.css">
	<link rel="stylesheet" href="/assets/css/style.css?<?=time();?>"> 

	<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
	<script type="text/javascript" src="/assets/js/wow.min.js"></script>
	<script type="text/javascript" src="/assets/js/js.cookie.min.js"></script>
  <script> new WOW().init(); </script>
</head>
<body> 
  
<div class="heightpage">

<div class="wrapper">
 
<?php
if (!isset($pg->segment[0]) || $pg->segment[0] !== 'user') {
  include('inc/menu-h.php');
} else {
  include('inc/balance.php');
  include('inc/menu.php'); 
}

if (!isset($pg->segment[0]) || empty($pg->segment[0]) || $pg->segment[0] === 'p') {
  include 'welcome.php';
}

?> 


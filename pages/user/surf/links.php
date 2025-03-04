<?php if(!defined('FastCore')){ exit('Oops!');}
$opt['title'] = 'My links';

?>

<div class="text-center">
<a href="/user/surf" class="btn btn-primary text-uppercase"><i class="fa fa-eye"></i> View</a>
<a href="/user/surf/add" class="btn btn-primary text-uppercase"><i class="fa fa-plus"></i> Add link</a>
<a href="/user/surf/links" class="btn btn-primary text-uppercase"><i class="fa fa-list"></i> My ads</a>

</div>


<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!-- Page content -->

<div class="p-2">
<?
$numb =  $db->query("SELECT * FROM `db_surf` WHERE uid = '$uid'")->numRows();
        if($numb < 1) {
		echo '<div class="text-center text-uppercase"><br><br><b>You do not have any active links </b><br>You can add links for advertising.<hr>';
		echo '<a class="btn btn-lg btn-danger" href="/user/surf/add">Add link</a></div>';
	}
?>

<div class="row">
<?
$list = $db->query("SELECT * FROM `db_surf` WHERE uid = '$uid' ORDER BY id DESC")->fetchAll();
foreach ($list as $surf) {

$eye = round($surf['balance']/$surf['price_click'],0);

?>
<div class="col-lg-6 text-center">
<div class="card serf mt-2" id="surf_<?=$surf['id'];?>">
<h3 class="mb-0"><a class="serf-link" href="<?=$surf['url'];?>" target="_blank"><b><?=$surf['title'];?></b></a></h3>
  




<div class="p-1">


	<div class="badge">Views: <b title="Осталось просмотров"><?=$eye;?> <i class="fas fa-eye mr-1" aria-hidden="true"></i></b> <b title="Left view" class="text-danger text-muted"><?=$surf['views'];?> <i class="fas fa-eye-slash" aria-hidden="true"></i></b></div>
	<div class="badge">Price: <b><?=$surf['price_click'];?> </b></div><br>
	
	<div class="badge text-left p-1 m-1" style="font-size: 18px;">Balance: <b><span id="balance"><?=$surf['balance'];?></span></b> 
	<small class="btn-danger px-1" data-bs-toggle="collapse" href="#advsum<?=$surf['id'];?>" aria-expanded="false" style="cursor: pointer;border-radius: 1em;">ADD MONEY</small></div>
	
</div>

<div id="advsum<?=$surf['id'];?>" class="collapse col-lg-6 m-auto">
<form class="balance_add m-auto mb-2" method="POST">Enter the deposit amount:
	<div class="input-group input-group-sm">
	<span class="input-group-text">{!VAL!}</span>
	<input type="hidden" name="surf_id" value="<?=$surf['id']; ?>">
	<input type="text" id="money" name="money" class="form-control col-2" placeholder="minimum: 1.00" value="1.00">
	<input type="hidden" id="type" name="type" value="add_balance">
	<button class="btn btn-success"><b>OK</b></button>
	</div>
</form>
</div>



<hr class="my-1">
<div class="row align-items-center">
  <div class="col text-start">
<form action="" method="POST" class="m-0">
<?
			if($surf['status'] == '1'){
                echo '<button class="btn btn-warning status_surf m-1" href="#" action="2" title="Stop" surf_id="'.$surf['id'].'"><i class="fa fa-pause"></i> STOP</button>';
            }else{
                echo '<button class="btn btn-success status_surf m-1" href="#" action="1" title="Start" surf_id="'.$surf['id'].'"><i class="fa fa-play"></i> START</button>';
            }	
?>
</form>	
   </div>
   <div class="col">

   <form action="/user/surf/edit" style="display: inline;" method="POST">
<input type="hidden" name="surf_id" value="<?=$surf['id']; ?>">
<button class="btn p-0 ps-1 pe-1 text-primary p-0" title="Edit link #<?=$surf['id']; ?>"><i class="fa fa-edit"></i> EDIT</button>
</form>

   </div>
  <div class="col text-end">
<form action="" method="POST" style="display: inline;">
<button surf_id="<?=$surf['id'];?>" href="#" class="btn p-0 ps-1 pe-1 text-danger delete" title="Delete link #<?=$surf['id']; ?>"><i class="fa fa-times"></i> DELETE</button>
</form>
  </div>
 </div>
</div>
</div>
<?
}
?>

</div>
</div>


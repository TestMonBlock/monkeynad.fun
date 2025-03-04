
<!-- Navbar -->
<div class="container-fluid p-2 pb-0">

	<div class="small-btn">
	<a href="/user/logout" type="button" class="exit"><img src="/img/exit.png"></a>
	</div>

      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-lg-0 text-white text-decoration-none">
		<img src="/img/logo.png" alt="logo" style="width: 150px;">
        </a>

        <div class="d-flex flex-wrap col-12 col-lg-auto m-lg-auto justify-content-center">

        <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <div class="balance notranslate"><div class="b-icon"><img src="/img/s3.png"></div>
		  <div class="b-sum"><?=number_format($user['money_p'], 2, ".", "");?> {!VAL!}</div></div> 
        </div>

        <div class="text-end mb-3">
          <a href="/user/insert" type="button" class="btn btn-lg btn-success me-2"><i class="fa fa-arrow-up"></i> DEPOSIT</a>
          <a href="/user/pay" type="button" class="btn btn-lg btn-warning"><i class="fa fa-arrow-down"></i> PAYOUT</a> 
        </div>



		</div>
      </div>
</div>
<?php if(!defined('FastCore')){exit('Opss!');}
# Заголовки
$opt = array(
    'title' => 'Help',
    'description' => 'Contacts for solving issues, as well as for cooperation and advertising.'
    );
?>
<div class="center-title mt-3">
<h2>Contact us</h2>
<p>If you have any inquiries about our work, or you need help, please contact with us support.</p>
</div>


<div class="row row-grid m-lg-2">

<div class="col-lg-6">
                  <div class="p-2 wrapper2 about mb-2" style="border-radius: 1em;">
                    
          <table>
            <tr>
              <td><img src="/img/ask.png" style="width: 52px;"></td>
              <td class="ps-2"><div><h4 class="notranslate text-success mb-0 pb-0"><?=$config->email;?></h4> <span>Email:</span></div></td>
            </tr>
          </table>
                  </div>
          </div>


          <div class="col-lg-6">
                  <div class="p-2 wrapper2 about mb-2" style="border-radius: 1em;">
                    
          <table>
            <tr>
              <td><img src="/img/ask2.png" style="width: 52px;"></td>
              <td class="ps-2"><div><h4 class="notranslate text-success mb-0 pb-0">@<?=$config->telegram;?></h4> <span>Telegram:</span></div></td>
            </tr>
          </table>
                  </div>
          </div>
</div>

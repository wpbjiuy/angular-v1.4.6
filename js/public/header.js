var header = '<div class="fl topLogo"><a href="/"><img src="/images/wpb_logo.png"></a></div>'+
							'<h1 class="fl topTitle">云平台</h1>'+
							'<div class="fr btnSelectBox zIndex100 topUser">'+
								'<span class="btnSelect">'+
									'<i class="icon-user"></i>'+
									'{{username}}'+
								'</span>'+
								'<div class="btnSelectOptions" style="left:auto;right:0">'+
									'<span class="btn_1" ng-click="logout()">退出</span>'+
								'</div>'+
							'</div>'+
							'<div class="clr"></div>';

$('#header').html(header)
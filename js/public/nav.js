var navBoxDom = '<div class="navScrollBar" ng-init="verticalNav = false">'+
									'<p class="navZoom" onclick="setMainRightLeft()" ng-click="cutZoom();verticalNav = !verticalNav"><i class="icon-dots-three-horizontal" ng-class="verticalNav?\'vertical\':\'\'"></i></p>'+
									'<div id="mainNav" class="mainNav"></div>'+
								'</div>'+
								'<div class="mainChildNav">'+
									'<span class="navType" ng-click="ngSetMainRightLeft()"><i class="icon-bookmark"></i></span>'+
									'<h3 class="txtEllipsis ttl"></h3>'+
									'<div class="listBox"></div>'+
								'</div>'
$("#main .main-left").html(navBoxDom)

var navData = [
	{
		ttlName:'产品与服务',
		icon:'icon-chevron-thin-down',
		navs:[
			{
				name:'云服务器 ECS',
				src:'/vzServiceECS',
				ngClick:'',
				icon:'icon-insert-template',
				cnavs:[
					{
						name:'概览',
						ngClick:'',
						src:'/vzServiceECS/#/'
					},
					{
						name:'实列',
						ngClick:'',
						src:'/vzServiceECS/#/list'
					},
					{
						name:'磁盘',
						ngClick:'',
						src:'#'
					},
					{
						name:'快照列表',
						ngClick:'',
						src:'#'
					},
					{
						name:'自动快照策略',
						ngClick:'',
						src:'#'
					},
					{
						name:'镜像',
						ngClick:'',
						src:'#'
					},
					{
						name:'安全组',
						ngClick:'',
						src:'#'
					},
					{
						name:'NAS文件系统管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'标签管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'操作日记',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'云数据库 RDS 版',
				src:'/vzDatabaseRDS',
				ngClick:'',
				icon:'icon-sweden',
				cnavs:[
					{
						name:'实列列表',
						ngClick:'',
						src:'/vzDatabaseRDS/#/list'
					}
				]
			},
			{
				name:'负载均衡',
				src:'#',
				ngClick:'',
				icon:'icon-share',
				cnavs:[
					{
						name:'实列管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'证书管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'标签管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'操作日记',
						ngClick:'',
						src:'#'
					},
					{
						name:'产品文档',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'云数据库 Redis 版',
				src:'#',
				ngClick:'',
				icon:'icon-database',
				cnavs:[
					{
						name:'实例列表',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'域名',
				src:'#',
				ngClick:'',
				icon:'icon-sphere',
				cnavs:[
					{
						name:'域名列表',
						ngClick:'',
						src:'#'
					},
					{
						name:'信息模板',
						ngClick:'',
						src:'#'
					},
					{
						name:'批量操作',
						ngClick:'',
						src:'#'
					},
					{
						name:'操作记录',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'云解析 DNS',
				src:'#',
				ngClick:'',
				icon:'icon-google-drive',
				cnavs:[
					{
						name:'我的云解析',
						ngClick:'',
						src:'#'
					},
					{
						name:'VIP产品',
						ngClick:'',
						src:'#'
					},
					{
						name:'HTTPDNS',
						ngClick:'',
						src:'#'
					},
					{
						name:'操作记录',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'云数据库 MongoDB 版',
				src:'#',
				ngClick:'',
				icon:'icon-delicious',
				cnavs:[
					{
						name:'实例列表',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'服务器安全（安骑士）',
				src:'#',
				ngClick:'',
				icon:'icon-shield',
				cnavs:[
					{
						name:'总览',
						ngClick:'',
						src:'#'
					},
					{
						name:'批量事件处理',
						ngClick:'',
						src:'#'
					},
					{
						name:'主机防火墙',
						ngClick:'',
						src:'#'
					},
					{
						name:'安全运维',
						ngClick:'',
						src:'#'
					},
					{
						name:'设置',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'态势感知',
				src:'#',
				ngClick:'',
				icon:'icon-stats-bars',
				cnavs:[
					{
						name:'态势感知',
						ngClick:'',
						src:'#'
					}
				]
			}
		]
	},// 0
	{
		ttlName:'用户中心',
		icon:'icon-chevron-thin-down',
		navs:[
			{
				name:'账号管理',
				src:'#',
				ngClick:'',
				icon:'icon-user',
				cnavs:[
					{
						name:'安全设置',
						ngClick:'',
						src:'#'
					},
					{
						name:'基本资料',
						ngClick:'',
						src:'#'
					},
					{
						name:'联系人管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'实名认证',
						ngClick:'',
						src:'#'
					},
					{
						name:'账号绑定',
						ngClick:'',
						src:'#'
					},
					{
						name:'学生认证',
						ngClick:'',
						src:'#'
					},
					{
						name:'会员权益（beta）',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'费用中心',
				src:'#',
				ngClick:'',
				icon:'icon-coin-yen',
				cnavs:[
					{
						name:'账户总览',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'续费管理',
				src:'#',
				ngClick:'',
				icon:'icon-time-slot',
				cnavs:[
					{
						name:'云服务器',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'消息中心',
				src:'#',
				ngClick:'',
				icon:'icon-envelop',
				cnavs:[
					{
						name:'站内消息',
						ngClick:'',
						src:'#'
					},
					{
						name:'消息接收管理',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'工单管理',
				src:'#',
				ngClick:'',
				icon:'icon-address-book',
				cnavs:[
					{
						name:'我的工单',
						ngClick:'',
						src:'#'
					},
					{
						name:'提交工单',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'备案管理',
				src:'#',
				ngClick:'',
				icon:'icon-drive',
				cnavs:[
					{
						name:'备案服务号申请',
						ngClick:'',
						src:'#'
					},
					{
						name:'备案服务号管理',
						ngClick:'',
						src:'#'
					},
					{
						name:'备案专区',
						ngClick:'',
						src:'#'
					},
					{
						name:'ICP备案系统',
						ngClick:'',
						src:'#'
					}
				]
			},
			{
				name:'安全管理',
				src:'#',
				ngClick:'',
				icon:'icon-aid-kit',
				cnavs:[
					{
						name:'渗透测试许可',
						ngClick:'',
						src:'#'
					},
					{
						name:'25端口解封',
						ngClick:'',
						src:'#'
					}
				]
			}
		]
	}  // 1
]

var leftNavHtml = createNav(navData)
var mainChildNav = $('.mainChildNav')

$("#mainNav").html(leftNavHtml)

$(".navTtl").click(function(){
	$(this).find('i').toggleClass('icon-chevron-thin-right')
	$(this).next().slideToggle(200)
})

var mainNavLi = $("#mainNav li")
var hvNav
var hvNavTimeout
var mainChildNavWidth = mainChildNav.width()
var isSlideChildNav = false

mainChildNav.find('.navType').click(function(){
	mainChildNav.css({right:-mainChildNavWidth+'px'})
	isSlideChildNav = !isSlideChildNav
	localStorage.isSlideChildNav = isSlideChildNav

	$(this).find('i').toggleClass('icon-bookmarks')

	setMainRightLeft(true)

})

function setMainRightLeft(isNavTypeClick){
	var tmW = isNavTypeClick?180:40

	if($('.main-left').hasClass('closeUp')){
		tmW = isNavTypeClick?40:180
	}
	if(isSlideChildNav){
		$(".main-right").css( 'left',tmW + mainChildNavWidth + 'px' )
		localStorage.mainRightStyleLeft = tmW + mainChildNavWidth
	}else{
		$(".main-right").removeAttr('style')
		localStorage.removeItem('mainRightStyleLeft')
	}
}

mainNavLi.mouseenter(function(){
	navLiHover($(this))
})
mainNavLi.mouseleave(function(){
	if(isSlideChildNav){
		return
	}

	hvNavTimeout = setTimeout(function(){
		mainChildNav.stop().animate({right:'0'},200)
		hvNav = ''
	},100)
})
$('.main-left').mouseleave(function(){
	if(isSlideChildNav){
		hvNav = ''
		if(!$('.mainChildNav ul li.show a.active').length){
			navLiHover($('#mainNav li.navsList a.active').parent())
		}
		return
	}

	mainChildNav.stop().animate({right:'0'},200)
	hvNav = ''
})
mainChildNav.hover(function(){
	clearTimeout(hvNavTimeout)
	if(hvNav) hvNav.addClass('hv')
},function(){
	if(hvNav) hvNav.removeClass('hv')
})

var httpPath = location.pathname+location.hash;
var isSetNavActive = false;
$(".mainNav .mainNavLists ul.navs li.navsList ul li a").each(function(i, item){
	var thsUrl = $(this).attr('href');
	if(httpPath == thsUrl){
		$(this).addClass('active')
		isSetNavActive = true;
		return false;
	}
})

if(!isSetNavActive){
	$('.mainNav .mainNavLists ul.navs li.navsList > a').each(function(i, item){
		var thsUrl = $(this).attr('href');
		if(httpPath.indexOf(thsUrl) == 0){
			$(this).addClass('active').next('ul').find('a:first').addClass('active')
		}
	})
}

var bodyId = $('body').attr('id')

if(localStorage.isZoom == 'true'){
	$('.main-left,.main-right').addClass('closeUp');
}

if(bodyId != 'index' && localStorage.isSlideChildNav === 'true'){
	navLiHover($('#mainNav li.navsList a.active').parents('.navsList'))
	mainChildNav.find('.navType').click()
}

function navLiHover(ths){
	if(hvNav && ths.text() == hvNav.text()) return;
	hvNav = ths
	if(ths.find('.cnavs li').index() != -1){
		var ttl = ths.find('a:first span').text()
		var cnavs = ths.find('.cnavs').clone()

		mainChildNav.find('h3.ttl').text(ttl)
		mainChildNav.find('.listBox').html(cnavs.clone())

		mainChildNav.find('li').click(function(){
			var idx = $(this).index()
			mainChildNav.find('.active').removeClass('active')
			$(this).find('a').addClass('active')

			hvNav.find('ul .active').removeClass('active')
			hvNav.find('ul li:eq('+idx+') a').addClass('active')
		})

		var showTime = 0
		mainChildNav.find('li').each(function(i){
			var ths = $(this)
			setTimeout(function(){
				ths.addClass('show')
			},showTime)
			showTime+=40
		})

		if(isSlideChildNav) return;

		clearTimeout(hvNavTimeout)
		mainChildNav.stop().animate({right:-mainChildNavWidth+'px'},200)
		
	}else{
		mainChildNav.stop().animate({right:'0'},200)

		if(isSlideChildNav) return;
		mainChildNav.html()
	}
}

function createNav(data){
	var navHtml = ''
	for (var i = 0; i < data.length; i++) {
		var navs  = data[i].navs
		navHtml += '<div class="mainNavLists">'+
				   '<a href="javascript:void(0)" class="navTtl"><i class="icon '+data[i].icon+'"></i><span class="txtEllipsis zm">'+data[i].ttlName+'</span><span class="zm cog"><i class="icon-cog"></i></span></a>'+
				   '<ul class="navs">'
		for (var j = 0; j < navs.length; j++) {
			var cnavs = navs[j].cnavs
			var aActive = i+'-'+j+' === aActive ? active : ""';

			navHtml += '<li class="txtEllipsis navsList"><a href="'+navs[j].src+'" ng-click="'+navs[j].ngClick+'" ng-class="\''+i+'-'+j+'\' == aActive ? \'active\' : \'\'"><i class="icon '+navs[j].icon+'"></i><span class="zm">'+navs[j].name+'</span></a><ul class="cnavs">'

			if(cnavs && cnavs.length){
				for (var k = 0; k < cnavs.length; k++) {
					navHtml += '<li class="cnavsList"><a href="'+cnavs[k].src+'" ng-click="'+cnavs[k].ngClick+'" ng-class="\''+i+'-'+j+'-'+k+'\' == bActive ? \'active\' : \'\'">'+cnavs[k].name+'<b></b></a></li>'
				}
			}

			navHtml += '</ul></li>'
		}
		navHtml += '</ul></div>'
	}
	return navHtml
}
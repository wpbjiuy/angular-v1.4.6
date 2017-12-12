app.controller('mainRightController', ['$scope', '$http', '$window', '$location', 'varData', 'addhtml', function(s, h, w, $location, d, addhtml){
	s.rightHtml = d.rightHtml
	s.$onRootScope('setRightHtml', function(e,h){
		s.rightHtml = h+'.html'
	});

	s.topTtlW = $('.ztTop .ttl').width()+40;

	s.serchSelectdata = [
				{txt:'aaaa', v:'0'},
				{txt:'bnnn', v:'1'}
			]

	// 查询 this directive in the 'ngApp/ngDirective.js'
	s.$emit('setSearchUrl', '/searchUrl')
	s.search = function(searchData){
		console.log(searchData)
	}

	// 给当前导航设置样式
	s.$emit('setAAcitve', '0-0')
	// s.$emit('setBAcitve', '0-0-0')
	var hash = $location.url()
	
	// $(".mainNav .mainNavLists ul.navs li.navsList:eq(0) ul li a").each(function(i, item){
	// 	var thsUrl = $(this).attr('href');
	// 	if(hash == thsUrl.slice(thsUrl.lastIndexOf('/'))){
	// 		s.$emit('setBAcitve', '0-0-'+i)
	// 		return false;
	// 	}
	// })

	s.tbItems = [
		{name:'jiuy', age:'27', sex:'man'},
		{name:'joge1', age:'24', sex:'woman'},
		{name:'joge2', age:'24', sex:'woman'},
		{name:'joge3', age:'24', sex:'woman'},
		{name:'joge4', age:'24', sex:'woman'},
		{name:'joge5', age:'24', sex:'woman'},
		{name:'joge6', age:'24', sex:'woman'},
		{name:'joge7', age:'24', sex:'woman'},
		{name:'joge8', age:'24', sex:'woman'},
		{name:'joge9', age:'24', sex:'woman'}
	]
	s.tbItemsBy = 'age'  //排序参数
	s.tbItemsByTrue = false  //降序
	s.setOrderBy = function(byName){
		s.tbItemsBy = byName
		s.tbItemsByTrue = !s.tbItemsByTrue
	}

	s.changeContent = 'hahha'
	var textarea1_html = createHtml.fnEditInputHtml('新建数据', [
		[
			{
				name:'姓名',
				type:'text',
				placeholder:'请输入您的姓名',
				dataName:'name',
				required:true
			},
			{
				name:'年龄',
				type:'number',
				placeholder:'请输入您的年龄',
				dataName:'age',
				required:true,
				verify:'number'
			}
		],
		[
			{
				name:'请选择性别:',
				type:'radio',
				dataName:'sex',
				slcAr:[
					{name:'男',value:'man',checked:'checked'},
					{name:'女',value:'woman'}
				]
			}
		]
	])

	s.createData = function(){
		addhtml.edit(s,textarea1_html,function(data){
			console.log(data)
			s.tbItems.push(data)
			s.closeAddElement()  //关闭编辑弹窗  this function in the yun/js/ngApp/provider.js
		})
	}

	s.edit = function(item,idx){console.log(item)
		addhtml.edit(s,textarea1_html,function(data){
			var n = s.tbItems.indexOf(item)
			s.tbItems[n] = data
			s.closeAddElement()  //关闭编辑弹窗  this function in the yun/js/ngApp/provider.js
		})
		fndata.setData($('.fixed2 .editFrom'), item)
	}

	s.remove = function(item,idx){
		var n = s.tbItems.indexOf(item)
		s.tbItems.splice(n,1)
	}

	s.goData = function(item){
		console.log(item)
	}

	if(!$('.pageBox:last').children().length){
		pageOnSet($('.pageBox:last'),100,function(num){
			console.log(num)
		})
	}

	h.get('/')
		.success(function(data, status, header, config){
			console.log(status)
		})
		.error(function(data, status, header, config){
			console.log(status)
		})
	h.get('/demo')
		.success(function(data, status, header, config){
			console.log(status)
		})
		.error(function(data, status, header, config){
			console.log(status)
		})
	
}])
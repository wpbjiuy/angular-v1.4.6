app.controller('mainRightController', ['$scope', '$http', '$window', 'varData', 'addhtml', function(s, h, w, d, addhtml){
	s.rightHtml = d.rightHtml
	s.$onRootScope('setRightHtml', function(e,h){
		s.rightHtml = h+'.html'
	});

	s.tbItems = [
		{name:'jiuy', age:'27', man:'man'},
		{name:'joge1', age:'24', man:'wuman'},
		{name:'joge2', age:'24', man:'wuman'},
		{name:'joge3', age:'24', man:'wuman'},
		{name:'joge4', age:'24', man:'wuman'},
		{name:'joge5', age:'24', man:'wuman'},
		{name:'joge6', age:'24', man:'wuman'},
		{name:'joge7', age:'24', man:'wuman'},
		{name:'joge8', age:'24', man:'wuman'},
		{name:'joge9', age:'24', man:'wuman'}
	]
	s.tbItemsBy = 'age'  //排序参数
	s.tbItemsByTrue = false  //降序
	s.setOrderBy = function(byName){
		s.tbItemsBy = byName
		s.tbItemsByTrue = !s.tbItemsByTrue
	}

	s.changeContent = 'hahha'
	var textarea1_html = createHtml.fnEditInputHtml('编辑维护更改记录', '提交更改', [
		[
			{
				name:'变更内容',
				html:'<textarea class="bdcol borderBox textarea1" ng-model="changeContent"></textarea>'
			}
		]
	])

	s.createData = function(){
		addhtml.edit(s,textarea1_html)
	}

	s.edit = function(item,idx){
		console.log(item)
	}

	s.remove = function(item,idx){
		var n = s.tbItems.indexOf(item)
		s.tbItems.splice(n,1)
	}

	if(!$('.pageBox:last').children().length){
		pageOnSet($('.pageBox:last'),100,function(num){
			console.log(num)
		})
	}

	var products = [
		{
			name:'弹性计算',
			content:[
				{
					name:'云服务器 ECS',
					src:'/ServiceECS',
					ngClick:'',
					icon:'icon-insert-template'
				}
			]
		},
		{
			name:'数据库',
			content:[
				{
					name:'云数据库 RDS 版',
					url:'#',
					icon:'icon-sweden'
				},
				{
					name:'云数据库 MongoDB 版',
					url:'#',
					icon:'icon-sweden'
				}
			]
		},
		{
			name:'存储与CDN',
			content:[
				{
					name:'表格存储',
					url:'#',
					icon:'icon-sweden'
				},
				{
					name:'CDN',
					url:'#',
					icon:'icon-sweden'
				}
			]
		}
	]

	var caluTh = [0,0,0]
	var caluH = 30
	s.productInfos = [ [], [], [] ]

	for (var i = 0; i < products.length; i++) {

		var initH = 30 + 30*products[i].content.length

		var minCl = caluTh.indexOf( Math.min.apply(Math,caluTh) )

		caluTh[minCl] = caluTh[minCl]+initH

		s.productInfos[minCl].push(products[i])
	}

	console.log(s.productInfo)
	console.log(caluTh)

}])

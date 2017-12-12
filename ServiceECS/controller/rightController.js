app.controller('mainRightController', ['$scope', '$http', '$window', '$location', 'varData', 'addhtml', function(s, h, w, $location, d, addhtml){
	s.rightHtml = d.rightHtml
	s.$onRootScope('setRightHtml', function(e,h){
		s.rightHtml = h+'.html'
	});

	s.$emit('setAAcitve', '0-0')
	s.$emit('setBAcitve', '0-0-0')
	var hash = $location.url()
	
	$(".mainNav .mainNavLists ul.navs li.navsList:eq(0) ul li a").each(function(i, item){
		var thsUrl = $(this).attr('href');
		if(hash == thsUrl.slice(thsUrl.lastIndexOf('/'))){
			s.$emit('setBAcitve', '0-0-'+i)
			return false;
		}
	})

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
	
}])

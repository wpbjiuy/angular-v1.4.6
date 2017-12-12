app.controller('zmController', ['$scope', '$http', '$window', 'varData', 'addhtml', function(s, h, w, d, addhtml){
	//addhtml.edit(s,'')
	s.isZoom = false
	if(localStorage.isZoom  === 'true'){
		s.isZoom = true
	}
	s.cutZoom = function(){
		s.isZoom = !s.isZoom
		localStorage.isZoom = s.isZoom 
	}

	if(localStorage.mainRightStyleLeft){
		s.mainRightStyleLeft = {'left':localStorage.mainRightStyleLeft+'px'}
	}

	s.ngSetMainRightLeft = function(){
		s.mainRightStyleLeft = {'left':localStorage.mainRightStyleLeft+'px'}
	}

	s.searchUrl = '/'         //搜索 请求地址
	s.$onRootScope('setSearchUrl', function(e, data){
		s.searchUrl = data
	})

	s.zArea = ['美国西部 1 (硅谷)', '华东 1', '华东 2', '亚太东南 1 (新加坡)', '华北 1', '华南 1', '华北 2', '美国东部 1 (弗吉尼亚)', '香港', 
		'欧洲中部 1（法兰克福）', '亚太东北 1（日本）']

	s.rightLoad = function(){
		console.log(0123)
	}

	s.$on('$viewContentLoaded', function(){
		console.log('loaded')
	})

}])

app.controller('headerController', ['$scope', '$http', '$window', 'varData', function(s, h, w, d){
	s.headerHtml = '/views/headerHtml.html'
	s.username = 'admin'
	s.logout = function(){
		console.log('退出')
	}
}])

app.controller('mainController', ['$scope', '$http', '$window', 'varData', function(s, h, w, d){
	
}])

app.controller('tableController', ['$scope', '$http', '$window', 'varData', function(s, h, w, d){
	
}])
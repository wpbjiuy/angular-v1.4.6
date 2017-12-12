app.directive('areaBtn', function(){
	return {
		restrict: 'EA',
		replace: true,
		template:'<div class="areaBtn"><span class="btn_2" ng-repeat="item in zArea" ng-click="goData(item)">{{item}}</span></div>'
	}
})

app.directive('search', function(){
	return {
		restrict: 'EA',
		replace: true,
		template:'<div class="searchBox"> <select class="gh" ng-model="searchData.key" ng-options="x.txt for x in serchSelectdata"><option value="">--请选择--</option></select>'
			+' <input class="gh gw" type="text" ng-model="searchData.value" placeholder="请输入搜索内容" />'
			+' <span class="btn_1 gh go" ng-click="go()">搜索</span> </div>',
		link: function(scope, element, attrs, transclude){
			scope.searchData = {
				key: '',
				value: ''
			}
			
			scope.go = function(){
				console.log(scope.searchData)
				console.log(scope.searchUrl)
				scope.search(scope.searchData)
			}
		}
	}
})
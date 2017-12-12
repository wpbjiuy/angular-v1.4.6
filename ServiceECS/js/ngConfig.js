app.config(['$provide', '$routeProvider', function($provide, $routeProvider){
	//处理控制器之间传值
	$provide.decorator('$rootScope', ['$delegate', function($delegate){
		Object.defineProperty($delegate.constructor.prototype, '$onRootScope', { 
			value: function(name, listener){ 
				var unsubscribe = $delegate.$on(name, listener); 
				this.$on('$destroy', unsubscribe); return unsubscribe; 
			},
			enumerable: false
		});
		return $delegate;
	}]);

	$routeProvider.
	when('/', {
		templateUrl:'views/home.html',
		controller:'mainRightController'
	}).
	when('/list', {
		templateUrl:'views/list.html',
		controller:'mainRightController'	
	}).
	when('/list1', {
		templateUrl:'views/list1.html',
		controller:'mainRightController'	
	}).
	otherwise({
		redirectTo:'/'
	})
}]);

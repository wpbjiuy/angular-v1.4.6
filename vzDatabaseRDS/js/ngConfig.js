app.config(['$provide', '$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', 
	function($provide, $routeProvider, $controllerProvider, $compileProvider, $filterProvider){
	app.register = {
	    controller: $controllerProvider.register,
	    directive: $compileProvider.directive,
	    filter: $filterProvider.register,
	    factory: $provide.factory,
	    service: $provide.service
	};
	var v = 1314
	app.asyncjs = function (js) {console.log(js)
        return ["$q", "$route", "$rootScope", function ($q, $route, $rootScope) {
            var deferred = $q.defer();
            var dependencies = js;
            if (angular.isArray(dependencies)) {
                for (var i = 0; i < dependencies.length; i++) {
                    dependencies[i] += "?v=" + v;
                }
            } else {
                dependencies += "?v=" + v;//v是版本号
            }
            $script(dependencies, function () {
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise;
        }];
    }

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
		templateUrl:'views/list.html',
		controller:'mainRightController'
	}).
	when('/list', {
		templateUrl:'views/list.html',
		controller:'mainRightController'	
	}).
	otherwise({
		redirectTo:'/'
	})

	/*$routeProvider.
	when('/:plugin', {
		templateUrl:function(rd){
			return 'views/'+rd.plugin+'.html'
		},
		resolve: {
			load: app.asyncjs('controller/rightController.js')
		}
	}).
	otherwise({
		redirectTo:'/home'
	})*/
}]);
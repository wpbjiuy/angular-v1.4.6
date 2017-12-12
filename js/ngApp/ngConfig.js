app.config(['$provide', '$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', 
	function($provide, $routeProvider, $controllerProvider, $compileProvider, $filterProvider){
	app.register = {
	    controller: $controllerProvider.register,
	    directive: $compileProvider.directive,
	    filter: $filterProvider.register,
	    factory: $provide.factory,
	    service: $provide.service
	};

	app.asyncjs = function (js) {
        return ["$q", "$route", "$rootScope", function ($q, $route, $rootScope) {
            var deferred = $q.defer();
            var dependencies = js;
            if (Array.isArray(dependencies)) {
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
		templateUrl:'/views/rightHtml.html',
		controller:'mainRightController'
	}).
	otherwise({
		redirectTo:'/'
	})
}]);

var app = angular.module('app', ['ngRoute','ngAnimate'])

//定义全局数据 >> 用于控制器间的通信
app.factory('varData', function(){
	var data = {
		rightHtml:'views/rightHtml.html'
	}
	return data
})

app.factory('HttpInterceptor', ['$q', HttpInterceptor])

var readingList = 0
function HttpInterceptor($q){
	return {
	  request: function(config){
	  	// config.headers.authorization = 'Bearer fdsafdsfsa'
	  	readingList++
	  	if(!$('.readingBox').length){
	  		$("header").append('<div class="readingBox bg_reading"></div>')
	  	}
	    $(".readingBox").stop().animate({width:'90%'},5000*readingList)
	    return config;
	  },
	  requestError: function(err){
	    return $q.reject(err);
	  },
	  response: function(res){
	  	readingList--
	  	if(!readingList){
	  		removeLoadingDom(res)
	  	}
	    return res;
	  },
	  responseError: function(err){
	    if(-1 === err.status) {
	      // 远程服务器无响应
	    } else if(500 === err.status) {
	      // 处理各类自定义错误
	    } else if(501 === err.status) {
	      // ...
	    }
	    removeLoadingDom()
	    return $q.reject(err);
	  }
	};
	function removeLoadingDom(res){
	  $(".readingBox").stop().animate({width:'100%'},100,function(){
	    var removDom = $(this)
	    setTimeout(function(){
	    	removDom.fadeOut(100, function(){
	    		removDom.remove()
	    	})
	    },100)
	  })
	}
}

// 添加对应的 Interceptors
app.config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push(HttpInterceptor);
}]);
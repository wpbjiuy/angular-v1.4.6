app.service('addhtml', ['$compile', function($compile){
	this.edit = function($scope,html,callback){
		var _html = '<div class="fixed fixed2" ng-keydown="sbmKeydown($event)">'+
						'<div class="fixed_edit2">'+
							html+
							'<div class="etxt sbmBox">'+
								'<input class="sbm" type="button" value="确认" ng-click="sbm()" />'+
								'<input class="cancel" ng-click="closeAddElement()" type="button" value="取消" />'+
							'</div>'
						'</div>'+
					'</div>'
		var template = angular.element(_html)
		var mobileDialogElement = $compile(template)($scope)

		angular.element('#main').after(mobileDialogElement)
		
		$('.fixed2 .editFrom').slideDown(200)

		$scope.closeAddElement = function(){ //删除添加的元素
			$('.fixed2 .editFrom').slideUp(200,function(){
				if(mobileDialogElement)
					mobileDialogElement.remove()
			})
		}

		$scope.sbm = function(){
			var editFrom = $('.fixed2 .editFrom')
			var sbmData = fndata.getData(editFrom)
			var verify = ER.fnVerify(editFrom)

			if(!verify.isOk) return;

			if(callback && angular.isFunction(callback)){
				callback(sbmData)
			}
		}

		$scope.sbmKeydown = function(e,d){
			if(e.keyCode == 13){
				$scope.sbm()
			}
		}
	}
}])
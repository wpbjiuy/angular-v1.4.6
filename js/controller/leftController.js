app.controller('mainLeftController', ['$scope', '$http', '$window', 'varData', function(s, h, w, d){
	s.leftHtml = '/views/leftHtml.html'
	s.setRightHtml = function(h){
		d.rightHtml = h+'.html'
		s.$emit('setRightHtml', h);
	}
	s.aActive = ''
	s.bAcitve = ''
	s.$onRootScope('setAAcitve',function(e,data){
		s.aActive = data
	})
	s.$onRootScope('setBAcitve',function(e,data){
		s.bActive = data
	})
}])
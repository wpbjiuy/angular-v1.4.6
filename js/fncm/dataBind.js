/**
* data-bind = dataBind.strSet.string
**/

var dataBind = {}

dataBind.doms = []

dataBind.strSet = {}

dataBind.isVal = ['INPUT','TEXTAREA']

dataBind.run = function(s){
	var domsIdx = 0
	for(var _d in s){
		var _m = $('[data-bind="'+_d+'"]')
		this.doms.push(_m)

		if(_m.length > 1){
			_m.each(function(i,item){
				if( dataBind.setValue($(this),s[_d]) ) dataBind.keyVal($(this), domsIdx)
			})
		}else{
			if( dataBind.setValue(_m.eq(0),s[_d]) ) dataBind.keyVal(m, domsIdx)
		}

		domsIdx++
	}
}

dataBind.keyVal = function(m, idx){
	var _m = this.doms[idx]
	m.keyup(function(e){
		var ths = $(this)
		var v = ths.val()

		if(_m.length > 1){
			_m.each(function(i,item){
				dataBind.setValue($(this),v)
			})
		}else{
			dataBind.setValue(_m.eq(0),v)
		}
	})
}

dataBind.app = function(f){
	f(this.strSet)
	this.run(this.strSet)
}

dataBind.mTypeIsVal = function(m){
	var t = m.prop('tagName')
	if(this.isVal.indexOf(t) != -1)
		return true
	else
		return false
}

dataBind.setValue = function(m,t){
	if(this.mTypeIsVal(m)){
		m.val(t)
		return true
	}else{
		m.text(t)
		return false
	}
}

//格外添加进行input动态数据绑定其它非input的内容, mt => 数据名称,t => 与input数据绑定
dataBind.atKeyVal = function(mt,t){
	var _m = $('[data-bind="'+mt+'"]')
	var inputM = $('input[data-bind="'+mt+'"]')

	_m.each(function(i,item){
		var ths = $(this)
		var v = ths.text()||ths.val()
		if(v && v != t){
			_m.each(function(){
				dataBind.setValue($(this),v)
			})
			return false
		}
	})

	if(!inputM.length) return;

	inputM.focus(function(){
		$(this).addClass('isEdit')
	})
	inputM.blur(function(){
		$(this).removeClass('isEdit')
	})

	inputM.unbind('keyup')
	inputM.keyup(function(e){
		var ths = $(this)
		var v = ths.val() || t

		if(_m.length > 1){
			_m.each(function(i,item){
				if(!$(this).hasClass('isEdit'))
					dataBind.setValue($(this),v)
			})
		}else{
			dataBind.setValue(_m.eq(0),v)
		}
	})
}

// dataBind.app(function(s){
// 	s.svName = 'a'
// })
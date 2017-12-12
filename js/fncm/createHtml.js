var createHtml = {}
/*--提示弹窗--*/
createHtml.fnAlert = function (txt,hint,callback){
	var hintTxt = hint ? '' : '!';
	var icon = '';
	if(hint == 'ok'){
		icon = ' icon-checkmark';
	}else if(hint == 'err'){
		icon = ' icon-cross';
	}
	var atHtml = '<div class="fixed fixedAt">'+
					'<div class="fixed_bg"></div>'+
				 	'<div class="atInfoBox">'+
				 		'<div class="atPoRt">'+
				 			'<a class="icon-cross cancel" href="javascript:void(0)"></a>'+
				 			'<div class="info">'+
				 				'<div class="fl radius_a hintImg'+icon+'">'+hintTxt+'</div>'+
				 				'<div class="fl wordWrap txt"><p>'+txt+'</p></div>'+
				 				'<div class="clr"></div>'+
				 			'</div>'+
				 			'<div class="btns"><button class="cancel radius_5" autofocus="autofocus">确 认</button></div>'+
				 		'</div>'
				 	'</div>'+
				 '</div>';
	$('body').append(atHtml);
	var atTxt = $(".fixedAt .txt");
	var txtTop = ($('.fixedAt .info').height()-atTxt.height())/2;
	atTxt.css('marginTop',txtTop+'px');
	$('.fixedAt .cancel').click(function(){
		$(this).parents('.fixed').fadeOut(200,function(){
			$(this).remove()
			if(callback){
				callback()
			}
		});
	})
	$('.fixedAt .btns button').focus()
}

/*--确认弹窗--*/
createHtml.fnConfirm = function (txt,callback){
	var atHtml = '<div class="fixed fixedAt">'+
					'<div class="fixed_bg"></div>'+
				 	'<div class="atInfoBox">'+
				 		'<div class="atPoRt">'+
				 			'<a class="icon-cross cancel" href="javascript:void(0)"></a>'+
				 			'<div class="info">'+
				 				'<div class="fl radius_a hintImg">？</div>'+
				 				'<div class="fl wordWrap txt"><p>'+txt+'</p></div>'+
				 				'<div class="clr"></div>'+
				 			'</div>'+
				 			'<div class="btns"><button class="ok radius_5">确 认</button> <button class="cancel radius_5">取 消</button></div>'+
				 		'</div>'
				 	'</div>'+
				 '</div>';
	$('body').append(atHtml);
	var atTxt = $(".fixedAt .txt");
	var txtTop = ($('.fixedAt .info').height()-atTxt.height())/2;
	atTxt.css('marginTop',txtTop+'px');
	$('.fixedAt .cancel').click(function(){
		$(this).parents('.fixed').fadeOut(200);
	});
	$('.fixedAt .ok').click(function(){
		$(this).parents('.fixed').fadeOut(200);
		callback();
	});
}

/*--提示小标--*/
createHtml.fnFixedHint = function (txt){
	$(".fixedHint").remove();
	var hintHtml =  '<div class="fixedHint rtx3d">'+
						'<a href="javascript:void(0)" class="icon-cross cancel"></a>'+
						'<div>'+
							'<div class="fl fixedIcon">!</div>'+
							'<div class="fl fixedInfos">'+txt+'</div>'+
							'<div class="clr"></div>'+
						'</div>'+
					'</div>';
	$('body').append(hintHtml);
	$(".fixedHint .cancel").click(cancel)
	var fiedHintIcon = $(".fixedHint .fixedIcon");
	var iconMrTop = (fiedHintIcon.parent().height()-fiedHintIcon.height())/2;
	fiedHintIcon.css('marginTop',iconMrTop+'px');

	var fixedHint = $(".fixedHint");
	function cancel() {
		fixedHint.stop().animate({opacity:0}, 500, function () {
			$(this).remove();
		})
	}

	var itz = setTimeout(cancel,5000);

	fixedHint.unbind('hover');
	fixedHint.hover(function(){
		clearTimeout(itz);
		fixedHint.stop().animate({opacity:'1'});
	},function(){
		itz = setTimeout(cancel,1000);
	})
}

/**用于生成弹窗编辑框HTML
*ttl => 标题
*data =>[[obj,obj],[obj,obj]] obj >> {
	name:'名称',
	type:'类型',
	placeholder:'提示',
	dataName:'数据名称',
	style:'样式',
	verify:'验证', 
	fix:'是否提交数据',
	eId:'输入层ID',
	slcId:'select ID',
	html:'html 字符串',
	required:'是否必填'
}
**/
createHtml.fnEditInputHtml = function (ttl, data){
	var _html = '<h2 class="ttl">'+ttl+'<a href="javascript:void(0)" class="fr icon-cross fixed_cancel2" ng-click="closeAddElement()"></a></h2>'+
				'<div class="editFrom">'

	for (var i = 0; i < data.length; i++) {
		var dt = data[i];
		if(!(dt instanceof Array)){
			if(dt.isChunk){
				_html += '<div class="chunk">'

				if(dt.TheDivider) {
					_html += '<div class="TheDivider"><span class="test">'+dt.TheDivider+'</span></div>'
				}

				for (var j = 0; j < dt.content.length; j++) {
					mainHtml(dt.content[j])
				}	

				_html += '</div>'
			}else{
				_html += '<div class="etxt2" data-name="'+dt.dataName+'" data-type="'+dt.dataType+'">'+dt.html+'</div>'
			}
		}else{
			mainHtml(dt)
		}	
	}

	function mainHtml(itemData){
		_html += '<div class="etxt2">'

		for (var i = 0; i < itemData.length; i++) {
			var f = ''
			if(itemData.length != 1){
				f = i==0?'fl':'fr'
			}else{
				f = 'one'
			}
			var d = itemData[i];
			var editCc = '';
			if(d.html){
				editCc = d.html
			}else{
				if(d.type == 'select'){
					editCc = '<select class="bdcol" id="'+(d.slcId?d.slcId:'')+'" data-name="'+d.dataName+'">'
					if(d.slcAr.length){
						for (var j = 0; j < d.slcAr.length; j++) {
							editCc += '<option value="'+d.slcAr[j].value+'">'+d.slcAr[j].name+'</option>'
						}
					}
					editCc += '</select>'
				}else if(d.type == 'radio'){
					if(d.slcAr.length){
						for (var j = 0; j < d.slcAr.length; j++) {
							editCc += '<label><input type="radio" value="'+d.slcAr[j].value+'" name="'+d.dataName+'" data-name="'+d.dataName+'" '+(d.slcAr[j].checked||'')+' />'+d.slcAr[j].name+'</label>'
						}
					}
				}else{
					editCc = '<input class="bdcol borderBox" type="'+d.type+'" placeholder="'+(d.placeholder||'请输入'+d.name)+'" data-name="'+d.dataName+'"'+
					 	(d.required?' data-required="true"':'')+(d.verify?' data-verify="'+d.verify+'"':'')+(d.fix?' data-fix="true"':'')+' />'
				}
			}
			_html += '<div class="'+f+' etxte"'+(d.style?' style="'+d.style+'"':'')+(d.dataTypeZ?' data-type="'+d.dataTypeZ+'"':'')+(d.eId?' id="'+d.eId+'"':'')+'>'+
						 '<p class="'+(d.type=='radio'?'fl tn ':'w2 txtEllipsis ')+'txtname">'+d.name+'</p>'+
						 '<div class="w2">'+editCc+'</div>'+
					'</div>'
		}

		_html += '<div class="clr"></div></div>'
	}

	return _html
}

/**
*生成数据表格
*/
createHtml.fnCreateTbList = function (obj,callback){
	var th = obj.th,    //头标
		data = obj.data,  //数据
		dataId = obj.dataId || 'id',
		csle = obj.csle,   //控制器、操作
		tbCss = obj.tbCss,  //表格样式
		addDom = obj.addDom,  //表格添加层
		getData = obj.getData   //进行数据请求
	
	var pageDom,page,totalPages,getUrl,getSetting

	var isAddPage = true
	var tblistHtml = '<table cellspacing="0" cellpadding="0" class="'+tbCss+'"><tr>'

	for (var i = 0; i < th.length; i++) {
		if(!csle && i == th.length-1){
			tblistHtml += '<th class="last">'+th[i].txt+'</th>'	
		}else{
			tblistHtml += '<th>'+th[i].txt+'</th>'	
		}
	}
	if(csle){ tblistHtml += '<th class="last">操作</th>' }
	tblistHtml += '</tr>'

	tblistHtml += '</table>'	
	addDom.html(tblistHtml)

	if(getData){
		pageDom = getData.pageDom  //添加翻页层
		page = getData.page   //翻页参数
		totalPages = getData.totalPage  //获取翻页总数
		getUrl = getData.url  //数据请求地址
		getSetting = getData.setting  //数据请求参数

		fnGetData()
	}else if(data){
		addListCc(data)
	}

	function fnGetData(num,isPage){
		if(num) getSetting[page] = num
		$.get(getUrl, getSetting, function(data, status, xhr){
			if(xhr.status == 200){console.log(data)
				if(getData.dataPath){
					if(callback) callback(data[getData.dataPath])
					addListCc(data[getData.dataPath], isPage)
				}else{
					if(callback) callback(data)
					addListCc(data, isPage)
				}
				if(isAddPage){
					isAddPage = false
					pageOnSet(pageDom, data[totalPages], function(num){
						fnGetData(num);
					});				
				}
			}else{
				fnAlert('数据请求失败！', 'err')
			}
		})
	}

	function addListCc(data, isPage){
		if(!data.length) return;
		var _html = '';
		addDom.find('table tr:gt(0)').remove()

		$.each(data, function(i, item){
			item.dataPath = i
			_html += '<tr>'
			for (var j = 0; j < th.length; j++) {
				if(!csle && j == th.length-1){
					_html += '<td class="last"><p>'+(item[th[j].name] === null ? '' : item[th[j].name])+'</p></td>'	
				}else{
					_html += '<td><p>'+(item[th[j].name] === null ? '' : item[th[j].name])+'</p></td>'	
				}
			}
			if(csle){
				_html += '<td class="last borderBox cslBox">'+
							  '<a class="icon-dots-three-vertical cslShow" href="javascript:void(0)"></a>'+
							  '<div class="listhide cslList" style="*width:128px;">'
				for (var n = 0; n < csle.length; n++) {
					if(!csle[n].isAdd || item[csle[n].isAdd]) {
						_html += '<a class="'+csle[n].css+'" href="javascript:void(0)" data-id='+item[dataId]+
									  ' data-path='+item.dataPath+' onclick="'+csle[n].fnCk+'">'+
									  '<i class="'+csle[n].icon+'"></i>'+csle[n].txt+'</a>'
					}
				}
				_html += '</div></td>'
			}
			_html += '</tr>'
		})

		addDom.find('table').append(_html)

		if(csle) fnBtnShowOperation(addDom)
	}
}

/**
*create: select >> option
* d => data，t => text， v => value
*/
createHtml.fnCreateSelectOption = function (d,t,v){
	var h = ''
	$.each(d,function(i,m){
		h += '<option value="'+m[v||t]+'>'+m[t]+'"</option>'
	})
	return h
}
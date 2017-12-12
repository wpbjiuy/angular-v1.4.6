var dp_api_server = 'http://localhost:9090';

var dp_api_server_addr = [];

/*--列出所有的模块接口。  get => 显示 ， post => 新建 ，current/id : get => 查询 id 的这个模块 ,  put => 更新 id 的这个模块 , DELETE => 删除 id 的这个模块--*/


/*--给有属性dataName 的 dom元素赋值，只限text()方法--*/
function setData(dom,dataName,data){
	dom.each(function(){
		var ds = $(this).attr(dataName);
		if(ds){
			if(ds.indexOf('-') != -1){
				var arrds = ds.split('-');
				if(data[arrds[0]][arrds[1]]){
					$(this).text(data[arrds[0]][arrds[1]]);
				}
			}else{
				if(data[ds]){
					$(this).text(data[ds]);
				}
			}
		}	
	});
}

/*--获取有属性dataName 的 dom元素内容并返回一个对象，只限text()方法--*/
function getData(dom,dataName) {
	var obj = {};
	dom.each(function(){
		if(!$(this).attr('data-fix')){
			var ds = $(this).attr(dataName);
			if(ds.indexOf('-') != -1){
				var arrds = ds.split('-');
				var objds = {};
				objds[arrds[1]] = $(this).text();
				obj[arrds[0]] = objds;
			}else{
				obj[ds] = $(this).text();
			}
		}
	});
	return obj;
}

/*--获取http参数--*/
function getHttpParam(param){
	var httpSearch = location.search;
	var paramVal;
	if(httpSearch.indexOf('&') == -1){
		if(httpSearch.indexOf(param) != -1){
			var pl = httpSearch.indexOf('=');
			paramVal = httpSearch.slice(pl+1);
		}
	}else{
		var arr = httpSearch.split('&');
		for(var i=0; i<arr.length; i++){
			if(arr[i].indexOf(param) != -1){
				var pl = arr[i].indexOf('=');
				paramVal = arr[i].slice(pl+1);
				break;
			}
		}
	}
	return paramVal;
}

/*--单选按钮事件,给回调函数返回id--*/
function redioCkd(chkDomBox,callback){
	var ckRd = chkDomBox.find('input[type="radio"]');
	ckRd.click(function(){
		callback($(this).attr('id'),$(this));
	})
}

/*--判断下拉框位置 true=bottom,false=top--*/
function fnSelectPosition(ths,ctHg){
	var thsWdBm = $(window).height()-( ths.height()+( ths.offset().top-$(document).scrollTop() ) );  //弹出框距离窗口底部的距离

	if(!isNaN(ctHg)){
		if( thsWdBm-ctHg > 0 ){
			return true;
		}else{
			return false;
		}
	}
}

/*--上传文件--*/
function fnUploadFiles(event, callback) {
	var uploadFile = event.target.files[0];
	var reader = new FileReader();
	reader.onload = function(event) {
		var str = event.target.result;
		callback(str)
	};
	reader.readAsText(uploadFile);
}


/*--跳转到前一个链接--*/
function goBack(){
  window.history.back()
}

/*--格式化时间 （2010/1/1 To 2010-01-01）--*/
String.prototype.formatDate = function() {
	var ar = this.split('/');
	var str = '';
	for(var i = 0; i < ar.length; i++){
		if(ar[i].length == 1){
			ar[i] = '0' + ar[i]
		}
		if(i != ar.length-1)
			str += ar[i]+'-';
		else
			str += ar[i];
	}
	return str;
};

/*--ajax--*/
function FnAjax1(atype){
	var ajaxType = atype;
	return function (Url, callback) {
		$.ajax({
			url:Url,
			type:ajaxType,
			error:function(xhr,err){
				callback(xhr)
			},
			success:function(data,status,xhr){
				callback(xhr,data)
			}
		})
	}
	
}
function FnAjax2(atype){
	var ajaxType = atype;
	return function (Url,Data,callback) {
		$.ajax({
			url:Url,
			type:ajaxType,
			data:JSON.stringify(Data),
			dataType:'json',
			contentType:'application/json',
			error:function(xhr,err){
				callback(xhr,err)
			},
			success:function(data,status,xhr){
				callback(xhr,data)
			}
		})
	}
}

/*--显示title--*/
function fnTitle(dom){
	var dt = dom?dom.find('[data-title]'):$('[data-title]');
	dt.hover(function(e){
		var ths = $(this);
		var txt = ths.attr('data-title');
		var _offset = ths.offset(),
			t = _offset.top+(ths.context.clientHeight||ths.height()+5)+5,
			l = _offset.left,
			ex = e.offsetX;

		if(txt){
			$('body').append('<div class="titleBox" style="top:'+t+'px;left:'+l+'px;"><i></i><content>'+txt+'</content></div>')
			var ttBox_w = $(".titleBox").width()
			var ttBox_oftL = $(".titleBox").offset().left

			if( (ttBox_w+ttBox_oftL+40) >= $(window).width() ){console.log(ttBox_w+ttBox_oftL)
				ttBox_w -= 20
				$(".titleBox").css('width',ttBox_w+'px')
			}

			if(ex> ttBox_w) ex = ttBox_w
			
			$(".titleBox i").css('left',(ex>6?ex-6:ex)+'px')

		}
	},function(){
		$(".titleBox").remove()
	})
}
fnTitle()

/*用于检测浏览器url发生变化*/
if( ("onhashchange" in window) && ((typeof document.documentMode==="undefined") || document.documentMode==8)) {  
    // 浏览器支持onhashchange事件  
    window.onhashchange = hashChangeFire;  // TODO，对应新的hash执行的操作函数  
} else {
    // 不支持则用定时器检测的办法  
    setInterval(function() {  
        var ischanged = isHashChanged();  // TODO，检测hash值或其中某一段是否更改的函数  
        if(ischanged) {  
            hashChangeFire();  // TODO，对应新的hash执行的操作函数  
        }  
    }, 150);  
} 

function hashChangeFire(){
	// console.log(location.hash)
}

function isHashChanged(){
	return location.hash
}
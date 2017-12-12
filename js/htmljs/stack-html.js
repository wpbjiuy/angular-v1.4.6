//新建环境
var createEnvironment_html = fnEditInputHtml('创建环境', '创建', [
	[
		{
			name:'名称*',
			type:'text',
			placeholder:'请输入环境名称',
			dataName:'name',
			required:true
		},
		{
			name:'描述',
			type:'text',
			placeholder:'请输入环境描述',
			dataName:'description',
			required:false
		}
	]
])

//新建大栈
var createBigStack_html = fnEditInputHtml('创建超级栈', '创建', [
	[
		{
			name:'名称*',
			type:'text',
			placeholder:'请输入大栈名称',
			dataName:'name',
			required:true
		},
		{
			name:'描述',
			type:'text',
			placeholder:'请输入大栈描述',
			dataName:'description',
			required:false
		}
	],
	{
		isChunk:true,
		TheDivider:'Optional: Import Compose',
		content:[
			[
				{
					name:'可选文件类型如: docker-compose.yml',
					html:'<span class="w2 borderBox inputfileBox bkCk">'+
							'<a href="javascript:void(0)"><i class="icon-upload"></i><input class="btnHide" type="file" accept="" value="上传" /></a></p>'+
						'</span>'+
						'<textarea class="bdcol borderBox" style="width:100%;max-width:100%;" placeholder="Contents of docker-compose.yml" data-name="compose"></textarea>',
					required:false
				}
			]
		]
	}
])

//新建栈
var createStack_html = fnEditInputHtml('添加子栈', '创建', [
	[
		{
			name:'名称*',
			type:'text',
			placeholder:'请输入栈名称',
			dataName:'name',
			required:true
		},
		{
			name:'描述',
			type:'text',
			placeholder:'请输入栈描述',
			dataName:'description',
			required:false
		}
	],
	{
		isChunk:true,
		TheDivider:'Optional: Import Compose',
		content:[
			[
				{
					name:'可选文件类型如: docker-compose.yml',
					html:'<span class="w2 borderBox inputfileBox bkCk">'+
							'<a href="javascript:void(0)"><i class="icon-upload"></i><input class="btnHide" type="file" accept="" value="上传" /></a></p>'+
						'</span>'+
						'<textarea class="bdcol borderBox" style="width:100%;max-width:100%;" placeholder="Contents of docker-compose.yml" data-name="compose"></textarea>',
					required:false
				}
			]
		]
	}
])

//修改栈
var amendStack_html = fnEditInputHtml('修改子栈', '提交修改', [
	[
		{
			name:'名称*',
			type:'text',
			placeholder:'请输入栈名称',
			dataName:'name',
			required:true
		},
		{
			name:'描述',
			type:'text',
			placeholder:'请输入栈描述',
			dataName:'description',
			required:false
		}
	]
])

//修该服务
var amendService_html = '<h2 class="ttl">更新应用服务</h2>'+
						'<div class="editFrom">'+
							'<div class="etxt2">'+
								'<div class="fl etxte">'+
									'<p class="w2 txtname">名称</p>'+
									'<div class="w2">'+
										'<input class="bdcol borderBox" type="text" placeholder="请输入服务名称" data-name="name" />'+
									'</div>'+
								'</div>'+
								'<div class="fr etxte">'+
									'<p class="w2 txtname">描述</p>'+
									'<div class="w2">'+
										'<input class="bdcol borderBox" type="text" placeholder="请输入服务描述" data-name="description" />'+
									'</div>'+
								'</div>'+
								'<div class="clr"></div>'+
							'</div>'+
							'<div class="etxt2" style="margin:28px 0;" onselectstart="return false">'+
								'<span class="box_ibl tsname">启动实例数量：</span>'+
								'<span class="box_ibl slide_box_a" style="width:82%;">'+
									'<span class="slide_bg"></span>'+
									'<span class="slide_btn"></span>'+
								'</span>'+
								'<input id="tknum" class="box_ibl tknum noStyle" type="number" value="0" min="0" max="100" data-name="localApps-scale" />'+
							'</div>'+
							'<div class="etxt2" data-type="object" data-name="localApps"><div class="TheDivider"><a class="test addInputTabel" href="javascript:void(0)"><i class="icon icon-plus"></i>服务链接</a></div></div>'+
							'<div class="etxt sbmBox">'+
								'<input class="sbm" id="amendServiceSbm" type="button" value="提交修改" />'+
								'<input class="cancel" onclick="closeFixed2()" type="button" value="取消" />'+
							'</div>'+
						'</div>';

//修该负载均衡
var amendBalancer_html = '<h2 class="ttl">更新负载均衡</h2>'+
						'<div class="editFrom">'+
							'<div class="chunk">'+
								'<div class="TheDivider"><span class="test">基本信息</span></div>'+
								'<div class="etxt2">'+
									'<div class="fl etxte">'+
										'<p class="w2 txtname">名称</p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="请输入服务名称" data-name="name" />'+
										'</div>'+
									'</div>'+
									'<div class="fr etxte">'+
										'<p class="w2 txtname">描述</p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="请输入服务描述" data-name="description" />'+
										'</div>'+
									'</div>'+
									'<div class="clr"></div>'+
								'</div>'+
								'<div class="etxt2 slideChukBox" style="margin:28px 0;" onselectstart="return false">'+
									'<span class="box_ibl tsname">启动实例数量：</span>'+
									'<span class="box_ibl slide_box_a" style="width:82%;">'+
										'<span class="slide_bg"></span>'+
										'<span class="slide_btn"></span>'+
									'</span>'+
									'<input id="tknum" class="box_ibl tknum noStyle" type="number" value="0" min="0" max="100" data-name="loadbalanceApps-scale" />'+
								'</div>'+
							'</div>'+
							'<div id="cfPorts" class="chunk" data-type="object" data-name="loadbalanceApps-launchConfig" data-fix="true">'+
								'<div class="TheDivider"><span class="test">监听端口</span></div>'+
								'<div class="etxt2">'+
									'<table class="inputTable">'+
										'<tr> <th>源IP/端口</th> <th>协议</th> <th>SSL</th> <th>缺省目标端口</th> <th>通道</th> </tr>'+
									'</table>'+
								'</div>'+
							'</div>'+
							'<div class="chunk" data-type="object" data-name="loadbalanceApps">'+
								'<div class="TheDivider"><span class="test">目标</span></div>'+
								'<div class="etxt2">'+
									'<a id="fAddServiceAt" class="clfff" href="javascript:void(0)"><i class="icon icon-plus"></i>添加服务</a>'+
								'</div>'+
							'</div>'+
							'<div class="chunk" data-type="object3" data-name="loadbalanceApps">'+
								'<div class="TheDivider"><span class="test">配置文件(haproxy.cfg)</span></div>'+
								'<div class="etxt2" data-type="object" data-jname="loadBalancerConfig-haproxyConfig">'+
									'<div class="fl etxte">'+
										'<p class="w2 txtname">global <small>section</small></p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="自定义的 global section 设置" data-oname="global" />'+
										'</div>'+
									'</div>'+
									'<div class="fr etxte">'+
										'<p class="w2 txtname">defaults <small>section</small></p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="自定义的 defaults section 设置" data-oname="defaults" />'+
										'</div>'+
									'</div>'+
									'<div class="clr"></div>'+
								'</div>'+
								'<div class="etxt2">'+
									'<div class="etxte" style="width:100%;">'+
										'<p class="w2 txtname">haproxy.cfg</p>'+
										'<div class="w2">'+
											'<p class="clddd"><a id="fAddServiceAt" href="javascript:void(0)">未配置SSL监听端口</a></p>'+
											'<p class="clddd">此处可以设置其它 <a href="http://cbonte.github.io/haproxy-dconv/configuration-1.5.html" target="_blank">haproxy.cfg</a> 配置项，相关内容将被附加到 Rancher 生成的配置中</p>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="chunk">'+
								'<div class="etxt sbmBox">'+
									'<input class="sbm" id="amendBalancerSbm" type="button" value="提交修改" />'+
									'<input class="cancel" onclick="closeFixed2()" type="button" value="取消" />'+
								'</div>'+
							'</div>'+
						'</div>';

//修该外部服务
var amendExternal_html = '<h2 class="ttl">更新外部服务</h2>'+
						'<div class="editFrom">'+
							'<div class="chunk">'+
								'<div class="TheDivider"><span class="test">基本信息</span></div>'+
								'<div class="etxt2">'+
									'<div class="fl etxte">'+
										'<p class="w2 txtname">名称</p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="请输入服务名称" data-name="name" />'+
										'</div>'+
									'</div>'+
									'<div class="fr etxte">'+
										'<p class="w2 txtname">描述</p>'+
										'<div class="w2">'+
											'<input class="bdcol borderBox" type="text" placeholder="请输入服务描述" data-name="description" />'+
										'</div>'+
									'</div>'+
									'<div class="clr"></div>'+
								'</div>'+
							'</div>'+
							'<div class="chunk goalIp" data-type="object" data-name="externalApps">'+
								'<div class="TheDivider"><span class="test">目标</span></div>'+
								'<div class="etxt2">'+
									'<label style="margin-right:40px;"><input type="radio" name="zRadio1" value="1" checked="checked" />指向IP地址</label>'+
									'<label><input type="radio" name="zRadio1" value="2" />指向主机名</label>'+
								'</div>'+
								'<div class="etxt2" data-type="array" data-oname="externalIps">'+
									'<a id="fAddGoalIP" class="clfff" href="javascript:void(0)"><i class="icon icon-plus"></i>添加目标IP</a>'+
								'</div>'+
								'<div class="etxt2" style="display:none;">'+
									'<input class="bdcol borderBox" type="text" placeholder="请输入主机名,列如：mysql.example.com" data-oname="hostname" />'+
								'</div>'+
							'</div>'+
							'<div class="chunk">'+
								'<div class="etxt sbmBox">'+
									'<input class="sbm" id="amendBalancerSbm" type="button" value="提交修改" />'+
									'<input class="cancel" onclick="closeFixed2()" type="button" value="取消" />'+
								'</div>'+
							'</div>'+
						'</div>';

//导入新增子栈文件
var upload_html = '<h2 class="ttl">导入新增子栈文件</h2>'+
						'<div class="editFrom">'+
							'<div class="etxt2">'+
								'<div class="etxte" style="width:100%;">'+
									'<p class="w2 txtname">可选文件类型如: docker-compose.yml</p>'+
									'<span class="w2 borderBox inputfileBox bkCk">'+
										'<a href="javascript:void(0)"><i class="icon-upload"></i><input class="btnHide" type="file" accept=".yml, .yaml" value="上传" /></a></p>'+
									'</span>'+
									'<div class="w2">'+
										'<textarea class="bdcol borderBox" style="width:100%;max-width:100%;" placeholder="Contents of docker-compose.yml" data-name="dockerCompose"></textarea>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="etxt sbmBox">'+
								'<input class="sbm" id="uploadSbm" type="button" value="导入" />'+
								'<input class="cancel" onclick="closeFixed2()" type="button" value="取消" />'+
							'</div>'+
						'</div>';
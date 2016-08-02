## chrome插件扩展
这个教程将带你创建一个简单的扩展
### 扩展插件的基本目录结构
```
	del-ad/
		icon.png
		manifest.json
		popup.html
		popup.js
```

> 这里处于安全考虑， html和js必须分开放，如果放一起会发现js代码无法执行

###  配置
manifest.json文件
```
{  
  "name": "test 1",  
  "version": "0.1.0",  
  "description": "test 1~",  
  "browser_action": {  
    "default_icon": "icon.png" ,
    "default_title": "test 1",
    "default_popup": "popup.html"
  },
  "manifest_version":2  
} 
```
#### name
插件名称
#### version
 版本号
#### description
 插件描述
#### manifest_version
指定清单文件格式的版本，在Chrome18之后，应该都是2，所以这个值直接设定为2就OK了；
#### browser_action :
可以设置扩展信息栏的图标、图标悬浮提示、点击图标是弹出窗口（我的插件不需要弹出窗口所以未设置）。比如在里面可以设计插件的图标，悬浮tips，以及弹出的内容
#### permissions:
permissions对于manifest.json来说虽然不是必要属性，但是对于我们开发插件来说却是必要的manifest.json，我们总要向chrome申请点权限，才能完成我们的插件；
"tabs", 访问浏览器选项卡
"http://localhost:9240/", AJAX访问localhost:9240的权限
"activeTab", 获取当前活动选项卡
"notifications", 浏览器通知（基于HTML5的通知实现）
"storage", 存储,希望存储一些设置的话，就需要用到
"http://*/" 访问任意域名的权限

### 基本代码
popup.html
```
<style>
	.container {
		margin: 0 auto;
	}
	.m {
		width: 100px;
		height: 100px;
		background-color: red;
	}
</style>

<div class="container">
	<div class="m"></div>
	<button id="clear">clear</button>
</div>

<script src="popup.js"></script>

```
popup.js
```
	(function(){
	console.log('begin clear');
	var $ = function(s){
		return document.querySelector(s);
	};
	
	var button = $('#clear');
	button.addEventListener('click', function() {
		clearAds();
	})

	function clearAds() {
		console.log('begin clear');
		document.querySelector('.m').style.backgroundColor="green"
		console.log('end clear');
	}
})();
```

### 加载到浏览器中
1 打开chrome插件管理，进入开发者模式

2 加载插件目录，如果插件有错误，这里会有提示

3 点击右上角的图标运行看效果

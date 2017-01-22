# webpack 优化-第一种方式：创建单个页面对应js的父文件，该文件包括该页面对应的所有的js；
我们平时在设计一个系统的时候，可能会涉及到多个页面，对于多个页面的状态时，通常我们需要在各自的页面引入相关的js文件，同时将公用的js文件以全局的方式引入。在利用webpack打包的时候可能需要写多个入口文件来实现这种需求，对于多个页面的js打包，webpack有这样几种打包方式：
##根据页面来分拆js，然后在各个单独的js中引入共同的js文件(将单个页面的各个js用require引入到一个共同的文件中)，这样webpack在打包的时候利用CommonsChunkPlugin插件会将共同的部分拆分出来。
	假设有两个页面pageA.html, pageB.html, shared.js, common.js, 同时common.js为公用模块.
	首先我们分别创建一个pageA.html，pageB.html所需要的js文件的集合为pageA.js,pageB.js.
### pageA.js
```
var common = require("./common");
var shared = require("./shared");
require([/*"./shared",*/"./page_a.js"], function(shared,pagea) {
	shared("This is page A");
	pagea();
});
```
### pageB.js
``` javascript
var common = require("./common");
var shared = require("./shared");
require.ensure([/*"./shared",*/"./page_b.js"], function(require) {
	var shared = require("./shared");
	var pageb = require("./page_b.js");
	shared("This is page B");
	pageb();
});
```
### pageA.html
```
<html>
	<head></head>
	<body>
		<script src="js/commons.js" charset="utf-8"></script>
		<script src="js/pageA.bundle.js" charset="utf-8"></script>
	</body>
</html>
```
### pageB.html
```
<html>
	<head></head>
	<body>
		<script src="js/commons.js" charset="utf-8"></script>
		<script src="js/pageB.bundle.js" charset="utf-8"></script>
	</body>
</html>
```
share.js 和 common.js为共有的模块；
### share.js
```
var common = require("./common");
module.exports = function(msg) {
	console.log(msg);
};
```
### common.js
```
module.exports = "Common";
```
*打包后,shared.js和common.js被打包进了同一个文件。
*但是当pageA.js修改为：
*修改后的pageA.js文件
### pageA_modify.js
```
var common = require("./common");
var shared = require("./shared");
require(["./shared","./page_a.js"], function(shared,pagea) {
	shared("This is page A");
	pagea();
});
```
*则shared.js不会被打包进conmmon.js文件；
###webpack文件如下：
```var path = require("path");
var CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		pageA: "./pageA",
		pageB: "./pageB"
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new CommonsChunkPlugin("commons.js",[])
	]
}```

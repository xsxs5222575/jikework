// 首先require express、路径路由等
var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var news = require('./routes/news')
// 实例express
var app = express();

// 挂载静态文件
app.use(express.static('public'));
app.use('/',require('./routes/nn.js'));

// 监听端口3000
var server = app.listen(3000, function () {
		console.log('success');
});

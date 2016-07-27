var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var multer = require('multer'); 
// 链接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PHPlesson'
});
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// 获取所有的新闻信息
router.post('/all', function(req, res) {
    // connection.connect();
    connection.query('select * from news', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
        console.log(rows);
    });
    // connection.end();
});

// 获取相应类别的新闻信息
router.post('/recommend', function(req, res) {
	var recommend = req.body.newsclass;
    // connection.connect();
    connection.query("select * from news where class='"+recommend+"'" ,function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
    // connection.end();
});

// 删除新闻信息
router.post('/delete', function(req, res) {
	var newsid = req.body.newsid;
	console.log(newsid);
	var sql=" delete from news where newsid='"+newsid+"'";
    // connection.connect();
    connection.query(sql,function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
    // connection.end();
});


router.post('/insert', function(req, res) {
	var newstitle=req.body.newstitle;
	var newsimg=req.body.newsimg;
	var newscontent=req.body.newscontent;
	var newsclass=req.body.newsclass;
	var newsaddtime=req.body.newsaddtime;

	var sql=$sql="insert into news (newstitle, newsimg ,newscontent, class, addtime) VALUES ('"+newstitle+"','"+newsimg+"','"+newscontent+"','"+newsclass+"','"+newsaddtime+"')";
    // connection.connect();
    connection.query(sql,function(err, rows, fields) {
        if (err) throw err;
        res.send('提交成功');
    });
    // connection.end();
});



module.exports = router;

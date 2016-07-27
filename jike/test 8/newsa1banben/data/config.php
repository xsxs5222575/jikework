<?php

    // 连接数据库
    $con = mysql_connect("localhost","root");
    if(!$con){
        die('could not connect database');
    }
    mysql_select_db("ob_db", $con);
    mysql_query("set names 'utf8'", $con);
    
?>
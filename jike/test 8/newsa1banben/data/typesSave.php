<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
    include_once "config.php";

    //新增分类
    $typeName=$_GET['typeName'];
    mysql_query("insert into ob_types (name) values ('".$typeName."')" , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>
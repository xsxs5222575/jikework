<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
  
   include_once "config.php";

    //删除新闻
    $newsid=$_GET['id'];
    mysql_query("delete from ob_news where id=".$newsid , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>
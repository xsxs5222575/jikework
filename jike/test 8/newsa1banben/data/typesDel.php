<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
  
   include_once "config.php";

    //修改分类
    $typeID=$_GET['id'];
    mysql_query("delete from ob_types where id=".$typeID , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>
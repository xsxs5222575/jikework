<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
    include_once "config.php";

    //修改新闻
     $newsID=$_GET['id'];
     $typeID=$_GET['typeID'];
     $title=$_GET['title'];
     $img=$_GET['img'];
     $url=$_GET['url'];
    mysql_query("update ob_news set typeID='".$typeID."',title='".$title."',img='".$img."',url='".$url."' where id=".$newsID , $con);

    echo "ok";

    //关闭数据库
    mysql_close($con);
?>
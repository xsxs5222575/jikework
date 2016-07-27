<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
    include_once "config.php";

    //新增新闻
    $newname=$_GET['newname'];
    $newstitle=$_GET['newstitle'];
    $newsimg=$_GET['newsimg'];
    $newsurl=$_GET['newsurl'];
    mysql_query("INSERT INTO `ob_news`(`typeID`, `title`, `img`, `url`) VALUES ('".$newname."','".$newstitle."','".$newsimg."','".$newsurl."')" , $con);
    echo "ok";

    //关闭数据库
    mysql_close($con);
?>
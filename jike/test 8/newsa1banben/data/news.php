<?php
    header("Content-type:text/html;charset=utf-8");

    // 连接数据库
    include_once "config.php";


    //查询新闻
    $id=$_GET['id'];
    $sql = "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id";
    if($id!='-1'){
        $sql = $sql." where a.typeID=".$id;
    }

    $result = mysql_query($sql, $con);
    $types = array();
    while($row=mysql_fetch_array($result)){
        array_push($types, array("id"=>$row['id'],"typeID"=>$row['typeID'],"title"=>$row['title'], "img"=>$row['img'], "url"=>$row['url'], "typeName"=>$row['typeName']));
    };


    //返回给前端
    echo json_encode($types);

    //关闭数据库
    mysql_close($con);
?>
    <?php
     header('Content-type:text/html;charset=utf-8');

    // 连接数据库
    include_once "config.php";

    //查询分类
    $result = mysql_query("select * from ob_types", $con);
    $types = array();
    while($row=mysql_fetch_array($result)){
        array_push($types, array("id"=>$row['id'], "name"=>$row['name']));
    }

    //返回给前端
    echo json_encode($types);

    //关闭数据库
    mysql_close($con);
?>
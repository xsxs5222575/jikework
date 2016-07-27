
<?php
session_set_cookie_params(1440,'/','.www.localhost.com');
    session_start();

    header('Content-type:text/html;charset=utf-8');
    include_once "config.php";
   
    //用户查询
    $username=$_GET['username'];
    $password=$_GET['password'];
    $sql = "select * from ob_user where username='".trim($username)."' and password='".trim($password)."'";
    $result = mysql_query($sql, $con);

    //返回前端
    $row = mysql_fetch_row($result);
    if($row){
        $_SESSION['name']=$username;
        echo "<script language='javascript' type='text/javascript'>";
        echo "window.location.href ='../manage.php'";
        echo "</script>";

    }
    else{
        echo "<script language='javascript' type='text/javascript'>";
        echo "alert('用户名或密码错误！');";
        echo "window.location.href ='../login.html';";
        echo "</script>";
    }

    //关闭数据库
    mysql_close($con);

?>
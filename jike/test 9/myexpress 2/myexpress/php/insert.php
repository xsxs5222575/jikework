<?php
	header("Content-type:application/json;charset=utf-8");
	// 链接到mysql
	$con = mysql_connect("localhost","root","");
	if (!$con){
	  die('Could not connect:' . mysql_error());
	}else{
		// 选择数据库
	  	mysql_select_db("PHPlesson", $con);
	  	$newstitle=$_GET['newstitle'];
	  	$newsimg=$_GET['newsimg'];
	  	$newscontent=$_GET['newscontent'];
	  	$newsclass=$_GET['newsclass'];
	  	$newsaddtime=$_GET['newsaddtime'];

	  	$sql="INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `class`,`addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$newsclass."','".$newsaddtime."')";

	  	mysql_query("set names 'utf8'");
		$result=mysql_query($sql,$con);
	}
	mysql_close($con);
	echo "发送成功";
?>
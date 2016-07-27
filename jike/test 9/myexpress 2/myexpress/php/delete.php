<?php
	header("Content-type:application/json;charset=utf-8");
	// 链接到mysql
	$con = mysql_connect("localhost","root","");
	if (!$con){
	  die('Could not connect:' . mysql_error());
	}else{
		// 选择数据库
	  	mysql_select_db("PHPlesson", $con);
	  	$newsid=$_GET['newsid'];
	  	$sql=" DELETE FROM `news` WHERE `newsid`='".$newsid."'  ";
	  	mysql_query("set names 'utf8'");
		$result=mysql_query($sql,$con);
	}
	mysql_close($con);
?>
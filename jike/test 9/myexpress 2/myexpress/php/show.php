<?php
	header("Content-type:application/json;charset=utf-8");
	// 链接到mysql
	$con = mysql_connect("localhost","root","");
	if (!$con){
	  die('Could not connect:' . mysql_error());
	}else{
		// 选择数据库
	  	mysql_select_db("PHPlesson", $con);
	  	$sql="select * from news";
	  	mysql_query("set names 'utf8'");
		$result=mysql_query($sql,$con);
		$arr=array();

		while($row = mysql_fetch_array($result))
		{
		  	array_push($arr,array("newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg'],"newscontent"=>$row['newscontent'],"newsaddtime"=>$row['addtime'],"newsid"=>$row['newsid'],"newsclass"=>$row['class']));
		};
		echo json_encode($arr);
	}
	mysql_close($con);

?>
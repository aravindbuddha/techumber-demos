<?php
if($_GET){
	//Here we using Improved mysql
	$con=new mysqli('localhost','root','','techumber');
	$query="SELECT username from user where username=?";

	$stmt=$con->stmt_init();
	if($stmt->prepare($query)){
		$stmt->bind_param('s',$_GET['usr']);
		$stmt->execute();
		$stmt->bind_result($result);
	}

	if($stmt){
		//if we found user we will echo it
		$stmt->fetch();
		echo $result;
	}
	$stmt->close();
	$con->close();

}

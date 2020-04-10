<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		Super Animated AJAX Login using jquery
|	@author:	Aravind Buddha
|	@url:		http://www.inwiter.com
|	@date:		21 May 2013
|	@email:     aravind@techumber.com
|
---------------------------------------------------------------------------------------------*/
if($_POST){
	extract($_POST);
	if($user=="user"&& $pass="pass")
		echo "<h2 style='color:green'>Success!</h2>";
	else 
		echo "<h2 style='color:red'>Please Enter Correct credentials!</h2>";
}


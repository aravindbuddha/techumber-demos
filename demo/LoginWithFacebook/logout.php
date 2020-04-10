<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		login with facebook in php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		1 September 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
unset($_SESSION['id']);
unset($_SESSION['username']);
unset($_SESSION['email']);
session_destroy();
header("Location:index.php");



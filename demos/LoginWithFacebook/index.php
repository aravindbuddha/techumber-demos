<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		facebook log in with php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		3 OCT 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login with facebook in php-techumber.com</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />

<style type="text/css">
.logo
{
	text-align: center;
}
.container{

}
</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="logo">
				<a href="http:/www.techumber.com">
					<img src="img/logo.png" alt="techumber.com logo"/> 
				</a>
			</div>
		</div>
		<div class="row">
			<div class="span6 offset3">
				<div class="mini-layout">
					<?php 
					
					if (!empty($_SESSION['id'])) {
				   		echo '<h1>Welcome '. $_SESSION['username'].'</h1>';
				   		echo '<b>Your details<b><br /><br />';
						echo 'id : ' . $_SESSION['id'];
						echo '<br/>Name : ' . $_SESSION['username'];
						echo '<br/>Email : ' . $_SESSION['email'];
				      	echo '<br/><a href="logout.php">Logout</a> from demo';
					}
					else
					{
				    echo '<div style="text-align:center"><a href="fblogin.php"><img src="img/fb-login.png"></a> </div>';

					}
					?>
				</div>
			</div>
	</div>
</div>
</body>
</html>

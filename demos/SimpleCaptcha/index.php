<?php
session_start();
if($_POST)
{
    if (empty($_SESSION['security_code']) || trim(strtolower($_REQUEST['security_code'])) != $_SESSION['security_code']) 
	{
        $msg= 'Please enter valid text';
    } 
	else 
	{
	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
	$name=htmlentities($_POST['inputEmail']); 
	$message=htmlentities($_POST['inputMessage']);
	// Insert SQL Statement 
	$msg= 'Success!';
	}
    }
    unset($_SESSION['captcha']);
}
?>
<!DOCTYPE html>
 <!--
    o           		                      			    o8      
   o8                   		             			    88      
  o88oo ooooooo   oooo 88	  88	ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88	     88	   88	  88    88   88   88P"Y8bP"Y8b  d8   8b  88  	   88 
   88   8888888  88	   888888888    88   88   88   88  88   88   88  88888     88
   88   88 		 88	   88	  88	88   88   88   88   88  88   88  88   	   88    
   888  ooooooo   8ooo 88	  88	 V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>-techumber.com</title>
	<link rel="stylesheet" type="text/css" href="../asserts/css/style.css" />
	
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
					<img src="../asserts/img/logostd.png" alt="techumber.com logo"/> 
				</a>
			</div>
		</div>
		<div class="row">
			<div class="span6 offset3">
				
				  <?PHP if($msg){
				  	echo '<div class="alert alert-info">'.$msg.'</div>';
				  } ?>
				
				<form class="form-horizontal mini-layout" method="post" action="">
					 <legend>Contact</legend>

				  <div class="control-group">
				    <label class="control-label" for="inputEmail">Email</label>
				    <div class="controls">
				      <input type="text" id="inputEmail" placeholder="Email">
				    </div>
				  </div>
				  <div class="control-group">
				    <label class="control-label" for="inputMessage">Message</label>
				    <div class="controls">
				      <textarea type="text" id="inputMessage" placeholder="Type message "></textarea>
				    </div>
				  </div>
				   <div class="control-group">
				    <label class="control-label" for="captcha">Captcha</label>
				    <div class="controls">
				      <input type="text" id="security_code" name="security_code" placeholder="Enter below code">
				    </div>
				    <div class="controls">
				      <img src="captcha.php" alt="captcha"/>
				    </div>
				    <div class="controls">
				      <a href="">Not Readable?</a>	
				     </div>
				  </div>
				  <div class="control-group">
				    <div class="controls">
				     
				      <button type="submit" class="btn btn-primary">Submit</button>
				      
				    </div>
				  </div>
				</form>
			</div>
	</div>
</div>
</body>
</html>

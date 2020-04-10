<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		index.php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		29 August 2008
|	@license:	Free!, to Share,copy, distribute and transmit , 
|               but i'll be glad if i my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
include('config.php'); 

if($_POST['signin_btn']=="Signin")
{
	$err=null;
	// username and password sent from form and filtering for any harmful code 
	$user=mysql_real_escape_string(stripslashes($_POST['user'])); 
	$pass=mysql_real_escape_string(stripslashes($_POST['pass']));
	if(empty($user))
	{
		$err='<strong>Error!</strong>please enter username';
		
	}
	elseif(empty($pass))
	{
		$err="<strong>Error!</strong>please enter password";
		
	}
	else{
		$sql="SELECT * FROM $tbl_name WHERE username='$user' and pass='$pass'";
		$count=mysql_num_rows(mysql_query($sql));
		if($count==1)
		{
			$_SESSION['user']=$user;
			header("location:".$_SERVER['PHP_SELF']."?msg=1");
		}
		else
		{
			$err='<strong>Error!</strong>Please enter Valid username/password';
		}
	}
	
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SimpleLoginSignUpWithPHP-techumber.com</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
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

				<?php
				if($_SESSION['user'])
				{
					echo '<div class="alert alert-success">
              			<strong>HI '.$_SESSION['user'].'!</strong> You are already  Logged in.
              			<a href="logout.php">log out here</a>
            			</div>';
				}
				 else if($_GET['msg'])
			     {
			      	echo '<div class="alert alert-success">
              			<strong>Well done!</strong> You successfully Logged in.
              			<a href="logout.php">log out here</a>
            			</div>';
			     }
			    
			     else
				{
				       if($err)
				       {
				       	echo '<div class="alert alert-error">
              					'.$err.'
            				  </div>';
				       }
				        else if($_GET['status'])
			     		{
				     		echo '<div class="alert alert-success">
	              			<strong>Well done!</strong> You successfully Signed UP. 
	              			Please Sign in below
	            			</div>';
			     		} 
				?>
                 
				<form class="form-horizontal mini-layout" action="" method="post">
					 <legend>Sign in</legend>
				  <div class="control-group">
				    <label class="control-label" for="inputEmail">User Name</label>
				    <div class="controls">
				      <input type="text" id="inputEmail" name="user" placeholder="User Name">
				    </div>
				  </div>
				  <div class="control-group">
				    <label class="control-label" for="inputPassword">Password</label>
				    <div class="controls">
				      <input type="password" id="inputPassword" name="pass" placeholder="Password">
				    </div>
				  </div>
				  <div class="control-group">
				    <div class="controls">
				      <label class="checkbox">
				        <input type="checkbox"> Remember me
				      </label>
				      <button type="submit" class="btn  btn-info" name="signin_btn" value="Signin">Sign in</button>
				      <a class="btn btn-link" href="signup.php">Don't have account?</a>
				    </div>
				  </div>
				</form>
				<?php } ?>

			</div>
	</div>
</div>
</body>
</html>

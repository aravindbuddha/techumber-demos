<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		signup.php
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		29 August 2008
|	@license:	Free!, to Share,copy, distribute and transmit , 
|               but i'll be glad if i my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
include('config.php');
if($_POST['signup_btn']=="SignUp")
{
	$err=null;
	//feltering the inputs
	$user=mysql_real_escape_string(stripslashes($_POST['user']));
	$pass=mysql_real_escape_string(stripslashes($_POST['pass']));
	$pass2=mysql_real_escape_string(stripslashes($_POST['pass2']));

	if(empty($user))  //checking if the username fiele is empty
	{
		$err="<strong>Error!</strong>please enter username";
	}
	else if(empty($pass)||empty($pass2))//checking if password fields are empty
	{
		$err="<strong>Error!</strong>please enter password";
	}
	else if($pass!=$pass2)//cheking if the both password not same
	{
		$err="<strong>Error!</strong>please enter same password";
	}
	else{
		//inserting record in to table
		$result=mysql_query("INSERT INTO ".$tbl_name."(username,pass)  VALUES('".$user."','".$pass."');") or die("error in syntex");
		//createing session variable
		
		//
		header("location:index.php?status=1");
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

				<?php if($err)  //check if any error exits
						{
							echo '<div class="alert alert-error">
              			'.$err.'
            			</div>';
						}
						
				?>
				<form class="form-horizontal mini-layout" method="post"  method="POST">
					 <legend>Sign up</legend>
				  <div class="control-group">
				    <label class="control-label" for="inputEmail">UserName</label>
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
				    <label class="control-label" for="inputPasswordAgain">Password Again</label>
				    <div class="controls">
				      <input type="password" id="inputPasswordAgain" name="pass2" placeholder="Password Again">
				    </div>
				  </div>
				  <div class="control-group">
				    <div class="controls">
				       <button type="submit" class="btn btn-info" name="signup_btn" value="SignUp">Sign up</button>
				         <a class="btn btn-link" href="index.php">Already have account Sign-in here!</a>
				    </div>
				  </div>
				</form>
			</div>
	</div>
</div>
</body>
</html>

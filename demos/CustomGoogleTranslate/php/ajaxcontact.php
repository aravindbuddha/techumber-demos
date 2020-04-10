<?php

if($_GET){
	$youremail='youremail@domain.com';
	$subject='The Subject';
	// Here we get all the information from the fields sent over by the form.
	$name = $_GET['name'];
	$email = $_GET['email'];
	$message = $_GET['msg'];
	 
	$to = $youremail;
	$subject = $subject;
	$message = 'FROM: '.$name.' Email: '.$email.'Message: '.$message;
	$headers = 'From: '.$youremail . "\r\n";
	 
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
		mail($to, $subject, $message, $headers); //This method sends the mail.
		echo "<span style='color:green'>Your email was sent!</span>"; // success message
	}else{
		echo "<span style='color:red'>Invalid Email, please provide an correct email.</span>";
	}

}
?>
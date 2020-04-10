<?php
//Paypal Settings
$mode="test";//Options: live or test change it according

//Papal need absoule url for after success are failure
$url = "http" . (($_SERVER['SERVER_PORT']==443) ? "s://" : "://") . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$url=str_replace(basename($_SERVER['REQUEST_URI']), "", $url);
$return_url=  $url ."thankyou.php";
$cancel_url=  $url."cancel.php";

$Paypal=array(
	'test' => array(
					'user' =>"",
					"pass"=>"",
					"sig"=>"",
					"app_id"=>"",
					"reciver"=>"",//This is for amount receiver email
					"return_url"=>$return_url,
					"cancel_url"=>$cancel_url  
					),
	'live' => array(
					'user' =>"<live username>",
					"pass"=>"<live password>",
					"sig"=>"<live signature>",
					"appid"=>"<live appid>",   
					"reciver"=>"<live server>",
					"return_url"=>$return_url,
					"cancel_url"=>$cancel_url   
					)
	);

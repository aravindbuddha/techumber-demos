<?php

header("content-type:application/json");

$fname = isset($_REQUEST['fname'])?$_REQUEST['fname']:diex('First Person Name Required');
$sname = isset($_REQUEST['sname'])?$_REQUEST['sname']:diex('Secons Person Name Required');

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,'https://love-calculator.p.mashape.com/getPercentage?fname='.$fname.'&sname='.$sname);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$headers = array();
$headers[] = 'X-Mashape-Key: HERE YOUR MASHAPE KEY...';
$headers[] = 'Accept: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$server_output = curl_exec ($ch);
curl_close ($ch);
print  $server_output ;

function diex($err){
	echo json_encode(array(
			'err'=> $err
		));
	die();
	return;
}

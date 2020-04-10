<?php 
$clientId="Your App ClidentID";
$clientSecret="Your App ClientSecret";
$callback="http://demo.techumber.com/SoundCloud1/callback.php";

require_once 'lib/Soundcloud.php';
$soundcloud = new Services_Soundcloud($clientId, $clientSecret, $callback);
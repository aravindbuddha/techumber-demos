<?php 
$clientId="Your App ClidentID";
$clientSecret="Your App ClientSecret";
$callback="Your App ";

require_once 'lib/Soundcloud.php';
$soundcloud = new Services_Soundcloud($clientId, $clientSecret, $callback);
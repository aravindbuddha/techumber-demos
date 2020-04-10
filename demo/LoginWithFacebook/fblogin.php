<?php
require 'fblib/facebook.php';
require 'config.php';

$fb = new Facebook(array(
            'appId' => APP_ID,
            'secret' => APP_SECRET,
            ));
$user = $fb->getUser();
if ($user) {
  try {
    $userdata = $fb->api('/me');
  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
  if (!empty($userdata)) {
    $_SESSION['id'] = $userdata['id'];
    $_SESSION['username'] = $userdata['name'];
    $_SESSION['email'] = $userdata['email'];
    header("Location: index.php");
        
  } else {
       // this will kill the  script if there is any error
        die("There was an error.");
  }
} else {
   // if not logged in you will be redirect to facebook login
    $login_url = $fb->getLoginUrl(array( 'scope' => 'email'));
    header("Location: " . $login_url);
}


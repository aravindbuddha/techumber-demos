<?php
include("config.php");
$authorizeUrl = $soundcloud->getAuthorizeUrl();
?>


<!DOCTYPE html>
  <!--
    o                                                   o8      
   o8                                                   88      
  o88oo ooooooo   oooo 88   88  ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88       88    88   88  88   88   88P"Y8bP"Y8b  d8   8b  88        88 
   88   8888888  88    8888888  88   88   88   88   88  88   88  8888888   88
   88   88       88    88   88  88   88   88   88   88  88   88  88        88    
   888  ooooooo   8ooo 88   88   V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>demo.techumber.com</title>
  <style type="text/css">
  .container{
    width: 700px;
    margin: 0 auto;

  }
  .logo{
    text-align: center;
  }
  .login{
  text-align: center;
  }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="logo">
    <a href="http://techumber.com">
      <img src="img/logostd.png" alt="techumber logo" title="techumber logo" />
    </a>
  </h1>
  <a class="login"href="<?php echo $authorizeUrl; ?>">
    <img src="img/btn-connect-sc-l.png" />
  </a>
  </div>
</body>
</html>
   
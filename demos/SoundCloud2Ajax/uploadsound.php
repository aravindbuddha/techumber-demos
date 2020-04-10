<?php
 if($_GET['access_token']){
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
  <title>Sound Cloud Tutorials:Uploading Audio Files:demo.techumber.com</title>
  <style type="text/css">
  body {
  font-family: "Comic Sans MS", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 32px;
  color: #333333;
  font-weight: normal;
  }
  .container{
    width: 500px;
    margin: 0 auto;

  }
  .logo{
    text-align: center;
  }
  #upload_result{
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 0 20px 20px;
  }
  input[type="text"],input[type="file"] {
  border: 1px solid #cccccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  outline: none;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
  border-radius: 3px;
  width: 325px;
  float: right;
  }
  input[type="submit"] {
  display: block;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 0 0 118px;
  padding: 6px 10px;
  border: 1px solid #777;
  background: #333537;
  border-radius: 5px;
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
  <div id="upload_result">
    <p>Download this <a href="airtelbirdmix.mp3">airtelbirdmix.mp3</a>(80k) file and use it for upload if you want to test fast</p>
  <form action="" method="post" enctype="multipart/form-data" id="upload_form" >
    <input type="hidden" id="access_token" name="access_token" value="<?php echo $_GET['access_token']; ?>" />
    <br />
    Audio Name:<input type="text" id="audioname" name="audioname" placeholder="My audio" /><br /><br /> 
    Audio File: <input type="file" name="audiofile" id="audiofile" />
    
    <br />
    <input type="submit" />
  </form>
  </div>
  </div>
    <script type="text/javascript" src="upload.js"></script>
</body>
</html>

<?php
}
else{
	header("Location:http://techumber.com");
}
?>   
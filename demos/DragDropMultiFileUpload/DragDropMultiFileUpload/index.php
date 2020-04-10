<?php 
/*--------------------------------------------------------------------------------------------
|	@desc:		description
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		1 September 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
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
  <link rel="stylesheet" type="text/css" href="css/style.css" />
	<script type="text/javascript" src="js/tuDDUpload.js"></script>
	<script type="text/javascript">
  window.onload = function() {
    options={
      dragZone:"dragZone",
      uploadUrl:"upload.php",
      resultArea:"result"
      };
      initDDUpload(options);
   };
	 	</script>
<style type="text/css">
.logo
{
  text-align: center;
}
 #dragZone{
border: 2px dashed #BBB;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;
padding: 50px;
text-align: center;
font: 20pt bold,"Vollkorn";
color: #BBB;
}

</style>
</head>
<div class="container">
    <div class="row">
      <div class="logo">
        <a href="http:/www.techumber.com">
          <img src="img/logostd.png" alt="techumber.com logo"/> 
        </a>
      </div>
    </div>
    <div class="row">
      <div class="span7 offset2">
        <div id="dragZone">Drop files here</div>
        <div id="result" class="mini-layout"></div>

      </div>
  </div>
</div>

</body>
</html>


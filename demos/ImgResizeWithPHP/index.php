<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		Image resize Script
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		11 September 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
define ("MSIZE","400"); 
if($_POST)
{
	//functin to get image extenction
	function getExt($img) {
         $pos = strrpos($img,".");
         if (!$pos) { return "null"; }
         $len = strlen($img) - $ipos;
         $ext = substr($img,$pos+1,$len);
         return strtolower($ext);
 	}
 	//user input image file
	$img = stripslashes($_FILES["img"]["name"]);
	//temp image file name
	$tempimg = $_FILES['img']['tmp_name'];
	//Required new Width
	$nwidth= stripslashes($_POST["wt"]);
	//Required new Height
	$nheight= stripslashes($_POST["ht"]);
	$err=null;
	if($img)
	{ 
  	    $ext = getExt($img);
  	    //below are some image validations
  		if ((!$ext)&&($ext!="jpg")&&($ext!="jpeg")&&($ext!="png")&&($ext!= "gif"))
  		{
  			$err="<strong>ho snap!</strong>please enter valid image jpg,jpeg,png or gif";
  		}
  		elseif (filesize($tempimg)> MSIZE*1024) {
  		 	$err="<strong>ho snap!</strong>Too big file upload below 500kb";
  		}
  		else{
  		 	if($ext=="jpg" || $ext=="jpeg" )
			{
				$source = imagecreatefromjpeg($tempimg);
			}
			else if($extension=="png")
			{
				$source = imagecreatefrompng($tempimg);
			}
			else 
			{
				$source = imagecreatefromgif($tempimg);
			}
			//getting orginal image height and widht
			list($width,$height)=getimagesize($tempimg);
			$temp=imagecreatetruecolor($nwidth,$nheight);
			imagecopyresampled($temp,$source,0,0,0,0,$nwidth,$nheight,$width,$height);
			$newfile="uploads/". $_FILES['img']['name'];
			imagejpeg($temp,$newfile,100);
			imagedestroy($source);
			imagedestroy($temp);
  		 } 
	}
	else{
		$err='<strong>ho snap!</strong>Please select image';
	}
}
?>
<!DOCTYPE html>
 <!--
    o           		                      			    o8      
   o8                   		             			    88      
  o88oo ooooooo   oooo 88	  88	ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88	     88	   88	  88    88   88   88P"Y8bP"Y8b  d8   8b  88  	   88 
   88   8888888  88	   888888888    88   88   88   88  88   88   88  88888     88
   88   88 		 88	   88	  88	88   88   88   88   88  88   88  88   	   88    
   888  ooooooo   8ooo 88	  88	 V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Image Resize Script with PHP  techumber.com</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<style type="text/css">
	.container{
		
	}
	.logo{
		text-align: center;
	}
	</style>
	<script type="text/javascript">
	
	</script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="logo">
				<a href="http:/www.techumber.com">
					<img src="img/logostd.png" alt="techumber.com logo"/> 
				</a>
			</div>
		</div>
		<div class="row">
		<div class="span6 offset3">
			<div class="mini-layout">
				<?php if($err){
					echo '<div class="alert alert-error">
              '.$err.'
            </div>';
				} 
				?>
				<?php 
					if($newfile)
					{
						echo '<center><img src="'.$newfile.'"/></center>';
						echo '<div class="alert alert-info">
              Right click save as to save your image.
            </div>';
					}
				?>
			
				<form class="form-horizontal" method="POST" action="" enctype="multipart/form-data">
				  <div class="control-group">
				    <label class="control-label" for="img">Choose File</label>
				    <div class="controls">
				      <input type="file" id="img" name="img" />
				    </div>
				  </div>
				  <div class="control-group">
				    <label class="control-label" for="inputWidth">Width</label>
				    <div class="controls">
				      <div class="input-append">
						  <input type="text" class="span1" id="inputWidth" name="wt" placeholder="width" value=<?php if($nwidth) echo $nwidth; else echo "60"; ?> />
						 <span class="add-on">PX</span>
						</div>
				    </div>
				  </div>
				  <div class="control-group">
				    <label class="control-label" for="inputHeight">Height</label>
				    <div class="controls">
				    	<div class="input-append">
						 <input type="text" class="span1" id="inputHeight" name="ht" value=<?php if($nheight) echo $nheight; else echo "60"; ?> placeholder="Height">
						 <span class="add-on">PX</span>
						</div>
				    </div>
				  </div>
				  <div class="controls">
				  	
				      <button id="btnSubmit" name="btnSubmit" class="btn btn-info" value="Resize">Resize</button>
				    </div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
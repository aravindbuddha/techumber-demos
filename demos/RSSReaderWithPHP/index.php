<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		Simple RSS Reader With PHP
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		18 September 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
$feedurl="";
$displayrss="";
if(!empty($_GET["feedurl"]))
{
	$feedurl=stripcslashes($_GET["feedurl"]);
}
else
{
	$feedurl='http://feeds.feedburner.com/techumber';
}
//Loading the rss xml file
$rssxml = simplexml_load_file($feedurl);
//We generating list iteams to display later on the same page
$displayrss='<ul class="nav nav-tabs nav-stacked">';
//listing all iteams in to <li> list with there posttitle and postlink
foreach ($rssxml->channel->item as $item) {
$ptitle = (string) $item->title; 
$plink   = (string) $item->link; 
$displayrss.= 
		'<li>
		<a href="'.$plink.'" target="_blank" title="" >'.$ptitle.' </a>
		</li>';
}
$displayrss.="</ul>";
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
	<title>  techumber.com</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<style type="text/css">
	.logo{
		text-align: center;
	}
	</style>
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
			<div class="span5 offset3 mini-layout">
				<h2>Enter feed url!</h2>
				<p class="alert alert-info">Ex:http://feeds.feedburner.com/techumber</p>
				<form action="" method="get">
  					<input class="span5" type="text" id="feedurl" name="feedurl" value="http://feeds.feedburner.com/techumber">
				 	<button type="submit" class="btn btn-info ">Submit</button>
				 	<a class="btn btn-info pull-right" onclick="window.open('http://feedburner.google.com/fb/a/mailverify?uri=techumber', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true" >Subscribe</a>
				</form>
			</div>
			<div class="span5 offset3 mini-layout">
			<?php
			//displaying the result
			if($displayrss)
			{
			echo '<div class="alert alert-info">Feeds of:'.$feedurl.'</div>';
			echo $displayrss;
			}
			?>
			</div>
	</div>
</body>
</html>
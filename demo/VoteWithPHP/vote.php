<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		Online Voting System With PHP And AJAX
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		20 OCT 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
$v = $_GET['v'];
//Here our db will be txt file.
$db = "result.txt";
//reads file conts to array
$content = file($db);
$arr = explode(":", $content[0]);
//obama and Romney counts
$o = $arr[0];
$r = $arr[1];

//new values updation
if ($v== o){
  $o = $o + 1;
}else{
  $r = $r + 1;
}
//updateing new values to file
$update = $o.":".$r;
$fp = fopen($db,"w");
fputs($fp,$update);
fclose($fp);
?>

<h2>Result:</h2>
<span>Obama:</span>
<p class="result" style="width:<?php echo(100*round($o/($r+$o),2)); ?>%">
<?php echo(100*round($o/($r+$o),2)); ?>%
</p>
<br />
<span>Romney:<span><p class="result" style="width:<?php echo(100*round($r/($r+$o),2)); ?>%">
<?php echo(100*round($r/($r+$o),2)); ?>%
</p>

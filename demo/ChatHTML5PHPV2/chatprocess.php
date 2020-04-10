<?php
/*--------------------------------------------------------------------------------------------
|	@desc:		Simple Chat Engine Using HTML5(Server Sent Events) And PHPV2:demo.techumber.com
|	@author:	Aravind Buddha
|	@url:		http://www.techumber.com
|	@date:		18 Nov 2012
|	@email:     aravind@techumber.com
|	@license:	Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$chatroom=strip_tags($_GET['croom']);
$name=strip_tags($_GET['name']);
$msg=strip_tags($_GET['msg']);

function sendMsg($msg) {
  echo "data: $msg" . PHP_EOL;
  ob_flush();
  flush();
}
if(!empty($name) && !empty($msg)){
	$fp = fopen($chatroom."_chat.txt", 'a');  
     fwrite($fp, '<div class="chatmsg"><b>'.$name.'</b>: '.$msg.'<br/></div>'.PHP_EOL);  
    fclose($fp);   
}
if(file_exists($chatroom."_chat.txt") && filesize($chatroom."_chat.txt") > 0){  
 $arrhtml=array_reverse(file($chatroom."_chat.txt"));
 $html=$arrhtml[0];
  
}
if(filesize($chatroom."_chat.txt") > 400){
  unlink($chatroom."_chat.txt");
}
sendMsg($html);
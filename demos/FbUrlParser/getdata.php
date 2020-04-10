<?php
/*--------------------------------------------------------------------------------------------
|    @desc:      Exactly Facebook like url parsing using jquery and php
|    @author:    Aravind Buddha
|    @url:       http://www.techumber.com
|    @date:      6 NOV 2012
|    @email:     aravind@techumber.com
|    @license:   Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
if($_GET['iurl'])
{
$url=htmlentities(stripslashes($_GET['iurl']));
$str = file_get_contents($url);
//to get the title
function getTitle($str){
    if(strlen($str)>0){
        preg_match("/\<title\>(.*)\<\/title\>/",$str,$title);
        return $title[1];
    }
}
//to get meta description 
function getMetaDesc($url) {
	$metas = get_meta_tags($url);
	return $metas["description"];
}
//to get the img.
function getImg($str){
	if(strlen($str)>0){
        preg_match('/<img[^>]*'.'src=[\"|\'](.*)[\"|\']/Ui',$str,$img);
        return $img[1];
    }
}
//json formation
echo '{"title":"'.getTitle($str).'","meta":"'.getMetaDesc($url).'","img":"'.getImg($str).'"}';
}
?>
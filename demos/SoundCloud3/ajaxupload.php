<?php
if($_POST){

include("config.php");
$soundcloud->setAccessToken($_POST['access_token']);
$mytrack = array(
    'track[title]' => $_POST["audioname"],
    'track[asset_data]' => '@'.$_FILES["audiofile"]["tmp_name"] 
     );
$track = json_decode($soundcloud->post('tracks', $mytrack));
$soundcloud->setCurlOptions(array(CURLOPT_FOLLOWLOCATION => 1));
$track_url =(string) $track->permalink_url;
//Sleep function very important here other wise you will get 404 error.
sleep(3);
$embed_html = json_decode($soundcloud->get('oembed', array('url' => $track_url)));
echo $embed_html->html;
}

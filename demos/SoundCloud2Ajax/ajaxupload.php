<?php
if($_POST)
{
  include("config.php");
  $soundcloud->setAccessToken($_POST['access_token']);

  $mytrack = array(
    'track[title]' => $_POST["audioname"],
    'track[asset_data]' => '@'.$_FILES["audiofile"]["tmp_name"] 
     );

  $track = json_decode($soundcloud->post('tracks', $mytrack));
  echo '<p><b>Congrats your file successfully uploaded to <a target="_blank" href="'.$track->permalink_url.'">'.$track->permalink_url.'</a>';
}

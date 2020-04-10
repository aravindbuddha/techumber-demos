<?php 
/*--------------------------------------------------------------------------------------------
 <!--
    o                                                       o8      
   o8                                                       88      
  o88oo ooooooo   oooo 88     88    ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88       88    88     88    88   88   88P"Y8bP"Y8b  d8   8b  88        88 
   88   8888888  88    888888888    88   88   88   88  88   88   88  88888     88
   88   88       88    88     88    88   88   88   88   88  88   88  88        88    
   888  ooooooo   8ooo 88     88     V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->

|    @desc:         Captcha code create class
|    @author:       Aravind Buddha
|    @url:          http://www.techumber.com
|    @date:         6 September 2012
|    @email:        aravind@techumber.com
|    @license:      Free! to Share,copy, distribute and transmit , 
|                   but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
session_start();
//Creating captcha object
$capt = new Captcha();
$capt->createImage(); 
exit(); 

Class Captcha{
    //fonts we use
    public $fonts = array('AntykwaBold','Candice','Ding-DongDaddyO' ,'Duality','Heineken','Jura','StayPuft','TimesNewRomanBold' ,'VeraSansBold',);
    //generateing text 
    function getText()
   {    //text lenght
        $length = rand(4,7);
        $alpha  = "abcdefghijlmnopqrstvwyz";
        $voc = "aeiou";
        $text  = "";
        $vocal = rand(0, 1);
        for ($i=0; $i<$length; $i++) {
            if ($vocal) {
                $text .= substr($voc, mt_rand(0, 4), 1);
            } else {
                $text .= substr($alpha, mt_rand(0, 22), 1);
            }
            $vocal = !$vocal;
        }
        return $text;
    }
// crateing image for 
    function createImage() 
    { 
        $security_code =$this->getText();
        //setting session 
        $_SESSION["security_code"] = $security_code;
        $width = 198; 
        $height = 40;  
        //colrs
        $colors = array(
        array(27,78,181), // blue
        array(22,163,35), // green
        array(214,36,7),
        array(173,71,178),  // red
        );
        $rc=rand(0,3);
        //font location
        $font="fonts/".$this->fonts[array_rand($this->fonts)].".ttf";
        $image = ImageCreate($width, $height);  
        $white = ImageColorAllocate($image, 255, 255, 255); 
        $textcolor = ImageColorAllocate($image, $colors[$rc][0], $colors[$rc][1], $colors[$bc][2]); 
        $grey = imagecolorallocate($image, 128, 128, 128);
        ImageFill($image, 0, 0, $white); 
        imagettftext($image, 20, 0, 11, 21, $grey, $font, $security_code);
        imagettftext($image, 20, 0, 10, 30, $textcolor, $font, $security_code);
        header("Content-Type: image/jpeg"); 
        ImageJpeg($image); 
        ImageDestroy($image); 
    } 
}


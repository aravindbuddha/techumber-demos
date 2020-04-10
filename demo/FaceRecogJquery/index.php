<?php
/*--------------------------------------------------------------------------------------------
|   @desc:      Live image crop with php and jquery
|   @author:    Aravind Buddha
|   @url:       http://www.techumber.com
|   @date:      16 September 2012
|   @email:     aravind@techumber.com
|   @license:   Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
if(isset($_POST['submit'])){
    $files = glob('path/to/temp/*'); // get all file names
foreach($files as $file){ // iterate files
  if(is_file($file))
    unlink($file); // delete file
}
//error variable init
$err="";
$path = "../uploads/";
//alled image format will be used for filter    
$allowed_formats = array("jpg", "png", "gif", "bmp");
$imgname = $_FILES['img']['name'];
$tmpname = $_FILES['img']['tmp_name'];
$size = $_FILES['img']['size'];
if($imgname){
    list($name, $ext) = explode(".", $imgname);
    if(in_array($ext,$allowed_formats) && $size<(1024*1024))
    {
        if($ext=="jpg" || $ext=="jpeg" )
        {
            $src = imagecreatefromjpeg($tmpname);
        }
        else if($ext=="png")
        {
            $src = imagecreatefrompng($uploadedfile);
        }
        else 
        {
            $src = imagecreatefromgif($uploadedfile);
        }

        list($width,$height)=getimagesize($tmpname);

        if($width > 500){
            $newwidth=500;
            $newheight=($height/$width)*$newwidth;
            $tmp=imagecreatetruecolor($newwidth,$newheight);

            imagecopyresampled($tmp,$src,0,0,0,0,$newwidth,$newheight,
             $width,$height);

            $image = $path.$imgname;

            imagejpeg($tmp,$path.$imgname,100);
            move_uploaded_file($image,$path.$imgname);
            
        }
        else{
            //moveing uploaded image to uploads dir
            if(move_uploaded_file($tmpname,$path.$imgname)){
                //uploaded image
                $image="../uploads/".$imgname;
            }
            else
            {
                $err="<strong>Oh snap!</strong>failed";
            }
        }
        
    }
    else{
        $err="<strong>Oh snap!</strong>Invalid file formats..!";                    
    }
}
else{
    $err="<strong>Oh snap!</strong>Please select image..!";
}
}
?>
<!DOCTYPE html>
<!--
o                                                    o8      
o8                                                   88      
o88oo ooooooo   oooo 88   88  ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
88   88       88     88   88  88   88   88P"Y8bP"Y8b  d8   8b  88        88 
88   8888888  88     8888888  88   88   88   88   88  88   88  8888888   88
88   88       88     88   88  88   88   88   88   88  88   88  88        88    
888  ooooooo   8ooo  88   88   V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Amazing Face Recognization Using Jquery:demo.techumber.com</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">

<!-- styleing -->
<style type="text/css">
* {
margin: 0; 
padding: 0;
border:0;
}
body {
background: #fff; 
font-family: helvetica,"Comic Sans MS",arial,sans-serif;
}
.container{
width: 700px;
margin: 0 auto;
}
.logo{
text-align: center;
}
.contant{
border: 1px solid #ddd;
border-radius: 4px;
width: 500px;
padding: 20px;
margin: 0 auto;
text-align: center;
}
#myimg{
 
}
input[type="file"],button{
    padding: 5px 20px;
background: #333;
color: #fff;
border: 0;
border-radius: 4px;
cursor: pointer;
}
.face {
    border:2px solid #FFF;
}
#start{
    
    color: green;
    font-weight: bolder;
}
</style>

    
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="js/facedetection/ccv.js"></script> 
    <script src="js/facedetection/face.js"></script>
    <script src="js/jquery.facedetection.js"></script> 
    <script>
    $(function() {
        $('#start').click(function() {
            var $this = $(this);
            $this.text("Please Wait....")
            var coords = $('#myimg').faceDetection({
                complete:function() {
                    $this.text('Done! White box on your face');
                },
                error:function(img, code, message) {
                    $this.text('error!');
                    alert('Error: '+message);
                }
            });
            for (var i = 0; i < coords.length; i++) {
                $('<div>', {
                    'class':'face',
                    'css': {
                        'position': 'absolute',
                        'left':     coords[i].positionX +'px',
                        'top':      coords[i].positionY +'px',
                        'width':    coords[i].width     +'px',
                        'height':   coords[i].height    +'px'
                    }
                })
                .appendTo('.contant');
            }
        });
        return false;
    });
    </script>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="logo">
            <a href="http://techumber.com">
              <img src="../asserts/img/logostd.png" alt="techumber logo" title="techumber logo" />
            </a>
          </h1>
        </header>
<section class="contant">
   <?php
   if($image){   
        echo '<a href="#" id="start">Click Here!</a> <img src="'.$image.'" id="myimg">'; 
    }
    ?>
   <?php
    //if any error while uploading
    if($err)
    {
        echo '<div class="alert alert-error">'.$err.'</div>';
    }
    ?>
    <form id="imgcrop" method="post" enctype="multipart/form-data">
        Upload image: <input type="file" name="img" id="img" />
        <input type="hidden" name="imgName" id="imgName" value="<?php echo($imgname) ?>" />
        <button name="submit">Submit</button>
    </form>
</section>
    </div>
</body>
</html>

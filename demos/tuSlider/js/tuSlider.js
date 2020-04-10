/*--------------------------------------------------------------------------------------------
|    @desc:        How To Create Slide Show Plugi-in In jQuery
|    @author:      Aravind Buddha
|    @url:         http://www.techumber.com
|    @date:        22 NOV 2012
|    @email:       aravind@techumber.com
|    @license:     Free! to Share,copy, distribute and transmit , 
|                  but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
(function($){
//tuSlider plugin 
$.fn.tuSlider=function(options){
var o = {
    'width': 700, 
    'height': 400,
    'auto': true, 
    'autoSpeed': 2000,
};
return this.each(function(){
$.extend(o,options);
$(this).css({"position":"relative"});
//Creating Frame and applying styles
$(this).children().wrapAll('<div class="frame" >');
var frame=$(this).find(".frame");
frame.css({"width":o.width,
           "height":o.height,
           "border":"1px solid #ccc",
           "-moz-border-radius": "5px",
           "-webkit-border-radius": "5px",
           "border-radius": "5px",
           "box-shadow":"0px 0px 2px #999999",
           "overflow":"hidden",
           "padding": "0px"});
//Adding next, previous buttons to frame
$(this).append('<a href="#" class="prev">Prev</a><a href="#" class="next">Next</a>');
var prev=$(this).find("a.prev");
var next=$(this).find("a.next");
//applying CSS for Next and Prev buttons
prev.css({"position": "absolute",
        "width": "35px",
        "height": "25px",
        "padding": "5px",
        "color": "#fff",
        "text-decoration":"none",
        "-moz-border-radius": "5px",
        "-webkit-border-radius": "5px",
        "border-radius": "5px",
        "box-shadow": "0px 0px 2px #999999",
        "background": "#000",
        "line-height": "25px",
        "z-index": "5"});
next.css({"position": "absolute",
        "width": "35px",
        "height": "25px",
        "padding": "5px",
        "color": "#fff",
        "text-decoration":"none",
        "-moz-border-radius": "5px",
        "-webkit-border-radius": "5px",
        "border-radius": "5px",
        "box-shadow": "0px 0px 2px #999999",
        "background": "#000",
        "line-height": "25px",
        "z-index": "5"});

prev.css({"top":((o.height)/2)});
next.css({"top":((o.height)/2),"left":(o.width-45)});
//finding total number of images and applying styles
var imgs=frame.find('img');
var imgCount=imgs.length; 
imgs.css({"float":"left","width":o.width,"height":o.height});
//Creating Slider
frame.children().wrapAll('<div class="slider" >');
var slider=frame.find(".slider");
slider.css({"width":o.width*imgCount});
var tuSlider=function(){
    //finding the total width of all images
	this.Cprev=prev;
	this.Cnext=next;
    this.Cimgs=imgs;
    //to get current img number
	this.getIndex = function () { // Index
        return this.Cimgs.filter('.current').index();
    };
    //to go with animation
	this.go = function (index) {
         slider.animate({ marginLeft: -(index*o.width)}  , o.speed);
         this.Cimgs
		.removeClass('current')
		.eq(index)
		.addClass('current');
    };
    this.nextSlide = function () {
        var index = this.getIndex();
        if (index < this.imgCount-1) {
            //to go to next image
            this.go(index + 1);       
        } else {
            //to go to first image
            this.go(0);                
        }
    };
    this.prevSlide = function () {
        var index = this.getIndex();
        if (index > 0) {
            //to go to previous image
            this.go(index - 1); 		
        } else {
            //to go to last image
            this.go(imgCount-1);    
        }
    };
    //initilizeing function 
    this.init = function () {           
		this.Cimgs.first().addClass('current');			     

    };
};
    //createing object for tuSlider class
	var tusObj=new tuSlider(); 
	tusObj.init();

	//-------mouse click events------//
	   next.click(function(e){
	 	e.preventDefault();
	 	tusObj.nextSlide();	
	 });

	   prev.click(function(e){
	 	e.preventDefault();
	 	tusObj.prevSlide();
	 }); 
	 
	 //----------auto rotate chek --------//
	if (o.auto === true) {
        var timer = function () {
        		tusObj.prevSlide();
    		};
   	}
    //setting timer
     setInterval(timer, o.autoSpeed);              

});

};

})(jQuery);
/*!
* jQuery imgZoom v1.0
* http://www.techumber.com/
* Auther , Aravind Buddha
* Date: TUS  26 AUG 2012 
*/
(function($){
	//imgZoom plug starts here
	$.fn.imgZoom=function(options){
		 var s= $.extend( {
                zoom: 25,
                speed: 300
    }, options);
		 return this.each(function(){
		 	var img = $(this);  //this will capture the current imag element
		 	
		 	 img.load(function() {  //load function trigger
		 		var w=img.width();  //current width of the image
		 		var h=img.height(); //current height of the image
		 		img.hover(function(){
		 			//below we can user the extended varable with s.
		 			img.stop().animate({
                                height: h + s.zoom, //applying new heiht to img
                                width:w+s.zoom,     //applying new width to img
                                overflow:"hidden",
                                marginLeft: -(s.zoom/2), 
                                marginTop: -(s.zoom / 2)
                            }, s.speed,'linear');
		 		},function(){
		 			 img.stop().animate({
                                height: h,      //applying old height
                                width:w,         //applying old width
                                marginLeft: 0,
                                marginTop: 0
                            }, s.speed,'linear');

		 		});
		 	 });
		 });
	};
})(jQuery);
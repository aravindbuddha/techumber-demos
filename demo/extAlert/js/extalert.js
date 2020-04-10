/*!
* jQuery extAlert v1.0
* http://www.techumber.com/2012/08/create-your-own-jquery-plugin.html
* Auther , Aravind Buddha
* Date: TUS  26 AUG 2012 
*/
(function($){
	
	//Your Plug in code stars here
	$.fn.extAlert=function(options){

    //Here we returning this object so that we can maintain chainablity
 	    return this.each(function(){ 
		     //extending the default perameter with user perameters
				var o=$.extend({
					lc:true,       //wether you want to put special background color to external link
					lcv:"#9fc",   //link color if you want set the link color
					lfs:"italic",   //link font style you specify the font style default it italic for external links
				},options);
				
				var host=window.location.href.split("/")[2].toLowerCase();
				var ahref=$(this).attr('href');
				var a=ahref.split("/")[2].toLowerCase();
				
				if(host != a){
					if(o.lc)
			        { 
			        	$(this).css("background-color",o.lcv);
			        } 
			        $(this).css("font-style",o.lfs);
				}

		            $(this).click(function(e){
		        	e.preventDefault();    //it will block default action of the click event
	        		if(host!=a){
						var cnf=confirm("Press OK to go! ");
						if(cnf){
							window.location.href = ahref;
						}	        		
	        	 	}

		            });	
		}); 
	};
})(jQuery);
var TU= window.TU || {};

TU.App =TU.App || (function(){
	return{
		asserts:{
			load:function(){

			},	
			load_css:function(href){
				var 
				cssLink=$("<link rel='stylesheet' type='text/css' href='"+href+"'>");
    			 $("head").append(cssLink); 
			}
			load_js:function(src){
				var
				jsLink = $("<script type='text/javascript' src='"+src+"'>");
     			$("head").append(jsLink); 
			}
		}
	}
});


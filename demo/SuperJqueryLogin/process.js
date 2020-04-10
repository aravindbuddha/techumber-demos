/*--------------------------------------------------------------------------------------------
|	@desc:		Super Animated AJAX Login using jquery
|	@author:	Aravind Buddha
|	@url:		http://www.inwiter.com
|	@date:		21 May 2013
|	@email:     aravind@techumber.com
|
---------------------------------------------------------------------------------------------*/
$(function(){
	var o={popupDiv:'loginDiv'}
	var SuperLogin=function(){
		$('#'+o.popupDiv+'Form').html('<img src="loader.gif style="text-align:center;" />');
		this.login=function(dataString){
			$.ajax({  
			  type: "POST",  
			  url: "login.php",  
			  data: dataString,  
			  success: function(response) {
			    $('#'+o.popupDiv+'Form').html(response);
			  }  
			});  
			return false;  
		};
		//call mbox
		this.PopBox=function(e,$this){
			var l=$($this).offset().left;
			var t=$($this).offset().top;
			$('body').append('<div id="mask" />');
			$('#mask').css({"position":"fixed",
						  	"left":"0",
						  	"top":"0",
						  	"background-color":"#000",
							"opacity": "0.5 !important",
						  	"display":"none"
						});
			$('body').append('<div id="'+o.popupDiv+'" />');
			$('#'+o.popupDiv).css({"position":"absolute",
									"border":"5px solid rgba(51, 51, 51,1.2)",
									"width":"300px",
									"z-index":"999",
									"border-radius":"5px",
									"padding":"20px",
									"background-color":"#fff",
									"left":l,
						  			"top":t,
						  			"opacity":"0"
								});
			$('#'+o.popupDiv).append('<div class="close" />');
			$('#'+o.popupDiv+' .close').css({"background":"url(http://labs.techumber.com/LABS/js/FbSubscribe/x.png) no-repeat",
										"width": "25px",
										"height": "29px",
										"display": "inline",
										"z-index":"3200",
										"position":"absolute",
										"top": "-15px",
										"right":"-16px",
										"cursor":"pointer"});
			$('#'+o.popupDiv).append('<form id="'+o.popupDiv+'Form" method="post" action="login.php">'
						+'User: <input type="text" name="user" id="user" required="required" />'
						+'Password: <input type="password" name="pass" id="pass"  required="required"/>'
						+'<input type="submit" value="Log in" id="Loginsbt">'
						+'</form>');
				//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
			//Set heigth and width to mask to fill up the whole screen
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			//transition effect		
			$('#mask').fadeIn(1000);	
			$('#mask').fadeTo("slow",0.5);	
			
			var wid="600px";
			//Simple Zoom animation
			$($this).css({'position':'fixed','height':'60px','width':300,
				'top':t,'left':l});
			$('#'+o.popupDiv).animate({'width':wid,'opacity':'1','left':l-150,'top':'100px'},1000);
			$($this).animate({'position':'fixed','width':wid,'left':l-150,'top':'100px'},1000);
		};
	};

	//Events and Excuting Plugin
	//***************************//
	var sl=new SuperLogin();
	 //will triger on crop button click 
	 $("body").on("submit", '#'+o.popupDiv+'Form', function(e){ 
		//Cancel the link behavior 
		sl.login($(this).serialize());
		e.preventDefault();
	});
	$('#loginitBtn').click(function(e) { 
		sl.PopBox(e,$(this));
	});
	$("body").on("click", "#"+o.popupDiv+" .close", function(e){
		//Cancel the link behavior
			e.preventDefault();
			$('#mask').remove();
			$("#"+o.popupDiv).remove();
			$('#loginitBtn').css({'position':'relative', 'height':'60px','width':'300px','top':'0','left':'0'});
	});
	$("body").on("click", "#mask", function(e){
		//Cancel the link behavior
			e.preventDefault();
			$('#mask').remove();
			$("#"+o.popupDiv).remove();
			$('#loginitBtn').css({'position':'relative', 'height':'60px','width':'300px','top':'0','left':'0'});
	});
});
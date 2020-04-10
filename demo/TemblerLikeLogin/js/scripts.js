 /*<!--
    o           		                      			    o8      
   o8                   		             			    88      
  o88oo ooooooo   oooo 88	  88	ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88	     88	   88	  88    88   88   88P"Y8bP"Y8b  d8   8b  88  	   88 
   88   8888888  88	   888888888    88   88   88   88   88  88   88  88888     88
   88   88 		 88	   88	  88	88   88   88   88   88  88   88  88   	   88    
   888  ooooooo   8ooo 88	  88	 V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

@url: www.techumber.com
-->
*/
$(document).ready(function() {
		$("#login").hide();
		$("#user").hide();
		$(".error").hide();

		$("#signup").click(function(){
			$("#user").slideToggle(100);
			$("#login").toggle();
			$("#signup").toggle();
		});

		$("#login").click(function(){
			$("#user").slideToggle(100);
			$("#login").toggle();
			$("#signup").toggle();
		});
		$("#start").click(function(e){ 
			 if($("#email").val()=="" || $("#pass").val()=="")
			 {
			 	$(".error").slideToggle(1000);
			 	e.preventDefault();
			 }
			 else
			 {
			 	e.preventDefault();
			 	$(".box").html("<h1>Thank you!<h1>");
			 }
		});

	});
	
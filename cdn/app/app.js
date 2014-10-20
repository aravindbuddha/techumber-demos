define(["jquery","easing","motio","preload","hover",'app/dpage',"site"],function($,easing,motio,preload,hover,Dpage,Site){
	return {
		init:function(){
			if(TU_PAGE == "index"){
				this.load_index();
			}else if(TU_PAGE == "item"){
				this.load_item();
			}
		},
		load_site:function(){

		},
		load_item:function(){
		   	require(['pretty','related','item'],function(){
	          $("body").addClass('item').removeClass('static index');
	          console.log("item array loadded....");
	        });
		},
		load_index:function(){
			 $("body").addClass('index').removeClass('static item');
		        require(["isotop","index"],function(){
		        	  console.log(" index loadded....");
		        });
		}
	}
});
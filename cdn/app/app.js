define(["jquery","easing","motio","preload","hover","site","dpage"],function($,easing,motio,preload,hover,site,dpage){
	return {
		init:function(){
			 if(TU_PAGE == "index"){
		        $("body").addClass('index').removeClass('static item');
		        require(["isotop","index"],function(){
		        	  console.log(" index loadded....");
		        });
		      }
		      if(TU_PAGE == "item"){
		        require(['pretty','related','item'],function(){
		          $("body").addClass('item').removeClass('static index');
		          console.log("item array loadded....");
		        });
		      }
		      // if(TU_PAGE == "static_page"){
		      //   head.load(static_array,function(){
		      //     $("body").addClass('static').removeClass('item index');
		      //     console.log("item array loadded....");
		      //   });
		      // }
		},
		load_site:function(){

		},
		load_item:function(){

		},
		load_index:function(){

		}
	}
});
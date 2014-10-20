define(["jquery","easing","motio","preload","hover",'app/dpage',"site"],function($,easing,motio,preload,hover,Dpage,Site){
	return {
		init:function(){
			this.load_site();
			if(TU_PAGE == "index"){
				this.load_index();
			}else if(TU_PAGE == "item"){
				this.load_item();
			}
		},
		load_site:function(){
			require(['app/site'],function(Site){
				Site.init();
			});
		},
		load_item:function(){
			$("body").addClass('item').removeClass('static index');
		   	require(['app/item'],function(Item){
		   		Item.init();  
	          	console.log("item array loadded....");
	        });
		},
		load_index:function(){
			 $("body").addClass('index').removeClass('static item');
		        require(["app/index"],function(Index){
		        	Index.init();
		        	console.log(" index loadded....");
		        });
		}
	}
});
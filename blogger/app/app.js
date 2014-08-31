define(['require'],function(require){
	var page_type=window.tu_page_type;
	return {
		init:function(){
			require(['css!template/css/common.css']);
			if(page_type =="index"){
				require(['css!template/css/page.css']);
			}
		}
	}
});

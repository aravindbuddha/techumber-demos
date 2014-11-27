window.SocialShare = window.SocialShare || (function(){
	var html="";
	return {
		init:function(ele){
			this.build_html(ele);
			this.set_links();

		},
		build_html:function(ele){
			html +=
				'<div class="tu-share clearfix">'+
				'<ul>'+
				'	<li class="twitter"><a target="_blank" href="">TWEET IT</a></li>'+
				'	<li class="fb"><a target="_blank" href=""></a>LIKE IT</li>'+ 
				'	<li class="gooplus"><a target="_blank" href="">GOOTLE+</a></li>'+ 
				'	<li class="linkedin"><a target="_blank" href="">LINKEDIN</a></li>'+ 
				'	<li class="dzone"><a target="_blank" href=""></a>PINIT</li>'+ 
				'	<li class="stumble"><a target="_blank" href="">STUMBLE</a></li>'+ 
				'<ul>'+
				'</div>'; 
			$(ele).html(html);	
		},
		set_links:function(){
			var 
			link =location.href,
			desc =$('[name=description]').attr('content'),
			title=encodeURIComponent($('title').html());

			$(".twitter a").attr("href","//twitter.com/intent/tweet?original_referer="+link+"&text="+title+"&tw_p=tweetbutton&url="+link+"&via=techumber");
			$(".fb a").attr("href","//www.facebook.com/plugins/like.php?href="+link);
			$(".gooplus a").attr("href","//plus.google.com/share?url="+link);
			$(".linkedin a").attr("href","//www.linkedin.com/shareArticle?mini=true&url="+link+"&title="+title+"&source=techumber.com");
			$(".dzone a").attr("href","//www.dzone.com/links/add.html?description="+desc+"&url="+link+"&title="+title);
			$(".stumble a").attr("href","//www.stumbleupon.com/submit?url="+link+"&title="+title);
			this.events;
		},
		events:function(){
			$(".tu-share").find('a').on("click",function(){
				var link=$(this).attr("href");
				window.open(link,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			});
		}
	}
}());
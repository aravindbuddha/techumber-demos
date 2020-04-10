var q=document.getElementById('q'),
out=document.getElementById('out'),
App={
  db:"",
  //initilization
	init:function(){
    this.getDB();
    this.events();
	},
  //loading feed json
  getDB:function(){
    var base=this;
    var url="js/data.json";
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(e) {
      if(this.status == 200) {
        base.db=JSON.parse(this.response);   
      }
    };
    xhr.send();
  },
  //for input keyup event
  events:function(){
    var base=this;
    q.addEventListener('keyup',function(){
      base.showResult(this.value);
    });
  },
  //formating result
  showResult:function(q){ 
    out.innerHTML=" ";
    var flag=false,base=this,result=" ",
    match = new RegExp(q,"ig"),
    entrs=this.db.feed.entry; 
    entrs.forEach(function(post){ console.log(q.length);
        if( q.length >= 3 && (post.title.$t.search(q) != -1 || post.summary.$t.search(q) != -1)){
          flag=true;
          result+='<div class="post">';
          result+='<h2><a target="_blank" href="'+base.getLink(post)+'">'+base.getTitle(post,match,q)+'</a></h2>';
          result+='<img src="'+base.getThumb(post)+'" />';
          result+='<p>'+base.getDesc(post,match,q)+'</p>';
          result+='</div>';
        }
    });
    if(flag){
      out.innerHTML=result;
    }
    else{
      out.innerHTML='<h2>Sorry! There is no result for your search tearm..</h2>'
    }
  },
  //get post link url
  getLink:function(post){
    for (var i = 0; i < post.link.length; i++) {
      if (post.link[i].rel == "alternate") {
        return post.link[i].href;
      }
    }
  },
  //get post title
  getTitle:function(post,match,q){
    return (post.title.$t.replace(match, "<mark>" + q + "</mark>"));
  },
  //get post description
  getDesc:function(post,match,q){
    return (post.summary.$t.replace(match, "<mark>" + q + "</mark>").substr(0,256)+"...");
  },
  //get post thumbnail
  getThumb:function(post){ console.log(post);
    if("media$thumbnail" in post)
      return post.media$thumbnail.url;
    else 
      return "http://3.bp.blogspot.com/_JUg9QsmKp5s/TNXA87HvkFI/AAAAAAAABRY/2aVYRBr6oqY/s000/NoThumb.gif";
  }
};
App.init();



if(navigator.appVersion.toLowerCase().indexOf('chrome') == -1){
  out.innerHTML="Please use google chrome...";        
}
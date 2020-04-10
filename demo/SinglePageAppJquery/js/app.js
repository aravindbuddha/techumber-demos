$(function(){
    //Fire fly plug in init
    $.firefly({images : [
         'js/firefly/1.jpg',
         'js/firefly/2.jpg'],
     total : 40});

    tuspa.init();
    $("#menu a").on('click',function(e){
       // e.preventDefault();
        var $this=$(this);
        tuspa.loadPage($this.attr('href'),$this);
        $this.addClass('active');
    });
});
//Techumber Single Page App Engine
var tuspa={
    init:function(){
        this.loadPage(this.getHash());
    },
    getHash:function(){
        if(window.location.hash) 
            return window.location.hash;
         else 
            return '#home'
    },
    loadPage:function(pg,ths){
        pg=pg.substr(1);
        var pgs = new Array("home","about","service","blog","contact");
        if(pgs.indexOf(pg) == -1){
            pg = '404';
        }
        var mc=$('.maincontent');
        $("#menu a").removeClass('active');
        mc.css({'margin-top': "-600px"});
        mc.addClass('goTop');
        $('#'+pg).removeClass('goTop');
        $('#'+pg).animate({'margin-top': "0px"},{duration: 'slow',easing: 'easeOutElastic'});
        },
};




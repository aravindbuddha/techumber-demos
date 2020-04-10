/*
*  Project:3D slider Plugin using css3 and jquery
*   Website: www.techumber.com
*  Description:3D slide Show Plugin using css3 and jquery
*  Author:Aravind buddha
*
* Copyright 2013, Techumber.com
* Free to use under the MIT license.
*
* Date: TUS March 19 2013
*/
;(function ( $, window, document, undefined ) {
var pluginName = "Slider3D",
    defaults = {
        current: "0",
        auto: false,
        speed: 3000
    };

function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this._swrap="";
    this._next="";
    this._prev="";
    this._current="";
    this._cindex="";
    this._max="";
    this.list="";
    this.init();
}
//Actual plugin starts
Plugin.prototype = {
    init: function() {
         var self=this;
       _swrap=$(this.element).wrap('<div class="ss-wrap" />').parent();
       _swrap.append('<nav><span class="prev">&lt;</span><span class="next">&gt;</span></nav>');
       _swrap.css({
                'perspective': '800',
                'width': '800px',
                'height': '300px',
                'overflow': 'hidden',
                'width': '1000px',
                'height': '350px'
            });
       list=_swrap.find('li').toArray();
       _max=list.length;
       $(list).css({'opacity':'0',
       'float': 'left',
        'width': '227px',
        'height': '267px',
        'padding': '10px',
        'paddingTop': '45px',
        'position': 'absolute',
        'transition': 'all 4s'            
       });
       $(list[this.options.current]).addClass("current");
       _current=_swrap.find(".current");
       var index=_current.index();
       self.go(index);
        _next=_swrap.find(".next");
        _prev=_swrap.find(".prev");
        _next.click(function(){
        if(index >= _max-1)
        {
            index=-1;
        }
        self.go(++index);
        });
        _prev.click(function(){
            if(index <=0)
                index=_max;
            self.go(--index);
        });
        //if auto slider enabled
        if(this.options.auto == true)
        {
            setInterval(function(){
            if(index >= _max-1)
            {
                index=-1;
            }
            self.go(++index);},this.options.speed);
        }
    },
    setCurrent:function(i){
    $(list[i]).css({'opacity':'1',
                    'paddingTop': '0',
                    'width': '493px',
                    'height': '313px',
                    'left': '245px',
                    'transform': 'rotateY(0deg) translateZ(0px)',
                    'z-index':"99"
                }).addClass("current");
    },
    setPrev:function(i){
    $(list[i]).css({'opacity':'1',
                    'left': '0',
                    'width': '227px',
                    'height':'267px',
                    'paddingTop': '45px',
                    'z-index':"98",
                    'transform': 'rotateY(-35deg) translateZ(-68px)'
                });
    },
    setNext:function(i){
    $(list[i]).css({'opacity':'1',
                    'transform': 'rotateY(35deg) translateZ(-68px)',
                    'width': '227px',
                    'height':'267px',
                    'paddingTop': '45px',
                    'z-index':"97",
                    'left': '755px'
                });
    },
    setNextNext:function(i){
     $(list[i]).css({'opacity':'0',
                    'transform': 'rotateY(35deg) translateZ(-68px)',
                    'width': '227px',
                    'height':'267px',
                    'paddingTop': '45px',
                    'z-index':"96",
                    'left': '755px'
                });
    },
    setPrevPrev:function(i){
     $(list[i]).css({'opacity':'0',
                    'left': '0',
                    'width': '227px',
                    'height':'267px',
                    'paddingTop': '45px',
                    'z-index':"95",
                    'transform': 'rotateY(-35deg) translateZ(-68px)'
                });
    },
    go: function(i) {
    var self=this;
    if(i==0){
        self.setPrevPrev(_max-2);
        self.setPrev(_max-1);
        self.setCurrent(0);
        self.setNext(1);
        self.setNextNext(2);
    }
    else if(i == _max-1){
        self.setPrevPrev(_max-3);
        self.setPrev(_max-2);
        self.setCurrent(_max-1);
        self.setNext(0);
        self.setNextNext(1);
    }
    else{
        self.setPrevPrev(i-2);
        if(i==1)
            self.setPrevPrev(_max-1);
        self.setPrev(i-1);
        self.setCurrent(i);
        self.setNext(i+1);
        self.setNextNext(i+2);
    }
    },
};
// A really lightweight plugin wrapper around the constructor,
// preventing against multiple instantiations
$.fn[pluginName] = function ( options ) {
    return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
        }
    });
};
})( jQuery, window, document );
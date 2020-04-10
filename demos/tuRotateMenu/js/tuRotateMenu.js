/*--------------------------------------------------------------------------------------------
|    @desc:         simple rotating menu with jquery
|    @author:       Aravind Buddha
|    @url:          http://www.techumber.com
|    @date:         10 September 2012
|    @email:        aravind@techumber.com
|    @license:      Free! to Share,copy, distribute and transmit , 
|                   but i'll be glad if my name listed in the credits'
---------------------------------------------------------------------------------------------*/
var tuRotateMenu=function(options){
            this.o=options;
            this.count=0;
            this.cx=($(document).width() / 2)-100;
            this.cy=($(document).height() / 2);
            var iteam=$("."+this.o.iClass);
            this.total=iteam.length;
            var self=this;
            var speed=this.o.maxS;
             //initilize function
             this.init=function(){
                iteam.bind("mouseenter",self.speedDown);
                iteam.bind("mouseleave",self.speedUp);
                setInterval(self.rotate, 10);
            };
            //rotate function
            this.rotate=function(){
                iteam.each(function(){
                    var agl = self.count * (Math.PI / 180);
                    var newx = self.cx + Math.cos(agl) * self.o.radious;
                    var newy = self.cy + Math.sin(agl) * self.o.radious;
                    $(this).css("left", newx + "px").css("top", newy + "px");
                    self.count+= 360 / self.total + speed;
                });
            };
            //trigger when mouse unhover
            this.speedUp=function(){

                speed=self.o.maxS;
            };
            //trigger when mouse hover
            this.speedDown=function(){
                
                speed=self.o.minS;
            };
        };
        //this function will be called when we use it
        function rotateMenu(options)
        {
            //object for turotateMenu
            var oRM=new tuRotateMenu(options);
            oRM.init();
        }
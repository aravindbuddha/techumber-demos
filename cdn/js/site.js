//calling animation
var Site = (function() {
    return {
        init: function() {
            this.moto_init();
            // this.mob_nav_init();
            this.jpre_loader_init();
            this.accordx('#sidebar-wtengah');
            this.hoverxa();
            this.datenya();
            this.build_prefetch();
        },
        moto_init: function() {
            var
                frame = $('#header-wrapper')[0],
                motio = new Motio(frame, {
                    fps: 30,
                    speedX: 60,
                    bgWidth: 1024,
                    bgHeight: 1024
                });
            motio.play();
            // Update the animation speed & direction based on a cursor position
            $('#header-wrapper').on('mousemove', function(event) {
                motio.set('speedX', event.pageX - 0 - motio.width / 2);
                motio.set('speedY', event.pageY - 0 - motio.height / 2);
            });
            $('#header-wrapper').on('mouseout', function(event) {
                motio.set('speedX', 30);
                motio.set('speedY', 0);
            });
        },
        mob_nav_init: function() {
            $("#navinti ul").removeClass("hidden");
            $("#navinti li").hoverTimeout(100, function() {
                $(this).parent("ul").css("overflow", "visible");
                $(this).children("ul").filter(":not(:animated)").slideDown()
            }, 500, function() {
                $(this).parent("ul").css("overflow", "visible");
                $(this).children("ul").slideUp(800, "easeInExpo")
            });
            $("#mobilenav").toggle(function() {
                $(this).addClass("active");
                $("#navinti").slideDown();
                return false
            }, function() {
                $(this).removeClass("active");
                $("#navinti").slideUp();
                return false
            });

            function a() {
                if ($(window).width() > 767) {
                    $("#navinti").css("display", "block")
                } else {
                    if ($(window).width() <= 767 && $("#mobilenav").attr("class") === "active") {
                        $("#navinti").css("display", "block")
                    } else {
                        if ($(window).width() <= 767 && $("#mobilenav").attr("class") !== "active") {
                            $("#navinti").css("display", "none")
                        }
                    }
                }
            }
            $(window).resize(a);
        },
        jpre_loader_init: function() {
            $('body').jpreLoader({
                splashID: "#jSplash",
                showSplash: true,
                showPercentage: false,
                autoClose: true,
                splashFunction: function() {
                    $('#ball, #ball-0, #ball-1').delay(250).animate({
                        'opacity': 1
                    }, 1500, 'easeOutExpo');
                }

            }, function() { //callback function
                $("#outer-wrapper")
                    .delay(150)
                    .animate({
                        'opacity': 1,
                        'marginTop': 0
                    }, 500, 'easeOutExpo');
                $("#header-wrapper")
                    .delay(200)
                    .animate({
                        'opacity': 1,
                        'marginTop': 0
                    }, 500, 'easeOutExpo');
                $("#main-wrapper")
                    .delay(250)
                    .animate({
                        'opacity': 1,
                        'marginLeft': 0
                    }, 500, 'easeOutExpo');
                $("#sidebar-wrapper")
                    .delay(300)
                    .animate({
                        'opacity': 1,
                        'marginRight': 0
                    }, 500, 'easeOutExpo');
            });
        },
        accordx: function(b) {
            $(b + " .widget-content").hide();
            $(b + " h2:last").addClass("active").next().slideDown("slow");
            $(b + " h2").css("cursor", "pointer").click(function() {
                if ($(this).next().is(":hidden")) {
                    $(b + " h2").removeClass("active").next().slideUp("slow");
                    $(this).toggleClass("active").next().slideDown("slow")
                }
            });
        },
        hoverxa: function() {
            $(".post").hover(function() {
                $(".jump-link", this).animate({
                    opacity: 1,
                    bottom: 0
                }, 500)
            }, function() {
                $(".jump-link", this).animate({
                    opacity: 0,
                    bottom: -25
                }, 700)
            });
            $("a").hover(function() {
                $("img", this).animate({
                    opacity: 0.5
                }, 500)
            }, function() {
                $("img", this).animate({
                    opacity: 1
                }, 300)
            });
        },
        build_prefetch: function() {
            $('a,img,script').each(function(){
                $(this).attr('rel','prefetch');
            });
        },
        datenya: function() {
            $(".timestamp-link .updated.published").each(function() {
                var g = $(this).attr("title");
                var a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                if (g != "") {
                    var i = g.substring(0, 10),
                        f = i.substring(0, 4),
                        b = i.substring(5, 7),
                        e = i.substring(8, 10),
                        c = a[parseInt(b, 10) - 1]
                }
                var d = $(this).parents(".post");
                var h = d.children(".datex");
                $("strong", h).html(e);
                $("small", h).html(f);
                $("span", h).html(c)
            });
        },
    }
}());

Site.init();
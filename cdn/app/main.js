requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(),
    baseUrl: '//demos.techumber.com/cdn/',
    paths: {
        app: 'app',
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        easing:"js/lib/easing",
        motio:"js/lib/motio",
        preload:"js/lib/preload",
        hover:"js/lib/hover",
        site:"js/site",
        dpage:"app/dpage",
        //index pages
        isotop:"js/lib/isotope",
        index:"js/index",
        //item
        pretty:"js/lib/prettify/prettify",
        related:"js/lib/related-posts",
        item:"js/item"
    }
});

// Start the main app logic.
requirejs(['app/app'],function   (App) {
    App.init();
});




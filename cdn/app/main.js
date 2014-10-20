requirejs.config({
    baseUrl: '//demos.techumber.com/cdn/',
    paths: {
        app: '/app',
       "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        easing:"js/lib/easing",
        motio:"js/lib/motio",
        preload:"js/lib/preload",
        hover:"js/lib/hover",
        site:"js/site",
        dpage:"app/dpage"
    }
});

// Start the main app logic.
requirejs(['app/app'],function   (App) {
    App.init();
});




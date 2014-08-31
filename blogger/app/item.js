define(['jquery', 'lib/prettyfiy/prettify', 'css!lib/prettyfiy/prettify.css'], function ($) {
  return {
    init: function () {
      var self = this;
      $(function () {
        self.demo_dl_linker();
      })
    },
    demo_dl_linker: function () {
      var demoa = $('.demo');
      var demoaval = demoa.attr("href");
      var title = $('.post-title').text();
      var newdemoval = demoaval + "&backto=" + window.location.href + "&title=" + title;
      demoa.attr('href', newdemoval);
      demoa.append('<link rel="prefetch" href="' + newdemoval + '" />');
      var downa = $('.download');
      var downaval = downa.attr("href");
      var newdownval = downaval + "&backto=" + window.location.href + "&title=" + title;
      downa.attr('href', newdownval);
      downa.append('<link rel="prefetch" href="' + newdownval + '" />');
      $('.code').addClass('prettyprint linenums');
      prettyPrint();
    },
  }
});
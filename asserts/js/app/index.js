var tudemo = (function () {
  var tuRss = "http://www.techumber.com/feeds/posts/default?orderby=published&max-results=2000&alt=json-in-script&callback=tudemo.loadContent";
  return {
    init: function () {
      this.loadGoogleau();
      this.loadTUBlogger();
    },
    loadContent: function (json) {
      console.log(json);
      var html = '<ul class="inner"><li><i>#</i><b>Title</b><a>Post</a></li>';
      for (var i in json.feed.entry) {
        var entry = json.feed.entry[i],
          posttitle = entry.title.$t,
          url = entry.link[4].href;
        content = entry.content.$t;
        html +=
          '<li>' +
          '<i>' + i + '</i>' +
          '<b>' + posttitle + '</b>' +
          '<a href="' + url + '" target="_blank" title="" >Article</a>' +
          '<div class="content">' + content + '</div>' +
          '<div class="clear"></div>' +
          '</li>';
      }
      html += '</ul>';
      document.getElementById('result').innerHTML = html;
    },
    loadGoogleau: function () {
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-34492638-1']);
      _gaq.push(['_setDomainName', 'techumber.com']);
      _gaq.push(['_trackPageview']);

      (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
      })();
    },
    loadScrip: function (url) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = url;
      (document.body || document.head[0]).appendChild(s);
    },
    loadTUBlogger: function () {
      this.loadScrip(tuRss);
    }
  }
}());

tudemo.init();
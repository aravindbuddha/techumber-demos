define(['jQuery'],
  function ($) {
    var Dpage = (function () {
      var
      $myDomain = window.location.host,
        $main = $('#main-wrapper');
      return {
        inti: function () {
          this.event();
        },
        event: function () {
          var self = this;
          $('a').on('click', function (e) {
            e.preventDefault();
            history.pushState(null, null, url);
            var url = $(this).attr('href');
            self.loadContent(url);
          });
        },
        loadContent: function (url) {
          var self = this;
          if (this.isMyDomain(url)) {
            console.log("loading " + url + ">>>>>>>>>>");
            $main.load(url + " #main", function () {
              self.triggers();
            });
          }
        },
        isMyDomain: function (url) {
          if (url.indexOf($myDomain) > -1) {
            return true;
          }
          return false;
        },
        triggers: function () {
          this.pretty();
          this.loadComments();
          this.loadRelatedPost();
        },
        pretty: function () {
          var demoa = $('.demo'),
            demoaval = demoa.attr("href"),
            title = $('.post-title').text(),
            newdemoval = demoaval + "&backto=" + window.location.href + "&title=" + title,
            downa = $('.download'),
            downaval = downa.attr("href"),
            newdownval = downaval + "&backto=" + window.location.href + "&title=" + title;

          demoa.attr('href', newdemoval);
          demoa.append('<link rel="prefetch" href="' + newdemoval + '" />');
          downa.attr('href', newdownval);
          downa.append('<link rel="prefetch" href="' + newdownval + '" />');
          $('.code').addClass('prettyprint linenums');
          prettyPrint();
        },
        loadRelatedPost: function () {
          relatedPostsWidget({
            related_title: "Related Posts",
            containerSelector: "#related_posts",
            maxPosts: 6,
            loadingClass: "loadingxx",
            rlt_thumb: 70
          });
        },
        loadComments: function () {
          BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html', '05812328105391254280');
        }
      }
    }());
    return Dpage
  });
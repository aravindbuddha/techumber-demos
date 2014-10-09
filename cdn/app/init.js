console.log("hi");


// var Dpage=(function(){
//   var
//     $my_domain = window.location.host,
//     $main = $('#main-wrapper');
//   return {
//     init: function () {
//       this.events();
//       ///
//     },
//     events: function () {
//       var self = this;
//       $('a').on('click', function (e) {
//         e.preventDefault();
//         history.pushState(null, null, url);
//         var url = $(this).attr('href');
//         self.load_content(url);
//       });
//     },
//     load_content: function (url) {
//       var self = this;
//       if (this.is_my_domain(url)) {
//         console.log("loading " + url + ">>>>>>>>>>");
//         $main.load(url + " #main", function () {
//           self.triggers();
//         });
//       }
//     },
//     is_my_domain: function (url) {
//       if (url.indexOf($my_domain) > -1) {
//         return true;
//       }
//       return false;
//     },
//     triggers: function () {
//       this.pretty();
//       this.load_comments();
//       this.load_related_post();
//     },
//     pretty: function () {
//       var demoa = $('.demo'),
//         demoaval = demoa.attr("href"),
//         title = $('.post-title').text(),
//         newdemoval = demoaval + "&backto=" + window.location.href + "&title=" + title,
//         downa = $('.download'),
//         downaval = downa.attr("href"),
//         newdownval = downaval + "&backto=" + window.location.href + "&title=" + title;
//         demoa.attr('href', newdemoval);
//         demoa.append('<link rel="prefetch" href="' + newdemoval + '" />');
//         downa.attr('href', newdownval);
//         downa.append('<link rel="prefetch" href="' + newdownval + '" />');
//         $('.code').addClass('prettyprint linenums');
//         prettyPrint();
//     },
//     load_related_post: function () {
//       var self = this;
//       RelatedPosts({
//         related_title: "Related Posts",
//         containerSelector: "#related_posts",
//         maxPosts: 6,
//         loadingClass: "loadingxx",
//         rlt_thumb: 70,
//         callback: function () {
//           self.init();
//         }
//       });
//     },
//     load_comments: function () {
//       BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html', '05812328105391254280');

//       //
//     }
//   }

// }());

// Dpage.init();
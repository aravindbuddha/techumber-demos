var Paypal = function() {
  var _on, url = "php/paypal.php";
  //helper functions for handeling corssbrowser events
  _on = function(el, event, fn) {
    document.attachEvent ? el.attachEvent('on' + event, fn) : el.addEventListener(event, fn, !0);
  };
  //Plugin code starts here
  this.amt = 0;
  this.init = function() {
    this.events();
  };
  this.events = function() {
    var self = this,
      buy = document.getElementById('buy');
    _on(buy, "click", function() {
      var amt = this.getAttribute('data-amt');
      self.popup(amt);
    });
  };
  this.getLink = function(amt) {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + "?amount=" + amt, true);
    xhr.onload = function() {
      var json = xhr.response;
      var json = JSON.parse(json);
      self.popupEvents(json.url)
    };
    xhr.send();
  };
  this.popup = function(amt) {
    var html = '',
      d = document.createElement('div');
    html += '<div class="window">';
    html += '<a class="close">X</a>';
    html += '<div class="loader"></div>';
    html += '<iframe id="paypalFrame" src=""></iframe>'
    html += '</div>';
    d.innerHTML = html;
    document.body.appendChild(d.firstChild);
    this.getLink(amt);
  };
  this.popupEvents = function(url) {
    var win = document.querySelector('.window'),
      loader = document.querySelector('.loader'),
      close = document.querySelector('.close');
    frame = document.querySelector('#paypalFrame');
    frame.src = url;
    frame.onload = function() {
      loader.style.display = "none";
    }
    _on(close, 'click', function() {
      win.parentNode.removeChild(win);
    });
  };
  this.procssResponse = function(res) {
    alert(res.status);
  };
  this.init();
};

var paypal = new Paypal();
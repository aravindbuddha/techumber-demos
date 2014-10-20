function loadJS(urls, callback) {
  var i,
    assert = [],
    loadedScipts = 0;
  //loop throught urls array
  for (i = 0; i < urls.length; i++) {
    assert.push(urls[i]);
    load(urls[i], callback);
  }
  //Single script loading
  function load(url) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          loadedScipts++
        }
      };
    } else { //Others
      script.onload = function () {
        loadedScipts++
      };
    }
    script.src = url;
    document.body.appendChild(script);
  }
  // to check if all scripts loaded or not
  function isAllLoaded() {
    if (loadedScripts === urls.length) {
      return true;
    }
    return false
  }
  //If callback exists
  if (callback) {
    setTimeout(function () {
      if (isAllLoaded) {
        callback();
        clearTimeout(this);
      }
    }, 50);
  }
}
 
 
// Check if dom is ready
function DOMReady(callback) {
  if (document.addEventListener) { // native event
    document.addEventListener("DOMContentLoaded", callback, false);
  } else if (window.addEventListener) {
    window.addEventListener('load', callback, false);
  } else if (document.attachEvent) {
    window.attachEvent('onload', callback);
  }
}
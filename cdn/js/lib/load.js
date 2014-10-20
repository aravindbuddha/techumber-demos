var TU=(function(){
	var queue,
	 uid = new Date().getTime();
	return{
		loadScript: function(url, callback) {
	        url = url + ".js";
	        var script = document.createElement('script');
	        script.type = 'text/javascript';

	        if (script.readyState) { //IE
	            script.onreadystatechange = function() {
	                if (script.readyState == 'loaded' ||
	                    script.readyState == 'complete') {
	                    script.onreadystatechange = null;
	                    callback();
	                }
	            };
	        } else { //Others
	            script.onload = function() {
	                callback();
	            };
	        }
	        script.src = url;
	        document.getElementsByTagName('head')[0].appendChild(script);
	    },
	    load: function(urls, callback) {
            var 
            self = this,
            // queue[uid] = [];
             uid = new Date().getTime();
            urls.forEach(function(path, index, array) {
                queue[uid].push(path);
            });
            self.process_queue(callback, uid);
        },
        process_queue: function(callback, uid) {
            var self = this;
            //console.log(queue.length);
            if (queue[uid].length > 0) {
                var first_on_queue = queue[uid].shift();
                self.lScript(first_on_queue, function() {
                    self.process_queue(callback, uid);
                });
            } else {
                callback();
            }
        },
        lScript: function(url, callback) {
	        var self = this,
	            arrType, type, s, nodeType, node, tag_id = url.split("?")[0];
	        if (document.getElementById(url) == null) {
	            arrType = url.split(".");
	            type = arrType[arrType.length - 1];
	            if (url.indexOf(".css") != -1) {
	                nodeType = "link";
	                node = document.createElement(nodeType);
	                node.setAttribute("rel", "stylesheet");
	                node.setAttribute("type", "text/css");
	                if (url.indexOf("?") != -1)
	                    node.setAttribute("href", url);
	                else
	                    node.setAttribute("href", url);

	            } else {
	                nodeType = "script";
	                node = document.createElement(nodeType);
	                node.setAttribute("type", "text/javascript");
	                if (url.indexOf("?") != -1)
	                    node.setAttribute("src", url);
	                else
	                    node.setAttribute("src", url);
	            }
	            node.setAttribute("id", url);
	            if (node.readyState) {
	                node.onreadystatechange = function() {
	                    if (node.readyState == 'loaded' || node.readyState == 'complete') {
	                        node.onreadystatechange = null;
	                        callback();
	                    }
	                };
	            } else {
	                if (url.indexOf(".css") != -1) {
	                    callback();
	                } else {
	                    node.onload = function() {
	                        callback();
	                    };
	                }
	            }


	            //console.log(document.getElementsByTagName('head')[0].appendChild(node));
	            document.getElementsByTagName('head')[0].appendChild(node);

	            //s = document.getElementsByTagName('script')[0];
	            //s.parentNode.insertBefore(node, s);
	        } else {
	            //console.log("already exist");
	            callback();
	        }
	    },
   		load_on_dom_ready:function(callback){
   			if (document.addEventListener) { // native event
			    document.addEventListener("DOMContentLoaded", callback, false);
			  } else if (window.addEventListener) {
			    window.addEventListener('load', callback, false);
			  } else if (document.attachEvent) {
			    window.attachEvent('onload', callback);
			  }
   		}
	}
}());

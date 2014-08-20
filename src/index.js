var jade = require('jade');

options={pretty:true};
locals={};
// Compile a function
var fn = jade.compileFile('index.jade', options);

// Render the function
var html = fn(locals);
// => '<string>of jade</string>'
var fs = require('fs');
fs.writeFile("out/index.html", html, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(html);
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
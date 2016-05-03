/*Dependencies*/
var express = require('express'),
	app = express();
var cgi = require('cgi');
var path = require('path');
var http = require('http').Server(app);
var mainCgi = path.resolve(__dirname, 'bin.cgi');

app.get('/cgi', cgi(mainCgi));
app.use(express.static(path.resolve(__dirname, 'public')));

/* What port should the server start on*/
var port = (process.env.PORT || 9000);

/* Start the server */
app.listen(port, function(err){
	if(err) throw err;
	console.log('App listening on port: ', port);
})
/*var cgi = require('cgi');
var http = require('http');
var path = require('path');

var mainCgi = path.resolve(__dirname, 'bin.cgi');

http.createServer( cgi(mainCgi) ).listen(9000);*/
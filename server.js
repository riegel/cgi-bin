/*Dependencies*/
var express = require('express'),
	app = express();
var cgi = require('cgi');
var path = require('path');
var http = require('http').Server(app);
var cgiBin = 'cgi-bin';
var mainCgi = path.resolve(__dirname+'/'+cgiBin);
var mainPub = path.resolve(__dirname+'/public');
var cgiBin = 'cgi-bin';

app.get('/'+cgiBin+'/:script*',
 function(req,res){
  var script = req.params.script;
  var path_info = req.url.split(req.params.script)[1]
  var execcgi = cgi(mainCgi + '/' + script, {
    mountpoint : cgiBin,
    env : {
     API_VERSION          : '.1',
//     AUTH_TYPE            : '',
//     CONTENT_LENGTH       : '',
//     CONTENT_TYPE         : '',
     DOCUMENT_ROOT        : mainPub,
//     GATEWAY_INTERFACE    : '',
//     HTTP_ACCEPT_LANGUAGE : '',
//     HTTP_ACCEPT          : '',
//     HTTP_ACCEPT_ENCODING : '',
//     HTTP_AUTHORIZATION   : '',
//     HTTP_CONNECTION      : '',
//     HTTP_COOKIE          : '',
     HTTP_HOST            : req.hostname,
//     HTTP_REFERER         : '',
//     HTTP_USER_AGENT      : '',
//     HTTPS                : '',
//     PATH                 : '',
     PATH_INFO            : path_info,
//     PATH_TRANSLATED      : '',
//     QUERY_STRING         : '',
//     REDIRECT_STATUS      : '',
//     REDIRECT_URL         : '',
//     REMOTE_ADDR          : '',
//     REMOTE_PORT          : '',
//     REQUEST_METHOD       : '',
     REQUEST_URI          : req.url,
     SCRIPT_FILENAME      : mainCgi+'/'+script,
     SCRIPT_NAME          : '/cgi-bin/'+script,
//     SERVER_ADDR          : '',
//     SERVER_ADMIN         : '',
//     SERVER_NAME          : '',
//     SERVER_PORT          : '',
//     SERVER_PROTOCOL      : '',
//     SERVER_SIGNATURE     : '',
//     SERVER_SOFTWARE      : ''
    }
  });
//  console.log(req);
  execcgi(req,res);
 }
);



app.use(express.static(path.resolve(__dirname, 'public')));

/* What port should the server start on*/
var port = (process.env.PORT || 80);

/* Start the server */
app.listen(port, function(err){
	if(err) throw err;
	console.log('App listening on port: ', port);
})

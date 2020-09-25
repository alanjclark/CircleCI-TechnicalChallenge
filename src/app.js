var http = require('http');
http.createServer(onRequest).listen(8001);

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});   // Sets header info
    response.write('<div style="text-align: center;">');
    response.write('<h2>CircleCI Technical Challenge</h2>');
    response.write('<button id="button" type="button" onClick="getElementById(\'click\').innerHTML = \'Clickity click!\'">CLICK THIS!</button>');
    response.write('<p id="click"></p>');
    response.end();
}
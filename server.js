const WebSocketServer = require('websocket').server;
const http = require('http');
const logger = require("./logger/logger").Logger;
const socketObj = require("./socketcall");
const db = require('./models');
const socketcall = new socketObj();




let server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
db.sequelize.sync().then(function() {
server.listen(8000, function() {
    console.log((new Date()) + ' Server is listening on port 8000');
	
});
});



wss = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

let sockets = [];
let devices = [];

wss.on('request', function(request) {
    if ( request.httpRequest.headers['sec-websocket-protocol'] !== 'ocpp1.6' ) {
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }


    let chargerName = request.httpRequest.url;
    let ws = request.accept('ocpp1.6', request.origin);

    ws.id = splitStr(chargerName);

    sockets.push(ws);
    devices.push(ws.id);
    console.log('A new client connection:'+ws.id);
    ws.on('message', function(message) {
       
	   let obj;
	   try {
             obj = JSON.parse(message.utf8Data);
        } catch (e) {
             obj = message.utf8Data;
        }
		
       logger.info(message.utf8Data);
      
	  let response = socketcall.callResponse(ws.id,message.utf8Data);

       console.log(response);
        
        

        sockets.forEach(function each(s) {
            if(s.id === ws.id){
                s.send(response);
            }

        });

        
      
    });
    wss.on('close', function(reasonCode, description) {

        sockets = sockets.filter(function(item) {
            return item !== ws;
          });
        devices = devices.filter(s => s !== ws.id);
       // console.log((new Date()) + ' Peer ' + ws.remoteAddress + ' disconnected.');
        console.log('A new client disconnected:'+ws.id);
    });
});

function splitStr(str) { 
     string = str.split("/");
     return string[string.length - 1];
  
} 





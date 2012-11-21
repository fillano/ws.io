ws.io
=====

A simple wrap to node.js ws module and then we can use it in a manner like socket.io. It's really easy to use socket.io but it doesn't support Blob yet. So I write a simple wrap to ws module for this purpose. This is also a part of works from a contest by ithelp.ithome.com.tw.

Features:
---------
1. trnasfer Blob/ArrayBuffer by put it in an object and emit it just as socket.io
2. broadcast to all but not me
3. emit to specified peer by to(socket.id)
4. join/leave/in room
5. in-memory store

Limits:
-------
1. can only send one Blob/ArrayBuffer within one emit
2. the Blob/ArrayBuffer object must be a property of the emitting object in the first level, no deeper
3. no configuration support
4. no 3rd party data store support
5. cannot scale 
6. client support is now through a static url: /ws.io/ws.io.js

usage
=====
a simple echo server
<pre>
var app = require('http').createServer(handler),
io = require('./ws.io').listen(app);
app.listen(8443);

function handler (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.writeHead(200);
	res.end("<!DOCTYPE html>"+
		"<html>"+
		"<head>"+
		"<script src='/ws.io/ws.io.js'></script>"+
		"<script>"+
		"var socket = io.connect('ws://localhost:8443');"+
		"socket.on('echo', function(data) {"+
		"	alert(data);"+
		"});"+
		"</script>"+
		"<body>"+
		"<button id='echo'>echo</button>"+
		"</body>"+
		"</html>"+
		"<script>"+
		"var button = document.getElementById('echo');"+
		"button.onclick = function() {"+
		"	socket.emit('echo', 'hello echo server.');"+
		"}"+
		"</script>");
}

io.sockets.on('connection', function (socket) {
	socket.on('echo', function(data) {
		socket.emit('echo', data);
	});
});
</pre>

will add a blob transfering example soon.
ws.io
=====

A simple wrap to node.js ws module and then we can use it in a manner like socket.io. It's really easy to use socket.io but it doesn't support Blob yet. So I write a simple wrap to ws module for this purpose. This is also a part of works from a contest by ithelp.ithome.com.tw.

Features:
1. trnasfer Blob/ArrayBuffer by put it in an object and emit it just as socket.io
2. broadcast to all but not me
3. emit to specified peer by to(socket.id)
4. join/leave/in room
5. in-memory store

Limits:
1. can only send one Blob/ArrayBuffer within one emit
2. no configuration
3. no 3rd party data store support
4. cannot scale 
5. client support is in a single static ws.io.js file


var Namespace = require('./Namespace');

var Manager = module.exports = function(server) {
	this.server = server;
	this.namespaces = {};
	this.store = {};
	this.handlers = {};
	this.blobinfo = {};
};

Manager.prototype.of = function(ns) {
	var namespace = new Namespace(this.server, this, ns);
	this.namespaces[ns] = namespace;
	return namespace;
};

Manager.prototype.__defineGetter__('sockets', function() {
	return this.of('/');
});

var server = require("./server");
var router = require("./router");
var handle = require("./requestHandler");

// server.iniciar(router.route,handle.createNewWeatherConsultant);

server.startServer(router.route,handle.createNewWeatherConsultant);
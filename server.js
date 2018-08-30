var http = require("http");
var url = require("url");

function iniciar(route,createNewWeatherConsultant) {
  function onRequest(request, response) {
    var city = url.parse(request.url).pathname;

 	let apiKey = "dec31a85e9894f879fa184614182908";

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Resultados por consola ... :) ");

  	if (city !== '/favicon.ico') {
   		route(createNewWeatherConsultant,apiKey,city);
  	}

    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
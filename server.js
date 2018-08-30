var express = require('express');
const app = express();


// EXPRESS VERSION
function startServer(route,createNewWeatherConsultant){

  app.all(`/weather/:city`, function (req, res) {
     res.send('Searching for  : '+req.params.city);
     var city = req.params.city;
     let apiKey = "dec31a85e9894f879fa184614182908";
     route(createNewWeatherConsultant,apiKey,city);
  });

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
  });

}
exports.startServer = startServer;












// SIMPLE VERSION
// var http = require("http");
// var url = require("url");

// function iniciar(route,createNewWeatherConsultant) {
//   function onRequest(request, response) {
//     var city = (url.parse(request.url).pathname+"").split("/weather/")[1];
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("Resultados por consola ... :) ");
//   	let apiKey = "dec31a85e9894f879fa184614182908";
//   	if (city !== '/favicon.ico' && city !== undefined && city !== null) {
//    		route(createNewWeatherConsultant,apiKey,city);
//   	}
//     response.end();
//   }
//   http.createServer(onRequest).listen(3000);
//   console.log("Servidor Iniciado.");
// }

// exports.iniciar = iniciar;

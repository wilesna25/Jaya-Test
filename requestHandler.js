

function createNewWeatherConsultant(apiKey,city){
    console.log("Searching for city : "+city);

    let request = require('request');
    let url = `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`

    request(url, function (err, response, body) {
      if(err){
        console.log('error:', error);
      } else {
        console.log("success conn");
        return downloadPDF(city,body) + "";
      }
    });
}

function downloadPDF (city,body){
    let weather = JSON.parse(body);
	// Variables:
	// City name, Region, Country, Latitude, Longitude, Local Time, Temperature in celcius and farenheit , humidity and wind speed in Km/H and MPH .
		var city = city.replace('/','');
        var PDFDocument, doc;
		var fs = require('fs');
		
		PDFDocument = require('pdfkit');
		doc = new PDFDocument;

        doc.text (`Clima actual en  : ${city}`).moveDown(0.5);	
        doc.text (`City : ${weather.location.name}`).moveDown(0.5);	
        doc.text (`Region : ${weather.location.region}`).moveDown(0.5);	
        doc.text (`Country : ${weather.location.country}`).moveDown(0.5);	
        doc.text (`Latitude : ${weather.location.lat}`).moveDown(0.5);	
        doc.text (`Longitude : ${weather.location.lon}`).moveDown(0.5);	
        doc.text (`Local Time : ${weather.location.localtime}`).moveDown(0.5);	
        doc.text (`Temperature : ${weather.current.temp_c} in celcius`).moveDown(0.5);	
        doc.text (`Temperature : ${weather.current.temp_f} in farenheit`).moveDown(0.5);	
        doc.text (`Humidity : ${weather.current.humidity}`).moveDown(0.5);	
        doc.text (`Wind Speed  : ${weather.current.humidity} in Km/H`).moveDown(0.5);	
        doc.text (`Wind Speed  : ${weather.current.humidity} in MPH`).moveDown(0.5);	
		doc.pipe(fs.createWriteStream('weather_'+city+'.pdf'));

		console.log('Creado weather_'+city+'.pdf en directorio / del proyecto...');
		// PDF Creation logic goes here
		doc.end();

		return "weather_"+city+".pdf";

}
exports.createNewWeatherConsultant = createNewWeatherConsultant;
var express = require('express');
var router = express.Router();
var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "27f6eee06f90092ae13f6393f5dc49e3",
      secret: "00886f335bade905"
    };


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/imagen', function(req, res, next) {
 		res.header("Access-Control-Allow-Origin", "*");

if(typeof req.query.texto !== "undefined"){
	var texto = req.query.texto;

	Flickr.tokenOnly(flickrOptions, function(error, flickr) {
	  	flickr.photos.search({
		  text: texto,
		  extras: "url_o",
		  license: "3",
		  sort: "relevance",
		  privacy_filter: "1",
		  media: "photos"
		}, function(err, result) {
		  if(err) {
		  	throw new Error(err); 
		  }
		  else{
		  	console.log(result.photos.photo[0].url_o);
			res.status(200).json({busqueda: texto, urlResultado: result.photos.photo[0].url_o});
		  }
		});
	});
}
else{
	res.status(200).json({busqueda: "", urlResultado: ""});
}




});


module.exports = router;

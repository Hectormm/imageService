var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/imagen', function(req, res) {
 	res.header("Access-Control-Allow-Origin", "*");

	if(typeof req.query.texto !== "undefined"){
		var texto = req.query.texto;

		var Flickr = require("flickrapi"),
		    flickrOptions = {
		      api_key: "27f6eee06f90092ae13f6393f5dc49e3",
		      secret: "00886f335bade905"
		    };
		
		Flickr.authenticate(flickrOptions, Flickr.downsync());

		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
		  	flickr.photos.search({
			  text: texto,
			  extras: "url_o",
			  license: "3",
			  sort: "relevance",
			  privacy_filter: "1",
			  media: "photos"
			}, function(err, result) {
			  	console.log(result.photos.photo[0].url_o);
				res.status(200).json({busqueda: texto, urlResultado: result.photos.photo[0].url_o});
			});
		});
	}
	else{
		res.status(200).json({busqueda: "", urlResultado: ""});
	}




});

router.get('/imagenGoogle', function(req, res) {
 	res.header("Access-Control-Allow-Origin", "*");

	if(typeof req.query.texto !== "undefined"){
		var texto = req.query.texto;
		var fotology = require("fotology");

		fotology(texto, function (imageURLs) {
		    res.status(200).json({busqueda: texto, urlResultado: imageURLs[0]});
		});

	}
	else{
		res.status(200).json({busqueda: "", urlResultado: ""});
	}




});


module.exports = router;

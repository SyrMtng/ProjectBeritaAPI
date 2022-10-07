var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
	message: "GET: hello nodejs"
  })
});
router.post('/', function(req, res, next) {
	res.json({
	  message: "POST: hello nodejs"
	})
  });
router.put('/', function(req, res, next) {
	res.json({
	  message: "PUT: hello nodejs"
	})
  });
router.delete('/', function(req, res, next) {
	res.json({
	  message: "DELETE: hello nodejs"
	})
  });  

module.exports = router;

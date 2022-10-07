var express = require('express');
var router = express.Router();


router.post('/tambah', function(req, res, next) {
	var hasil = {
		bil1: req.body.bil1,
		bil2: req.body.bil2,
		hasil: req.body.bil1 + req.body.bil2
	};
	res.json(hasil);
});
// kurang
router.post('/kurang', function(req, res, next) {
	var hasil = {
		bil1: req.body.bil1,
		bil2: req.body.bil2,
		hasil: req.body.bil1 - req.body.bil2
	};
	res.json(hasil);
});
// kali
router.post('/kali', function(req, res, next) {
	var hasil = {
		bil1: req.body.bil1,
		bil2: req.body.bil2,
		hasil: req.body.bil1 * req.body.bil2
	};
	res.json(hasil);
});
// bagi
router.post('/bagi', function(req, res, next) {
	var hasil = {
		bil1: req.body.bil1,
		bil2: req.body.bil2,
		hasil: req.body.bil1 / req.body.bil2
	};
	res.json(hasil);
});

module.exports = router;

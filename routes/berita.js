var express = require('express');
var router = express.Router();

const db = require('../models');
const Berita = db.berita;
const Komen1s = db.komen1s;
const Op = db.Sequelize.Op;

// get all
router.get('/', function(req, res, next) {
	Berita.findAll()
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});
// create a todo
router.post('/', function(req, res, next) {
	var berita = {
		judul: req.body.judul,
		deskripsi: req.body.deskripsi,
		isi: req.body.isi,
		gambar: req.body.gambar
	}
	Berita.create(berita)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});
router.post('/:id', function(req, res, next) {
	var id = req.params.id;
	var komen1s = {
		idberita: id,
		nama: req.body.nama,
		isi: req.body.isi
	}
	Komen1s.create(komen1s)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});

// get detail by id
router.get('/:id', async function(req, res, next) {
	var id = req.params.id;
	const komentarr = await Komen1s.findAll({where:{idberita:id}});
	await Berita.findByPk(id)
	.then(data => {
		if(data){
			res.send({
				berita: data,
				komen1s: komentarr
			});
		}else{
			// http 404 not found
			res.status(404).send({
				message: "Tidak ada data id=" + id
			})
		}
		
	})

	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});

// update by id
router.put('/:id', function(req, res, next) {
	const id = req.params.id;

	Berita.update(req.body, {
		where: {id: id}
	})
	.then(num => {
		if(num>0){
			res.send({message:"Data Berhasil Diperbarui"});
		}else{
			// http 404 not found
			res.status(404).send({
				message: "Tidak ada data id=" + id
			})
		}
		
	})
	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});
// delete by id
router.delete('/:id', function(req, res, next) {
	const id = req.params.id;

	Berita.destroy({
		where: {id: id}
	})
	.then(num => {
		if(num>0){
			res.send({message:"Data Berhasil Di Hapus"});
		}else{
			// http 404 not found
			res.status(404).send({
				message: "Tidak ada data id=" + id
			})
		}
		
	})
	.catch(err => {
		res.json({
			info: "Error",
			message: err.message
		});
	});
});

module.exports = router;

const express = require('express');

const response = require('../../network/response');

const router = express.Router();

router.get("/", (req, res) => {
	response.success(req, res, 'Lista de mensajes');
});

router.post("/", (req, res) => {
	response.success(req, res, 'Mensajes creado');
});

module.exports = router;
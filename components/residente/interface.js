const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function (req, res) {
    controller.getResidente()
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.get('/nombre', function (req, res) {
    const filtro_residente = req.query.nombre;
    controller.getResidenteBuscar(filtro_residente)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.get('/id', function (req, res) {
    const filtro_residente = req.query.id;
    controller.getResidenteModificar(filtro_residente)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.post('/', function (req, res) {
    console.log(req.body)
    controller.add_residente(req.body)
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error, 500))
})

route.put('/', function (req, res) {
    controller.update_residente(req.body)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

route.delete('/', function (req, res) {
    controller.delete_residente(req.body.idresidente)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500))
})

module.exports = route
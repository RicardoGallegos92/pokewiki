const {json} = require('express');
const express = require('express');
const pokiService = require('../services/pokis.service');

const router = express.Router();
const servicio = new pokiService();

router.get('/', async (req, res, next) => {
    const listapokemon = await servicio.find();
    //no lo estoy recibiendo aún
    res.json(listapokemon);
});

module.exports = router;
const { Router } = require('express');
const Film = require('../model/Film');
const Actor = require('../model/Actor');
const Studio = require('../model/Studio');

module.exports = Router()
.get('/', (req, res, next) => {
    Film
    .findAll({attributes: ['title', 'released'], include: [{model: Actor, attributes: ['id', 'name'], as: 'cast', through: {attributes: []}}, {model: Studio, attributes: ['id', 'name']}]})
    .then((films) => res.send(films))
    .catch(next);
})
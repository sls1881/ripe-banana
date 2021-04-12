const { Router } = require('express');
const Film = require('../model/Film');
const Actor = require('../model/Actor');
const Studio = require('../model/Studio');

module.exports = Router()
.post('/', (req, res, next) => {
    Film.create(req.body)
    .then((film) => (film))
    .catch(next)
})
.get('/', (req, res, next) => {
    Film
    .findAll({attributes: ['id', 'title', 'released'], include: [{model: Studio, attributes: ['id', 'name']}]})
    .then((films) => res.send(films))
    .catch(next);
})

.get('/:id', (req, res, next) => {
    Film
    .findByPk(req.params.id, {attributes: ['id', 'title', 'released'], include: [{model: Actor, attributes: ['id', 'name'], as: 'cast', through: {attributes: []}}, {model: Studio, attributes: ['id', 'name']}]})
    .then((films) => res.send(films))
    .catch(next);
})

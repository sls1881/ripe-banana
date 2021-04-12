const { Router } = require('express');
const Actor = require('../model/Actor');

module.exports = Router()
    .get('/', (req, res, next) => {
        Actor
            .findAll({ attributes: ['id', 'name']})
            .then((actors) => res.send(actors))
            .catch(next)
    })
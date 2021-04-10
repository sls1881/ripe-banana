const { Router } = require('express');
const Studio = require('../model/Studio');

module.exports = Router()
.get('/', (req, res, next) => {
    Studio
    .findAll({ attributes: ['id', 'name']})
    .then((studios) => res.send(studios))
    .catch(next);
})

.get('/:id', (req, res, next) => {
    Studio
    .findByPk(req.params.id)
    .then((studio) => res.send(studio))
    .catch(next);
})
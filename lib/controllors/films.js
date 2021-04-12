const { Router } = require('express');
const Film = require('../model/Film');

module.exports = Router()
.get('/', (req, res, next) => {
    Film
    .findAll()
    .then((films) => res.send(films))
    .catch(next);
})
const { Router } = require('express');
const Studio = require('../model/Studio');

module.exports = Router()
.get('/', (req, res, next) => {
    Studio.findAll()
    .then((studios) => res.send(studios))
    .catch(next)
});
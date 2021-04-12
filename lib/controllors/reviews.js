const { Router } = require('express');
const Review = require('../model/Review');

module.exports = Router() 

.post('/', (req, res, next) => {
    Review.create(req.body)
        .then((review) => res.send(review))
        .catch(next)
})

.get('/', (req, res, next) => {
    Review.findAndCountAll({ 
        attributes: ['id', 'rating', 'review'],
        order: [['rating', 'DESC']],
        limit: 100
    })
    .then((review) => res.send(review))
    .catch(next)
})

.delete('/', (req, res, next) => {
    Review.destroy({
        where: {
            id: req.paramm.id
        }
    })
    .then(() => res.send())
    .catch(next)
})
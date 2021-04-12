const Film = require('./Film');
const Studio = require('./Studio');
const Actor = require('./Actor');

Studio.hasMany(Film);
Film.belongsTo(Studio);

Actor.belongsToMany(Film, {through: 'ActorFilms'});
const ActorFilms = Film.belongsToMany(Actor, { through: 'ActorFilms', as: 'cast'});

module.exports = {ActorFilms};


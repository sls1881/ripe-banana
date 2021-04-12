const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/studios', require('./controllors/studios'));

app.use('/api/v1/films', require('./controllors/films'));

app.use('/api/v1/actors', require('./controllors/actors'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

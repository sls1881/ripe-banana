const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(db.sync({ force: true }));
  });
});

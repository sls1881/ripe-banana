const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/model/Studio');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(db.sync({ force: true }));
  });

  //Studio
  it('should get a studio', async() => {
  const newStudio = await Promise.all({
    Studio.create = 
    {id: 1,
        name: 'MGM',
        city: 'Los Angeles',
        state: 'CA',
        country: 'US'}
      })
    
    return request(app)
    .get('/api/v1/studios')
    .then((res) => {
      expect(res.body).toEqual({id: 1, name: MGM});
    })
  })
});

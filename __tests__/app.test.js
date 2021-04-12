const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/model/Studio');
const Film = require('../lib/model/Film');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  //Studio
  it('should get a studio', async() => {
  await Studio.create(
        {id: 1,
        name: 'MGM',
        city: 'Los Angeles',
        state: 'CA',
        country: 'US'})

        return request(app)
        .get('/api/v1/studios')
        .then((res) => {
          expect(res.body).toEqual([{id: 1, name: 'MGM'}]);
        })
      })

  it.skip('GETS a studio by ID', async () => {
        await Studio.create({
          id: 1,
          name: 'MGM',
          city: 'Los Angeles',
          state: 'CA',
          country: 'US',
        });
        
        return request(app)
        .get('/api/v1/studios/1')
        .then((res) => {
          expect(res.body).toEqual({
          id: 1,
          name: 'MGM',
          city: 'Los Angeles',
          state: 'CA',
          country: 'US',
          });
        });
      });

      
      // FILMS
      it('should get all film', async() => {
        await Film.create({
              title: 'Batman',
              studio: 1,
              released: 1967,
              cast: [{
                role: 'Batman',
                actor: 1
              }]
            });
              
      return request(app)
            .get('/api/v1/films')
            .then((res) => {
              expect(res.body).toEqual({
                title: 'Batman',
                studio: 1,
                released: 1967,
                cast: [{
                  role: 'Batman',
                  actor: 1
                }]
              });
              })
            })
      
  });

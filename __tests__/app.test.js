require('../lib/model/associations');
const db = require('../lib/utils/database');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/model/Studio');
const Film = require('../lib/model/Film');
const Actor = require('../lib/model/Actor');
const { ActorFilms } = require('../lib/model/associations')

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });



  beforeEach( async () => {
    await Studio.create({
      id: 1,
      name: 'MGM',
      city: 'Los Angeles',
      state: 'CA',
      country: 'US',
    });
    await Actor.create({
      name: 'Will Smith'
    })
  })


  //Studio
  it('should get a studio', () => {
  

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
      it.skip('should get all film', async () => {
        await Film.create({
              title: 'Batman',
              studioId: 1,
              released: 1967,
              cast: [{id: 2, name: 'Will Smith'}]
            }, {
              include: [{
                association: ActorFilms,
                as: 'cast'
              }]
            });
          
      return request(app)
            .get('/api/v1/films')
            .then((res) => {
              expect(res.body).toEqual([{
                id: 1,
                title: 'Batman',
                studio: 1,
                released: 1967,
                cast: [{
                  id: 2,
                  name: 'Will Smith'
                }]
              }]);
            })
          })



      
      it('should get actor name and is', async () => {
       
        return request(app) 
          .get('/api/v1/actors')
          .then((res) => {
            expect(res.body).toEqual([{
              id: 1,
              name: 'Will Smith'
            }])
          })
      })



});

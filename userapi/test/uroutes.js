const request = require('supertest');
const app = require('../src/server');

describe('User Routes', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Mohamed - Amine KRIM',
        email: 'mohamedammin.krim@gmail.com',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Mohamed - Amine KRIM');
    expect(response.body.email).toBe('mohamedammin.krim@gmail.com');
  });

});

const userController = require('../src/controllers/userController');

describe('User Controllers', () => {
  it('should create a new user', async () => {
    const req = {
      body: {
        name: 'Mohamed - Amine KRIM',
        email: 'mohamedammin.krim@gmail.com',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      id: expect.any(String),
      name: 'Mohamed - Amine KRIM',
      email: 'mohamedammin.krim@gmail.com',
    });
  });

});

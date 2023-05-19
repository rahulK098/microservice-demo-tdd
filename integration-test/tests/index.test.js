const supertest = require('supertest');
const isDog = require('../index.js')

// test
describe('Is dog function', () => {
  it('Is dog', () => {
    expect(isDog("Dog")).toBe(true);
  });
})

// User Service Tests
describe('user Service TEST Suites', () => {
  const request = supertest('http://user-test:80');


  beforeAll(async () => {
  });

  afterAll(async () => {
  });

  beforeEach(() => {

  });


  it('Get WrongUrl /user/login', async () => {
    const response = await
      request.get("/user")

    expect(response.status).toBe(404);
  });

  it('Get Login user', async () => {
    const response = await
      request.get("/login")
        .auth('user', 'password', { type: "basic" })

    expect(response.status).toBe(200);
  });


  it('Get List of Customers', async () => {
    const response = await
      request.get("/customers")

    expect(response.status).toBe(200);
  });

  it('Post /register', async () => {
    const response = await
      request.post("/register").send({
        username: "string1",
        password: "string1",
        email: "string1@mail.com"
      })

    expect(response.status).toBe(200);
  });



});
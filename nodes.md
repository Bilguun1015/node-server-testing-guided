command lines: npm i -D supertest jest, npx jest --init (select node and no for the others)

# Testing 

a function: 
function fn() {return true;}

const result = fn();

check that resulst is true;

what about an endpoint in an API.

make a request to the endpoint: const response = await axios.get(url);

check that the response is what you expect.

# heroku

Recourses -> add on postgress
add this knexfile.js   npm i pg 
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

npx heroku run knex migrate:latest -a nameOftheApp

  

 
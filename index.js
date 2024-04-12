const http = require('node:http');
const { faker } = require('@faker-js/faker')

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

// const randomName = faker.name.firstName()

function randomData (){
  const emailUser = faker.internet.email()
  const randomUserName = faker.person.fullName()
  // const randomLastName = faker.person.lastName()
  return `${randomUserName}, ${emailUser}`;
}

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const data = randomData()
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
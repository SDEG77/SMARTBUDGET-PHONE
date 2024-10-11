const route = require('express').Router();
const database = require('../connection');

route.post('/user', (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password){
    console.log('MISSING INPUT DATA');
  } else {
    // console.log(req.body)
    database.query(
      `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}');`,
    );
    // console.log('-> DATA STORED');
  }
});

route.post('/user/login', (req, res) => {
  let count;
  
  if (!req.body.email || !req.body.password){
    console.log('MISSING INPUT DATA');
  } else {
    database.query(
      `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}';`,
      (err, result) => {
        if (err) {
          console.warn('Unsuccessful retrieval')
        } else {
          res.json(result)
        }
      }
    );
  }   
});

module.exports = route;
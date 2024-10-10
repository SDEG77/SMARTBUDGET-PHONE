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

module.exports = route;
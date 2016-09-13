const axios = require('axios');
const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/users';
const db = pgp(connectionString);

let createUser = (req, res, next) => {
  console.log(req.body)
  let userEmail = req.body.email
  console.log(userEmail)

  return db.any('select * from users where email=${userEmail}')
  .then((data) => {
  console.log('${userEmail}', data)  
  })


  




//first check if user is in DB by email address.
  //if email exists respond with email already in use 

//if email is not in the database, 
  //submit info into database. 
}

exports.createUser = createUser;
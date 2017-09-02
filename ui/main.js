var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var bodyParser = require('body-parser');
var Pool = require('pg').Pool;
var config={
    user : 'kushpandya69',
    database : 'kushpandya69',
    host : 'db.imad.hasura-app.io',
    port: 5432,
    password: process.env.DB_PASSWORD,
};
var app = express();
var pool = new Pool(config);

app.use(morgan('combined'));
app.use(bodyParser.json());
var login = document.getElementById('login');
var username = document.getElementById('username');
var password = document.getElementById('password');

var logged = login.onclick();
if (logged){
pool.query('SELECT * FROM "user" WHERE username ='+username ,function(err,result){
    if (err)
    {res.send('no user'+username);
    }
   else
   {pool.query('SELECT *FROM "user" WHERE password = '+dbString , function(err,result){
       if(err){
           res.send('incorrect password');
       }
       else{
           var R3sult = result.rows[0]; 
           res.send(R3sult);
       }
   });
       
   }
});}
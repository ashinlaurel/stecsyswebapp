const express = require("express");
<<<<<<< HEAD
const admin= require('firebase-admin');

var bodyParser = require('body-parser');
=======
const admin = require("firebase-admin");
const firebase = require("firebase");
var config = require("./firebaseconfig");
var bodyParser = require("body-parser");
>>>>>>> 9689a5df3b692166047cb315d3b4353c0c0b15ee

const app = express();
const router = express.Router();
admin.initializeApp();
const firebases= require('./firebase');
app.use(bodyParser());
 
const loginController = require('./Controllers/LoginController')


const PORT = 3001;

app.get("/test", (req, res) => {
  console.log(config);
  return res.send("hello");
});

app.post('/signup', (req, res) => {
    loginController.signup(req,res);
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

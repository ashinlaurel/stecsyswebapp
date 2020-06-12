const express = require("express");
const admin= require('firebase-admin');
const firebase = require('firebase');
var config= require('./firebaseconfig');
var bodyParser = require('body-parser');

const app = express();
admin.initializeApp();
firebase.initializeApp(config);
app.use(bodyParser());
 


const PORT = 3001;

app.get("/test", (req, res) => {
  console.log(config);
  return res.send("hello");
});

<<<<<<< HEAD
app.post('/signup', (req, res) => {
    console.log(req.body)
    const newUser={
      email:req.body.email,
      password:req.body.password,
      handle:req.body.handle,
    }
    firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
    .then(data=>{
      return res
        .status(201) 
        .json({message:`new user ${data.user.uid} Created `});
    }).catch(err=>{
      console.log(err);
      return res
        .status(500)
        .json({message:`Error ${err.code}`});
    })
=======
app.post("/signup", (req, res) => {
  console.log(req.body);
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    handle: req.body.handle,
  };
  // firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
  // .then(data=>{
  //   return res
  //     .status(201)
  //     .json({message:`new user ${data.user.uid} Created `});
  // }).catch(err=>{
  //   console.log(err);
  //   return res
  //     .status(500)
  //     .json({message:`Error ${err.code}`});
  // })
>>>>>>> 71de15a10155ad5a65a00931a1bc28858b1afc6b
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

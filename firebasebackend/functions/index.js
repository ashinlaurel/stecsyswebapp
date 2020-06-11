const functions = require("firebase-functions");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
app.get('/test', (req, res) => {
    return res.json("hello");
  });

exports.api = functions.https.onRequest(app);

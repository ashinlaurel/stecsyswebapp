const firebase = require("firebase");
var config = require("./firebaseconfig");
firebase.initializeApp(config);
module.exports = firebase;

const express = require("express");
const admin = require("firebase-admin");
const firebase = require("firebase");
const config = require("./firebaseconfig");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
admin.initializeApp();
const firebases = require("./firebase").default;

const cors = require("cors");
app.use(cors());

const loginController = require("./Controllers/LoginController");
const orderFormController = require("./Controllers/OrderFormController");
const adminTableController = require("./Controllers/AdminTableController");

app.get("/test", (req, res) => {
  console.log(config);
  return res.send("hello");
});

app.post("/signup", (req, res) => {
  loginController.signup(req, res);
});

app.post("/login", (req, res) => {
  loginController.login(req, res);
});

app.post("/neworder", (req, res) => {
  orderFormController.theorder(req, res);
});

app.post("/searchdata", (req, res) => {
  adminTableController.searchdata(req, res);
});

app.post("/output", (req, res) => {
  adminTableController.getdata(req, res);
  // console.log(req.body);
});

app.post("/togglestatus", (req, res) => {
  adminTableController.toggleStatus(req, res);
});

app.post("/delete", (req, res) => {
  adminTableController.deletedata(req, res);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

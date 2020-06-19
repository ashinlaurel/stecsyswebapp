const { ref } = require("firebase-functions/lib/providers/database");

const firebase = require("../firebase").default;

const orderFormController = {
  theorder(req, res) {
    let today = new Date();
    let timer =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const neworder = {
      createdat: today.toDateString(),
      time: timer,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      companyname: req.body.companyname,
      orders: req.body.orders,
      status: "active",
    };
    console.log(neworder);
    const db = firebase.firestore();
    db.collection("orderdata")
      .add(neworder)
      .then((ref) => {
        console.log("Added document with ID: ", ref.id);
        // return res.status(200).json({ message: "Document Added" });
        return res.status(200).json();
      })
      .catch((err) => {
        console.log(err.code);
        return res.status(500).json({ err: err.code });
      });
  },
};

module.exports = orderFormController;

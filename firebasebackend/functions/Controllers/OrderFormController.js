const { ref } = require("firebase-functions/lib/providers/database");

const firebase = require("../firebase").default;

const orderFormController = {
  theorder(req, res) {
    const neworder = {
      createdat: new Date().toDateString(),
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
      });
    // .catch((err) => {
    //   console.log(err.code);
    //   return res.status(500).json({ err: err.code });
    // });
  },
};

module.exports = orderFormController;

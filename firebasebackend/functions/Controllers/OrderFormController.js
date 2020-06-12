const firebase = require("../firebase").default;

const orderFormController = {
  theorder(req, res) {
    const neworder = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      companyname: req.body.companyname,
      orders: req.body.orders,
    };
    // console.log(neworder);
    const db = firebase.firestore();
    db.collection("orderdata").add({
      name: neworder.name,
      phone: neworder.phone,
      email: neworder.email,
      companyname: neworder.companyname,
      orders: neworder.orders,
    });
  },
};

module.exports = orderFormController;

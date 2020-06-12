const firebase = require("../firebase").default;

const loginController = {
  getdata(req, res) {
    const order = {};
    const unsubscribe = firebase
      .firestore()
      .collection("orderdata")
      //   .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        order = newOrder;
      });
    res.json(order);
    return () => unsubscribe();
  },
};

module.exports = loginController;

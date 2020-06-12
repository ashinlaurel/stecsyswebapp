const firebase = require("../firebase").default;

const loginController = {
  getdata(req, res) {
    let order = {};
    const unsubscribe = firebase
      .firestore()
      .collection("orderdata")
      //   .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        let newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        res.status(200).json(newOrder);
        // res.json(newOrder);
        // console.log(newOrder);
        // order = newOrder;

        // console.log(order);
      });

    return () => unsubscribe();
  },
};

module.exports = loginController;

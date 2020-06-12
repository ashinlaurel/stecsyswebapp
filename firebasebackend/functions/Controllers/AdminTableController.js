const firebase = require("../firebase").default;

const loginController = {
  getdata(req, res) {
    const [order, setOrder] = useState([]);
    const unsubscribe = firebase
      .firestore()
      .collection("orderdata")
      //   .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        setOrder(newOrder);
      });
    res.send(order);
    return () => unsubscribe();
  },
};

module.exports = loginController;

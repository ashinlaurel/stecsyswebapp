const firebase = require("../firebase").default;

const SORT_OPTIONS = {
  NAME_ASC: { column: "name", direction: "asc" },
  NAME_DESC: { column: "name", direction: "desc" },
  DATE_ASC: { column: "createdat", direction: "asc" },
  DATE_DESC: { column: "createdat", direction: "desc" },
};

const adminTableController = {
  getdata(req, res) {
    let order = {};
    let sortDetails = req.body.details;
    let dateDetails = req.body.date;
    // dateDetails = dateDetails.toDateString();
    console.log(dateDetails);
    const unsubscribe = firebase
      .firestore()
      .collection("orderdata")
      .where("createdat", "==", "Sun Jun 14 2020")
      .orderBy(
        SORT_OPTIONS[sortDetails].column,
        SORT_OPTIONS[sortDetails].direction
      )
      // .orderBy("createdat", "desc")
      .onSnapshot((snapshot) => {
        let newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        // console.log(newOrder);
        res.status(200).json(newOrder);
        // res.json(newOrder);
        // console.log(newOrder);
        // order = newOrder ;

        // console.log(order);
      });

    return () => unsubscribe();
  },
};

module.exports = adminTableController;

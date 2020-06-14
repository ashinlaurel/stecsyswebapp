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
    let search = req.body.search;
    // dateDetails = dateDetails.toDateString();
    console.log(search);
    if (search === "") {
      const unsubscribe = firebase
        .firestore()
        .collection("orderdata")
        .orderBy(
          SORT_OPTIONS[sortDetails].column,
          SORT_OPTIONS[sortDetails].direction
        )
        .where("createdat", "==", dateDetails)
        // .orderBy("createdat", "desc")
        .onSnapshot((snapshot) => {
          let newOrder = snapshot.docs.map((i) => ({
            id: i.id,
            ...i.data(),
          }));
          res.status(200).json(newOrder);
        });

      return () => unsubscribe();
    } else {
      // console.log("in");
      firebase
        .firestore()
        .collection("orderdata")
        .orderBy("name")
        .where("createdat", "==", dateDetails)
        .startAt(search)
        .endAt(search + "\uf8ff")
        .get()
        .then(function (snapshot) {
          let newOrder = snapshot.docs.map((i) => ({
            id: i.id,
            ...i.data(),
          }));
          return res.status(200).json(newOrder);
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }
  },
};

module.exports = adminTableController;

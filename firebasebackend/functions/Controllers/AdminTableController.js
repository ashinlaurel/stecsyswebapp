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
      firebase
        .firestore()
        .collection("orderdata")
        .orderBy(
          SORT_OPTIONS[sortDetails].column,
          SORT_OPTIONS[sortDetails].direction
        )
        .where("createdat", "==", dateDetails)
        .get()
        .then(function (snapshot) {
          let newOrder = snapshot.docs.map((i) => ({
            id: i.id,
            ...i.data(),
          }));
          res.status(200).json(newOrder);
        })
        .catch((err) => {
          console.log("Error getting documents: ", error);
        });
      // .orderBy("createdat", "desc")
      //   .onSnapshot((snapshot) => {
      //     let newOrder = snapshot.docs.map((i) => ({
      //       id: i.id,
      //       ...i.data(),
      //     }));
      //     res.status(200).json(newOrder);
      //   });

      // return () => unsubscribe();
    } else {
      // console.log("in");
      firebase
        .firestore()
        .collection("orderdata")
        .orderBy("name")
        .startAt(search.toUpperCase())
        .endAt(search.toLowerCase() + "\uf8ff")
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
  toggleStatus(req, res) {
    const id = req.body.id;
    const stat = req.body.status;
    console.log(req.body.id, req.body.status, "heeeeerrrrreeee");
    firebase
      .firestore()
      .collection("orderdata")
      .doc(id)
      .update({ status: stat })
      .then(function () {
        console.log("Document successfully written!");
        return res.status(500).json({ error: err.code });
      })
      .catch((err) => {
        console.log(err.code);
        return res.status(500).json({ error: err.code });
      });

    // return res.status(200).json({ message: "completed" });
  },
};

module.exports = adminTableController;

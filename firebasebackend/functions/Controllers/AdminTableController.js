const firebase = require("../firebase").default;

const adminTableController = {
  getdata(req, res) {
    let order = {};
    let sortDetails = req.body.details;
    let dateStartDetails = req.body.datestart;
    let dateEndDetails = req.body.dateend;
    let search = req.body.search.toLowerCase();
    let showAll = req.body.showAll;
    let start = new Date(dateStartDetails);
    let end = new Date(dateEndDetails);
    // dateDetails = dateDetails.toDateString();
    console.log(search);
    if (search === "") {
      unsubscribe = firebase.firestore().collection("orderdata");
      if (showAll != "ALL") {
        console.log("all");
        unsubscribe = unsubscribe
          .where("sort_date", ">=", start)
          .where("sort_date", "<=", end);
      }
      unsubscribe
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
          res.status(500).json(err);
        });
      // .orderBy(
      //   SORT_OPTIONS[sortDetails].column,
      //   SORT_OPTIONS[sortDetails].direction
      // )
      //   .onSnapshot((snapshot) => {
      //     let newOrder = snapshot.docs.map((i) => ({
      //       id: i.id,
      //       ...i.data(),
      //     }));
      //     res.status(200).json(newOrder);
      //   });

      // return () => {
      //   unsubscribe();
      // };
    } else {
      firebase
        .firestore()
        .collection("orderdata")
        .orderBy("name_lower")
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
        return res.status(200).json({ message: "Updated" });
      })
      .catch((err) => {
        console.log(err.code);
        return res.status(500).json({ error: err.code });
      });

    // return res.status(200).json({ message: "completed" });
  },
  deletedata(req, res) {
    console.log("delete");
    const id = req.body.id;
    firebase
      .firestore()
      .collection("orderdata")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        return res.status(200).json({ message: "Deleted!" });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
        return res.status(200).json({ error: error.code });
      });
  },
};

module.exports = adminTableController;

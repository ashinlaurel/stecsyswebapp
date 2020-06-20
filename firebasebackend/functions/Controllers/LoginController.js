const firebase = require("../firebase").default;
const db = firebase.firestore();

const loginController = {
  signup(req, res) {
    // console.log(req.body);
    // TODO ----- setup validation
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      handle: req.body.handle,
      isAdmin: req.body.isAdmin,
    };
    let getToken, userId;
    db.doc(`/Users/${newUser.email}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return res
            .status(400)
            .json({ message: "This UserName Already taken" });
        } else {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
      })
      .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then((token) => {
        getToken = token;
        const userCred = {
          handle: newUser.handle,
          email: newUser.email,
          createdAt: new Date().toISOString(),
          userId: userId,
          isAdmin: newUser.isAdmin,
        };
        return db.doc(`/Users/${newUser.email}`).set(userCred);
      })
      .then(() => {
        console.log(getToken);
        return res.status(200).json({ token: getToken });
      })
      .catch((err) => {
        console.log(err);
        if (err.code == "auth/invalid-email")
          return res.status(400).json({ message: "Invalid Email" });
        else if (err.code == "auth/email-already-in-use")
          return res.status(400).json({ message: "Email Already in Use" });
        else if (err.code == "This handle Already taken")
          return res.status(400).json({ message: "Username Already Taken" });
        else return res.status(500).json({ error: err.code });
      });
  },
  login(req, res) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    let token, uid;
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        // console.log(data.user.uid);
        uid = data.user.getIdToken();
        token = data.user.getIdToken();
      })
      .catch((err) => {
        console.error(err);
        // console.log("here",err.code)
        if (err.code === "auth/user-not-found")
          return res.status(400).json({ message: "User Not found" });
        else if (err.code === "auth/wrong-password")
          return res.status(400).json({ message: "Wrong Password" });
        return res.status(500).json({ error: err.code });
      });
    firebase
      .firestore()
      .collection("Users")
      .doc(user.email)
      .get()
      .then((doc) => {
        return res.status(200).json(doc.data());
      });
  },
};

module.exports = loginController;

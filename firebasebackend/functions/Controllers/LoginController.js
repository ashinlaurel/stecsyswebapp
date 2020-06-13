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
    };
    let getToken, userId;
    db.doc(`/Users/${newUser.handle}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return res.status(400).json({ handle: "This handle Already taken" });
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
        };
        return db.doc(`/Users/${newUser.handle}`).set(userCred);
      })
      .then(() => {
        console.log(getToken);
        return res.status(200).json({ token: getToken });
      })
      .catch((err) => {
        console.log(err);

        return res.status(500).json({ error: err.code });
      });
  },
  login(req, res) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        return res.json({ token });
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
  },
};

module.exports = loginController;

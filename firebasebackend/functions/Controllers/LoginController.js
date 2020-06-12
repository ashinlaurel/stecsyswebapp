const firebase = require("../firebase").default;

const loginController = {
  signup(req, res) {
    console.log(req.body);
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      handle: req.body.handle,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((data) => {
        return res
          .status(201)
          .json({ message: `new user ${data.user.uid} Created ` });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ message: `Error ${err.code}` });
      });
  },
};

module.exports = loginController;

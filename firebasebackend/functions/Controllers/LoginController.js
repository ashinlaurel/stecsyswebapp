const firebase = require("../firebase").default;
const db = firebase.firestore();

const loginController = {
  signup(req, res) {
    console.log(req.body);
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      handle: req.body.handle,
    };
    let token,userId;
    db.doc(`/Users/${newUser.handle}`)
      .get()
      .then(doc=>{
        if(doc.exists){
          return res.status(400).json({handle: 'This handle Already taken'});
        }else{
          return firebase
                  .auth()
                  .createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
      }).then((data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
      }).then(token=>{
        token=token;
        const userCred={
          handle:newUser.handle,
          email: newUser.email,
          createdAt: new Date().toISOString(),
          userId:userId
        }
        return db.doc(`/Users/${newUser.handle}`).set(userCred);
      }).then(()=>{
        return res.status(201).json({token});
      })
      .catch(err=>{
          console.log(err);
          return res.status(500).json({error: err.code});
      })

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(newUser.email, newUser.password)
    //   .then((data) => {
    //     return res
    //       .status(201)
    //       .json({ message: `new user ${data.user.uid} Created ` });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.status(500).json({ message: `Error ${err.code}` });
    //   });
  },
};

module.exports = loginController;

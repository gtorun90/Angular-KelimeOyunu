var express = require("express");
var router = express.Router();
var jwt = require("jwt-simple");
var User = require("../models/user");

// router.get('/list',async (req,res)=>{
//     var users = await User.find({},'-__v')
//     res.send(users)
//     console.log(users)
// })

router.post("/register", (req, res) => {
  var userData = req.body;
  var user = new User(userData);
  user.save((err, result) => {
    if (err) {
      return res.status(500).send({ message: "Error While Saving User" });
    }
    return res.status(201).send({ message: "Created" });
  });
});

router.post("/login", async (req, res) => {
  var userData = req.body;
  var user = await User.findOne({ email: userData.email });
  if (!user || userData.password !== user.password) {
    return res.status(401).send({ message: "Email or Password is invalid." });
  }

  var payload = {};
  var token = jwt.encode(payload, "XYZFA989887");
  return res.status(200).send({ token });
});

var user = {
  router,
  checkAuthenticated: (req, res, next) => {
    if (!req.header("authorization")) {
      return res
        .status(401)
        .send({ message: "Unauthorized. No Authorizateion Header" });
    }
    var token = req.header("authorization").split(" ")[1];
    var payload = jwt.decode(token, "XYZFA989887");

    if (!payload) {
      return res
        .status(401)
        .send({ message: "Unauthorized. Token is not valid" });
    }
    next();
  },
};

module.exports = user;

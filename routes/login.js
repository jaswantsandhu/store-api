var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* POST Login User */
router.post('/', function (req, res, next) {

  console.log(req.body);
  if (req.body.username === "abc" && req.body.password === "abc") {
    var token = jwt.sign({
      name: 'jaswant singh',
      userType: "admin"
    }, process.env.SECRET);
    res.send({message: "Succesfully Login", token: token});
  } else {
    res.send(400, {message: "Invalid user or password"})
  }
});

module.exports = router;

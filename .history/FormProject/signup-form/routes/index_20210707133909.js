var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS Newsletter' });
});

router.post("/subscribe", function(req, res, next) {
  const { name, email } = req.body;

  // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

  console.log(1+100);

  res.render("subscribed", {
    title: "You are subscribed",
    name,
    email
  });
});


module.exports = router;

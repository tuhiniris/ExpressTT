var express = require('express');
var router = express.Router();
var namedict = [];
var userdict = []; // Registration Value Holder


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressJS Newsletter' });
});

// Starting Registration Form

router.get('/register', function(req, res, next) {
  res.render('registration', { title: 'Sign Up on ExpressJS' });
});

router.post("/registersuccess", function(req, res, next) {
  const { userid, userpass } = req.body;
  console.log(userid);
  console.log(userpass);  

  // CHECKING VALIDATION OF QUERY

  if(userdict.includes(userid)){
  res.render("unsucess", {
    title: "Error 505 : User in DB",
    userid,
    userpass
  });
}

  else{
  userdict.push(userid);
  res.render("success", {
    title: "Successfully Registered",
    userid,
    userpass
  });
}


});

// End of Registration


router.post("/subscribe", function(req, res, next) {
  const { name, email } = req.body;

  // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

console.log(namedict);

if(namedict.includes(name)){
  res.render("error", {
    title: "Error: 503",
    name,
    email
  });

}

else{
  namedict.push(name);
  res.render("subscribed", {
    title: "You are subscribed",
    name,
    email
  });

}

});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Empty for Now', {
    title: "User Database Empty"
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Homepage GET Error");
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

module.exports = router;

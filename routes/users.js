var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray = [
    { name :"item1", link: "/nnn/nnnn/nnnn"},
  ];

  res.json({
    data:dataArray
  })
});

module.exports = router;

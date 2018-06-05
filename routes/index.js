
let express = require('express');
let router = express.Router();
const service = require('../Service');

/* GET home page. */
router.get('/', function(req, res) {

    let forms = service.get_forms();

  res.render('index', { title: 'Express', forms: forms});
});

module.exports = router;

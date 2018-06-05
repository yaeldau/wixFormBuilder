
let express = require('express');
let router = express.Router();
const service = require('../Service');


/* GET thanks page. */
router.get('/', function(req, res) {
    res.render('thanks', { title: 'Express'});
});


module.exports = router;

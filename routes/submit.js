
var express = require('express');
var router = express.Router();
const service = require('../Service');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET submit page. */
router.get('/:form_id', function(req, res, next) {
    let form = service.get_form(req.params.form_id);
    res.render('submit', {form_id: req.params.form_id, form_name: form.form_name, fields: form.fields});
});

router.post('/:form_id', urlencodedParser, function(req, res) {
    console.log("form submited");
    console.log(req.body);
    let pairs = [];
    let fields = service.get_form(req.params.form_id).fields;
    fields.forEach(function(field){
        let pair = {};
        pair.question = field.label;
        // let field_id = 'input_' + field.name;
        // pair.ans = req.body.field_id;
        pair.ans = "1";
        pairs.push(pair);
    });

    service.add_submit(req.params.form_id, pairs);
    res.redirect('/thanks');
});


module.exports = router;

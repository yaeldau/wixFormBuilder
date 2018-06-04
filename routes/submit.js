
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
    let submit_ans = {};
    let fields = service.get_form(req.params.form_id).fields;
    fields.forEach(function(field){
        let ans = {};
        ans.content = req.body[field.name];
        ans.type = field.type;
        submit_ans[field.name] = ans;
        console.log(submit_ans);
        // questions form: {fname: {content: 'yael', type: 'text'}}
    });
    service.add_submit(req.params.form_id, submit_ans);
    res.redirect('/thanks');
});


module.exports = router;

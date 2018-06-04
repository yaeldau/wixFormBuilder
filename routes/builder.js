
var express = require('express');
var router = express.Router();
const service = require('../Service');
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let fields = [{label: "first name", name: 'fname', type: 'text'}, {label: "last name", name: 'lname', type: 'text'}];

/* GET builder page. */
router.get('/', function(req, res, next) {

    // let id = service.createNewForm(name, fields);
    res.render('builder', { fields: fields});
});

router.post('/addField', urlencodedParser, function(req, res) {
    createField(req.body.label, req.body.name, req.body.type);
    // res.render('builder', { fields: fields});
    res.redirect('/builder');
});

router.post('/addForm', urlencodedParser, function(req, res) {
    service.createNewForm(req.body.form_name, fields);
    res.redirect('/');
});

function createField(label, name, type){
    let field = {};
    field.label = label;
    field.name = name;
    field.type = type;
    fields.push(field);
}





module.exports = router;

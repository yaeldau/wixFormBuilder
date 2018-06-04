
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
    console.log("filed");
    if (req.body.label == '' || req.body.name == ''){
        res.render('builder', { fields: fields, msg: "please fill all boxs"});
    }
    else {
        createField(req.body.label, req.body.name, req.body.type);
    }
    res.redirect('/builder');
});

router.post('/addForm', urlencodedParser, function(req, res) {
    console.log("form");
    if (req.body.form_name == ''){
        res.render('builder', { fields: fields, msg: "please enter name for the form"});
    }
    else {
        service.createNewForm(req.body.form_name, fields);
        res.redirect('/');
    }
});

function createField(label, name, type){
    let field = {};
    field.label = label;
    field.name = name;
    field.type = type;
    fields.push(field);
}





module.exports = router;

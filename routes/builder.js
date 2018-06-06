
let express = require('express');
let router = express.Router();
const service = require('../Service');
let bodyParser = require('body-parser')

let urlencodedParser = bodyParser.urlencoded({ extended: false });

// fields form ~ [{label: "first name", name: 'fname', type: 'text'}, {label: "last name", name: 'lname', type: 'text'}];
let fields = [];
let form_name = '';

/* GET builder page. */
router.get('/', function(req, res) {

    res.render('builder', { fields: fields, form_name: form_name});
});

router.post('/addField', urlencodedParser, function(req, res) {
    form_name = req.body.form_name;
    if (req.body.label === '' || req.body.name === ''){
        res.render('builder', { fields: fields, form_name: form_name, msg: "please fill all boxs"});
    }
    else {
        createField(req.body.label, req.body.name, req.body.type);
    }
    res.redirect('/builder');
});

router.post('/addForm', urlencodedParser, function(req, res) {
    if (req.body.form_name === ''){
        res.render('builder', { fields: fields, form_name: form_name, msg: "please enter name for the form"});
    }
    else if(fields.length === 0){
        res.render('builder', { fields: fields, form_name: form_name, msg: "Can't create empty form"});
    }
    else if(service.check_if_form_name_unused(req.body.form_name) === false){
        res.render('builder', { fields: fields, form_name: form_name, msg: "form name already exist, please choose another name"});
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

function cleanPage(){
    fields = [];
}




module.exports = router;

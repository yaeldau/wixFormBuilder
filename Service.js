let id = 2;  // TODO: change to 0
// let forms = [];  //[Form] -> [{id, name, fields]] -> {id: [name, {label, name, type}]}
let forms = {0: {form_name: 'f1', fields: [{label: 'first name', name: 'fname', type: 'text'}], submissions: 5}, 1: {form_name: 'f2', fields: [{label: 'first name', name: 'fname', type: 'text'}], submissions: 0}};

function get_id(){
    return id++;
}



module.exports = {
    get_forms: function() {
        return forms;
    },
    get_form: function(form_id) {
        return forms[form_id];
    },
    createNewForm: function (name, fields) {
        let new_form = {};
        new_form.id = get_id();
        new_form.form_name = name;
        new_form.fields = fields;
        new_form.submissions = 0;
        forms[new_form.id] = new_form;
        return true;
    },



};

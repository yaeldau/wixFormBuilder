let id = 2;  // TODO: change to 0
// let forms = [];  //[Form] -> [{id, name, fields]] -> {id: [name, {label, name, type}]}
let forms = {0: {form_name: 'f1', fields: [{label: 'first name', name: 'fname', type: 'text'},{label: 'age', name: 'age', type: 'number'}
            ,{label: 'eye color', name: 'eye_color', type: 'color'}], submissions: 0}, 1: {form_name: 'f2', fields: [{label: 'first name', name: 'fname', type: 'text'}], submissions: 0}};
let answers = {0: [{fname: 'yael', age: '24', eye_color:'blue'}, {fname: 'ron', age: '24', eye_color:'green'}]};
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
        answers[new_form.id] = [];
        return true;
    },
    add_submit: function (form_id, form_answers){

        answers[form_id].push(form_answers);
        forms[form_id].submissions++;
    },
    get_answers: function (form_id) {
      return answers[form_id];
    },

};

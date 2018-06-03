let id = 2;  // TODO: change to 0
// let forms = [];  //[Form] -> [{id, name, fields]] -> {id: [name, {label, name, type}]}
let forms = {0: {form_name: 'f1', fields: [{label: 'first name', name: 'fname', type: 'text'},{label: 'age', name: 'age', type: 'number'}
            ,{label: 'eye color', name: 'eye_color', type: 'color'}], submissions: 5}, 1: {form_name: 'f2', fields: [{label: 'first name', name: 'fname', type: 'text'}], submissions: 0}};
let answers = {};
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
    add_submit: function (form_id, form_answers){
        let new_submit = {};
        form_answers.forEach(function(pair) {
            new_submit[pair.question] = pair.ans;
        });
        if (form_id in answers) {
            answers[form_id].push(new_submit);
        }
        else{
            answers[form_id] = [];
            answers[form_id].push(new_submit);
        }
        forms[form_id].submissions++;
    },


};

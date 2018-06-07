let id = 1;
// let forms = [];  //[Form] -> [{id, name, fields]] -> {id: [name, {label, name, type}]}
// data example
let forms = {0: {form_name: 'example-form', fields: [{label: 'First name', name: 'fname', type: 'text'},
            {label: 'Age', name: 'age', type: 'number'},{label: 'Eye color', name: 'eye_color', type: 'color'}
            ,{label: 'Date of birth', name: 'bday', type: 'date'},{label: 'E-mail', name: 'email', type: 'email'}
            ,{label: 'Phone Number', name: 'phone', type: 'tel'}], submissions: 2}};
let answers = {0: [{fname: {content: 'yael', type: 'text'}, age: {content: '24', type: 'nu'},
        eye_color:{content: 'blue', type: 'color'}, bday:{content: '1994-03-30', type: 'date'},
        email: {content: 'yaeldau@gmail.com', type: 'email'},
        phone: {content: '0509667566', type: 'tel'}},
        {fname: {content: 'ron', type: 'text'}, age: {content: '24', type: 'nu'},
            eye_color:{content: 'green', type: 'color'}, bday:{content: '1994-08-04', type: 'date'},
            email: {content: 'ronch@gmail.com', type: 'email'},
            phone: {content: '05058266218', type: 'tel'}}]};

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
    check_if_form_name_unused: function(possible_name){
        for (let form_id in forms) {
            if (forms[form_id].form_name === possible_name){
                return false;
            }
        }

        return true;
    },
};

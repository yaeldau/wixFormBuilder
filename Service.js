let id = 0;
let forms = [];  //[Form] -> [{id, name, fields]] -> {id: [name, {label, name, type}]}

function get_id(){
    return id++;
}

function createNewForm(id, name) {
    this.id = id;
    this.name = name;
    this.fields = [];
}

function createNewFeild(form_id, field_label, input_name, input_type) {
    let obj = {};
    obj.label = field_label;
    obj.name = input_name;
    obj.type = input_type;
    forms[form_id].fields.push(obj);
}

function add_form(name, fields) {
    forms.push([name, fields]);
}

export function get_name(){
    return "yael";
}

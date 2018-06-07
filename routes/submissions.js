
let express = require('express');
let router = express.Router();
const service = require('../Service');


/* GET submissions page. */
router.get('/:form_id', function(req, res) {
    let form = service.get_form(req.params.form_id);
    let form_answers = service.get_answers(req.params.form_id);
    let fields = service.get_form(req.params.form_id).fields;
    res.render('submissions', { form_id: req.params.form_id, form_name: form.form_name, answers: form_answers,
                                fields: fields});
});

module.exports = router;

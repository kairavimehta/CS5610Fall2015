var forms = require(".form/form.mock.json");

module.exports = function () {
    var api = {
        createForm : createForm
    };

    return api;

    function createForm(uid, newform) {
        newform.uid = uid;
        forms.push(newform);

        return findAll(uid);
    }
};
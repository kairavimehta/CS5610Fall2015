(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService)

    function FormService() {
        var forms = [];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        }

        function createFormForUser(uid, form, callback) {

        }
        function findAllFormsForUser(uid, callback) {

        }
        function deleteFormById(fid, callback) {

        }
        function updateFormById(fid, form, callback) {

        }
    }
})();
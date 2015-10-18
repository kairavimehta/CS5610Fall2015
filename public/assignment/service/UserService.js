(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [];

        var service = {
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        }

        function findUserByUsernameAndPassword(uname,pwd,callback) {

        }
        function findAllUsers(callback) {

        }
        function createUser(user, callback) {

        }
        function deleteUserById(uid, callback) {

        }
        function updateUser(uid, user, callback) {

        }
    }
})();
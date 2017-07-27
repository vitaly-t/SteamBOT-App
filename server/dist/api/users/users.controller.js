'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('./users.service');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = function () {
    function UsersController() {
        _classCallCheck(this, UsersController);
    }

    _createClass(UsersController, null, [{
        key: 'getAll',
        value: function getAll(req, res) {
            _users2.default.getUsersAndGroups().then(function (users) {
                return res.status(200).json(users);
            }).catch(function (error) {
                return res.status(400).json(error);
            });
        }
    }, {
        key: 'getDistinctUsers',
        value: function getDistinctUsers(req, res) {
            _users2.default.getDistinctUsersIds().then(function (users) {
                return res.status(200).json(users);
            }).catch(function (error) {
                return res.status(400).json(error);
            });
        }
    }]);

    return UsersController;
}();

exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsersRoutes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('./users.controller');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersRoutes = exports.UsersRoutes = function () {
    function UsersRoutes() {
        _classCallCheck(this, UsersRoutes);
    }

    _createClass(UsersRoutes, null, [{
        key: 'init',
        value: function init(router) {
            router.route('/api/users/getAll').get(_users2.default.getAll);

            router.route('/api/users').get(_users2.default.getDistinctUsers);
        }
    }]);

    return UsersRoutes;
}();
//# sourceMappingURL=users.routes.js.map
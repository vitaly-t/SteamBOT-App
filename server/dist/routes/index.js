'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Routes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _groups = require('../api/groups/groups.routes');

var _users = require('../api/users/users.routes');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = exports.Routes = function () {
    function Routes() {
        _classCallCheck(this, Routes);
    }

    _createClass(Routes, null, [{
        key: 'init',
        value: function init(app, router) {

            _groups.GroupsRoutes.init(router);

            _users.UsersRoutes.init(router);

            app.use('/', router);
        }
    }]);

    return Routes;
}();
//# sourceMappingURL=index.js.map
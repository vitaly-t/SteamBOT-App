'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupsRoutes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _groups = require('./groups.controller');

var _groups2 = _interopRequireDefault(_groups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupsRoutes = exports.GroupsRoutes = function () {
    function GroupsRoutes() {
        _classCallCheck(this, GroupsRoutes);
    }

    _createClass(GroupsRoutes, null, [{
        key: 'init',
        value: function init(router) {
            router.route('/api/saveGroup').post(_groups2.default.create);

            router.route('/api/groups').get(_groups2.default.getAll);

            router.route('/api/scrapGroups').post(_groups2.default.processCSGOGroups);
        }
    }]);

    return GroupsRoutes;
}();
//# sourceMappingURL=groups.routes.js.map
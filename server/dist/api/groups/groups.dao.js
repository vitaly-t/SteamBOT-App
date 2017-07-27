'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./sql/index');

var _index2 = _interopRequireDefault(_index);

var _database = require('../../config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupsDao = function () {
    function GroupsDao() {
        _classCallCheck(this, GroupsDao);
    }

    _createClass(GroupsDao, null, [{
        key: 'all',
        value: function all() {
            return _database2.default.any(_index2.default.select);
        }
    }, {
        key: 'save',
        value: function save(group) {
            return _database2.default.task(function (t) {
                return t.oneOrNone(_index2.default.selectByGroupId, group.id, function (g) {
                    return g && g.steam_group_id_64;
                }).then(function (groupId) {
                    return groupId || t.none(_index2.default.create, [group.id, group.name, group.siteUrl]);
                });
            });
        }
    }, {
        key: 'selectByGroupId',
        value: function selectByGroupId(idGroup) {
            return _database2.default.any(_index2.default.selectByGroupId, [idGroup]);
        }
    }]);

    return GroupsDao;
}();

exports.default = GroupsDao;
//# sourceMappingURL=groups.dao.js.map
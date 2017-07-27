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

var helpers = _database2.default.$config.pgp.helpers;
var cs = new helpers.ColumnSet([{ name: 'steam_id', def: 0 }, { name: 'steam_group_id_64', prop: 'steam_group_id_64' }, { name: 'steam_id_64', prop: 'steam_id_64' }], { table: { table: 'csgo_users', schema: 'public' } });

var UserDao = function () {
    function UserDao() {
        _classCallCheck(this, UserDao);
    }

    _createClass(UserDao, null, [{
        key: 'all',
        value: function all() {
            return _database2.default.any(_index2.default.select);
        }
    }, {
        key: 'selectDistinct',
        value: function selectDistinct() {
            return _database2.default.any(_index2.default.selectDistinct);
        }
    }, {
        key: 'save',
        value: function save(user) {
            return _database2.default.none(_index2.default.create, [user.groupid, user.steamid, user.steamid64]);
        }
    }, {
        key: 'selectUsersByGroupId',
        value: function selectUsersByGroupId(groupId) {
            return _database2.default.any(_index2.default.selectByGroupId, [groupId]);
        }
    }, {
        key: 'saveUsers',
        value: function saveUsers(users) {
            return _database2.default.task(function (t) {
                var query = helpers.insert(users, cs);
                return t.none(query);
            });
        }
    }]);

    return UserDao;
}();

exports.default = UserDao;
//# sourceMappingURL=users.dao.js.map
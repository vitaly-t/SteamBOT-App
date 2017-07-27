'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../users/users.dao');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    _createClass(UserService, null, [{
        key: 'processCSGOUsers',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(groupId, parsedData) {
                var steamIdsArr, usersSteamIds;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                steamIdsArr = [];
                                usersSteamIds = parsedData.memberList.members.steamID64;


                                Object.keys(usersSteamIds).forEach(function (key) {
                                    steamIdsArr.push({
                                        steam_group_id_64: groupId,
                                        steam_id_64: usersSteamIds[key]
                                    });
                                });

                                return _context.abrupt('return', _users2.default.saveUsers(steamIdsArr));

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function processCSGOUsers(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return processCSGOUsers;
        }()
    }, {
        key: 'getUsersAndGroups',
        value: function getUsersAndGroups() {
            return _users2.default.all();
        }
    }, {
        key: 'getDistinctUsersIds',
        value: function getDistinctUsersIds() {
            return _users2.default.selectDistinct();
        }
    }]);

    return UserService;
}();

exports.default = UserService;
//# sourceMappingURL=users.service.js.map
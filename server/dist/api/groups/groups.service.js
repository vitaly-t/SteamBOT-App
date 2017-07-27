'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _groups = require('./groups.dao');

var _groups2 = _interopRequireDefault(_groups);

var _users = require('../users/users.service');

var _users2 = _interopRequireDefault(_users);

var _csgo = require('../csgo/csgo.service');

var _csgo2 = _interopRequireDefault(_csgo);

var _xmltojson = require('../../utils/xmltojson');

var _xmltojson2 = _interopRequireDefault(_xmltojson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupsService = function () {
    function GroupsService() {
        _classCallCheck(this, GroupsService);
    }

    _createClass(GroupsService, null, [{
        key: 'create',
        value: function create(group) {
            return _groups2.default.save(group);
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            return _groups2.default.all();
        }
    }, {
        key: 'processCSGOGroupsAndUsers',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(groupName) {
                var csgoApiData, parsedData, csgoGroup, groupId;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return (0, _csgo2.default)(groupName);

                            case 3:
                                csgoApiData = _context.sent;
                                _context.next = 6;
                                return (0, _xmltojson2.default)(csgoApiData);

                            case 6:
                                parsedData = _context.sent;
                                csgoGroup = {
                                    id: parsedData.memberList.groupID64,
                                    name: parsedData.memberList.groupDetails.groupName,
                                    siteUrl: parsedData.memberList.groupDetails.groupURL
                                };
                                _context.next = 10;
                                return _groups2.default.save(csgoGroup);

                            case 10:
                                groupId = _context.sent;

                                if (groupId) {
                                    _context.next = 14;
                                    break;
                                }

                                _context.next = 14;
                                return _users2.default.processCSGOUsers(csgoGroup.id, parsedData);

                            case 14:
                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', _context.t0);

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 16]]);
            }));

            function processCSGOGroupsAndUsers(_x) {
                return _ref.apply(this, arguments);
            }

            return processCSGOGroupsAndUsers;
        }()
    }]);

    return GroupsService;
}();

exports.default = GroupsService;
//# sourceMappingURL=groups.service.js.map
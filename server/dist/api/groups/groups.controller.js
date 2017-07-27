"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _groups = require("./groups.service");

var _groups2 = _interopRequireDefault(_groups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupsController = function () {
    function GroupsController() {
        _classCallCheck(this, GroupsController);
    }

    _createClass(GroupsController, null, [{
        key: "create",
        value: function create(req, res) {
            _groups2.default.create(req.body).then(function () {
                return res.status(200).json("Saved OK");
            }).catch(function (error) {
                return res.status(400).json(error);
            });
        }
    }, {
        key: "getAll",
        value: function getAll(req, res) {
            _groups2.default.getAll().then(function (groups) {
                return res.status(200).json(groups);
            }).catch(function (error) {
                return res.status(400).json(error);
            });
        }
    }, {
        key: "processCSGOGroups",
        value: function processCSGOGroups(req, res) {
            _groups2.default.processCSGOGroupsAndUsers(req.body.group).then(function () {
                return res.status(200).end();
            }).catch(function (error) {
                return res.status(400).send(error);
            });
        }
    }]);

    return GroupsController;
}();

exports.default = GroupsController;
//# sourceMappingURL=groups.controller.js.map
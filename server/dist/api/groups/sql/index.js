'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sql = require('../../../config/sql');

var _sql2 = _interopRequireDefault(_sql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sql = {
    create: (0, _sql2.default)('../api/groups/sql/add.sql'),
    select: (0, _sql2.default)('../api/groups/sql/select.sql'),
    selectByGroupId: (0, _sql2.default)('../api/groups/sql/selectByGroupId.sql')
};

exports.default = sql;
//# sourceMappingURL=index.js.map
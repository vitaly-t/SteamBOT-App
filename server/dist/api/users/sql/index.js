'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sql = require('../../../config/sql');

var _sql2 = _interopRequireDefault(_sql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sql = {
    create: (0, _sql2.default)('../api/users/sql/add.sql'),
    select: (0, _sql2.default)('../api/users/sql/select.sql'),
    selectByUserId: (0, _sql2.default)('../api/users/sql/selectByUserId.sql'),
    selectDistinct: (0, _sql2.default)('../api/users/sql/selectDistinct.sql')
};

exports.default = sql;
//# sourceMappingURL=index.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pgPromise = require('pg-promise');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query(file) {

    var fullPath = _path2.default.join(__dirname, file); // generating full path;
    var options = {
        minify: true,
        params: {
            schema: 'public'
        }
    };

    var qf = new _pgPromise.QueryFile(fullPath, options);

    if (qf.error) {
        console.error(qf.error);
    }

    return qf;
};

exports.default = query;
//# sourceMappingURL=sql.js.map
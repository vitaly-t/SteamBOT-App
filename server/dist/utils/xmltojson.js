'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xmljson = require('xmljson');

var _xmljson2 = _interopRequireDefault(_xmljson);

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xml2json = function xml2json(xml) {
    return new _es6Promise2.default(function (resolve, reject) {
        _xmljson2.default.to_json(xml, function (err, result) {
            if (err !== null) reject(err);
            resolve(result);
        });
    });
};

exports.default = xml2json;
//# sourceMappingURL=xmltojson.js.map
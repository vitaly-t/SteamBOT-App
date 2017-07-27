'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csgoApi = function csgoApi(group) {
    var options = {
        uri: 'http://steamcommunity.com/groups/' + group + '/memberslistxml/?xml=1',
        json: true
    };

    return (0, _requestPromiseNative2.default)(options);
};

exports.default = csgoApi;
//# sourceMappingURL=csgo.service.js.map
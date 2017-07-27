'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config/config.json');

var _config2 = _interopRequireDefault(_config);

var _index = require('./routes/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var server = _http2.default.createServer(app);

var PORT = process.env.MARKETING_BOT_HTTP_PORT || 8090;

/*
	Headers configuration
 */

app.use((0, _cors2.default)({
	exposedHeaders: _config2.default.corsHeaders
}));

app.use(_bodyParser2.default.json({
	limit: _config2.default.bodyLimit
}));

/*
	Initialize Routes
 */

_index.Routes.init(app, _express2.default.Router());

/*
	Initialize Server
 */

server.listen(PORT, function () {
	console.log('Up and running http on port: ' + PORT);
});

exports.default = app;
//# sourceMappingURL=index.js.map
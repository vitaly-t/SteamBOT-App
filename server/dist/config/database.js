'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('dotenv/config');

var options = {
    capSQL: true
};

var cn = {
    host: process.env.MARKETING_BOT_DB_HOST,
    port: process.env.MARKETING_BOT_DB_PORT,
    database: process.env.MARKETING_BOT_DB_DATABASE,
    user: process.env.MARKETING_BOT_DB_USER,
    password: process.env.MARKETING_BOT_DB_PASSWORD
};

var pgp = require('pg-promise')(options);

var db = pgp(cn);

exports.default = db;
//# sourceMappingURL=database.js.map
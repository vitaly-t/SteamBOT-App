import {} from 'dotenv/config';

const options = {
    capSQL: true
};

const cn = {
    host: process.env.MARKETING_BOT_DB_HOST,
    port: process.env.MARKETING_BOT_DB_PORT,
    database: process.env.MARKETING_BOT_DB_DATABASE,
    user: process.env.MARKETING_BOT_DB_USER,
    password: process.env.MARKETING_BOT_DB_PASSWORD
};

const pgp = require('pg-promise')(options);

const db = pgp(cn);

export default db;


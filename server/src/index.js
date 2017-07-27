import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config/config.json';
import { Routes } from './routes/index';


let app = express();

const server = http.createServer(app);

const PORT = process.env.MARKETING_BOT_HTTP_PORT || 8090;

/*
	Headers configuration
 */

app.use( cors({
	exposedHeaders: config.corsHeaders
}));

app.use( bodyParser.json({
	limit : config.bodyLimit
}));

/*
	Initialize Routes
 */

Routes.init(app, express.Router());

/*
	Initialize Server
 */

server.listen( PORT, () => {
    console.log(`Up and running http on port: ${PORT}`);
});

export default app;

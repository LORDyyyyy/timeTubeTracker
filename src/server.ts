import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { log } from 'hlputils';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import apiRouter from './routes/api';
import indexRouter from './routes/index';
import Middleware from './utils/middleware';

dotenv.config();

const app: Express = express();

const { port } = process.env;

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use(mongoSanitize());

const authMiddleware = Middleware.auth;
app.use(authMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/css',
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')),
  express.static(path.join(__dirname, '../node_modules/bootstrap-icons/font')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')),
);

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  log(`Server is running on port ${port}.`);
});

require('@babel/register')
const express = require('express');
const path = require('path')
const session = require('express-session');
const morgan = require('morgan');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const logRoute = require('./src/routes/login');
const homeRoute = require('./src/routes/home');
const reportprofitRoute = require('./src/routes/reportprofit');
const reportTORoute = require('./src/routes/reportto')
const logout = require('./src/routes/logout');
const day = require('./src/routes/reportday');
const mounth = require('./src/routes/reportmounth');
const week = require('./src/routes/reportweek');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: [
      `http://localhost:${PORT}/`,
    ],
    optionsSuccessStatus: 200,
    credentials: true,
  };

    app.use(morgan('dev'));
    app.use(express.static(path.join(__dirname, './public/')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

  const sessionConfig = {
    name: 'solo_project',
    store: new FileStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
      httpOnly: true,
    },
  };
    app.use(session(sessionConfig));
    app.use('/login', logRoute);
    app.use('/logout', logout);
    app.use('/', homeRoute);
    app.use('/reportProfit', reportprofitRoute);
    app.use('/reportTernOwer', reportTORoute);
    app.use('/day', day);
    app.use('/week', week);
    app.use('/month', mounth);

    app.use(cors(corsOptions));

  app.listen(PORT, async () => {
    console.log(`Сервер поднят на ${PORT} порту!`);
  });
  
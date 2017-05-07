"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './api-routes';
import miscRoutes from './misc-routes';
import morgan from 'morgan';
import uuid from 'node-uuid';
import winston from 'winston';

console.log("hello there @ !!!");

configureWinston();

var app = express();

// middleware
app.use(assignId);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

morgan.token('id', function(req, res) {
    return req.id;
});
app.use(morgan(':id :date[iso] :method :url :status - :response-time[3] ms - :res[content-length]'));

// add routes
app.use('/', miscRoutes);
app.use('/api', apiRoutes);

// error handling
app.use(apiErrorHandler);

export default app;

function apiErrorHandler(err, req, res, next) {
    console.log(`Logged: ${err.name}`);

    let statusCode = 500;

    switch (err.name) {
        case 'ValidationErrors':
            statusCode = 400;
            break;
        default:
            statusCode = 500;
            break;
    }

    res.status(statusCode).json(err);
}

function configureWinston() {
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.Console, {
        json: true,
        stringify: true,
        timestamp: true
    });
}

function assignId(req, res, next) {
    req.id = uuid.v4();
    next();
}

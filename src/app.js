"use strict";

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './all-routes';

var app = express();

// add routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api', routes);

var server = app.listen(8080, function() {
    var host = server.address().address;
    host = (host === '::' ? 'localhost' : host);
    var port = server.address().port;

    console.log(`Listening at ${host}:${port} ...`);
});


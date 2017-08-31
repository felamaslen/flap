/**
 * Express API and web server
 */

const config = require('../config')();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const version = require('../../package.json').version;

function serverApp() {
    // initiate express web server
    const app = express();

    if (config.debug) {
        app.use(logger('dev'));
    }

    // set up template engine
    app.set('views', path.join(__dirname, '../game/templates'));
    app.set('view engine', 'ejs');

    // accept REST data parameters
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // web app static files
    app.use('/', express.static(path.join(__dirname, '../../static')));

    // index template
    app.get('/', (req, res) => {
        res.render('index', {
            title: config.title,
            version
        });
    });

    // error handling
    app.use((req, res) => {
        res.status(404).send('File not found');
    });

    const port = process.env.PORT || 3000;

    return new Promise((resolve, reject) => {
        app.listen(port, err => {
            if (err) {
                return reject(err);
            }

            return resolve({ port, app });
        });
    });
}

module.exports = serverApp;


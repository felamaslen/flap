/**
 * Launch script for the server
 */

const serverApp = require('./server');

// listen to web requests
serverApp().then(server => {
    console.log(`App is listening on port ${server.port}!`);
});


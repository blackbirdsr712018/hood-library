// FileName: index.js
// Import express
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

let apiRoutes = require("./routes");
// Initialize the app
let app = express();
let cors = require('cors');


// Setup server port
let port = process.env.PORT || 8080;
// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));
app.use(cors());
app.use('/api', apiRoutes);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('./app/routes/note.routes.js')(app);
require('./app/routes/material.routes.js')(app);
require('./app/routes/dewey.routes.js')(app);
require('./app/routes/book.routes.js')(app);
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
     useNewUrlParser: true
 }).then(() => {
     console.log("Successfully connected to the database");    
 }).catch(err => {
     console.log('Could not connect to the database. Exiting now...', err);
     process.exit();
 });

//https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
//https://rhythmandbinary.com/2019/07/24/building-an-api-with-firebase/
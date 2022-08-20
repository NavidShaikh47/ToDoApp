// index.js has been made now npm init so launch server 
// after npm init make directories routes models controllers views and config
// routes will store all the paths and fuctn called in routes will be stored in controller 
// models will store schemas , config will store mongoose config and views will be our view engine pages
// now fire up our express server,  npm install express and check package.jason dependancies

const express = require('express');
const port = 8000;
const app = express();


//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err) {
    if (err) {
        console.log(`error to connecting server at port ${port}`);
        return;
    }

    console.log(`server is up and running at port : ${port}`);
});

// now we have to setup route and controllers

//use express router and index.js is primary route from where all routes will be defined 
app.use('/', require('./routes'));


//set up an view engine
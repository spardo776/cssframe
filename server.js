/*jslint white, single, node */

"use strict";

/*
 ** modules
 **/



/*
 ** init application
 */

var express = require("express");
var app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var port = process.env.PORT || 8080;

/*
 ** route and start
 */
app
    .use(express.static(__dirname+"/static"))
    .listen(port);

var log_date=new Date(Date.now());    
console.log(log_date.toUTCString()+" listening on port " + port);

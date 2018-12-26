const express = require('express'),
path = require('path'),
server = express();
server.use(express.static("./app"));
server.listen(process.env.PORT || 8080, console.log("App Running"));
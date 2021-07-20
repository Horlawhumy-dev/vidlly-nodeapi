const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

// homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome T o Vidlly API Interface.</h1>');
    res.end();
});

server.listen(3000, "localhost", function() {
    console.log("Server is running on the localhost:3000");
});

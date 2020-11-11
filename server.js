const http = require('http');
const fs = require('fs').promises;

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

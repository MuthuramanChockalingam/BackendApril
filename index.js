const http = require('http');

// function reqListener(req, res) {
//     res.setHeader('content-type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Demo node server</title></head>');
//     res.write('<body><h1>Thanks for reaching us!</h1></body>');
//     res.write('</html>');
//     res.end();
// }

function reqListener(req, res) {
    res.end(JSON.stringify({id: 1, content: 'create a react app', status: false}));
}

const server = http.createServer(reqListener);
const PORT = 3000;
server.listen(PORT);
console.log('Server is listening on', PORT);

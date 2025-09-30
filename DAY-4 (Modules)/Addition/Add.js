const http = require('http');
const {add} = require('./math');
const server = http.createServer((req, res) => {
    let x = add(5, 10);
    res.end(`The sum of 5 and 10 is:- ${x}`);
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');

});
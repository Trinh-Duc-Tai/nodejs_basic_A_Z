const http = require('http');

const server = http.createServer((req,res) => {
    console.log('run request...')
    res.setHeader('Content-type','text/html')
    res.write('<h3>Hello world!</h3>')
    res.write('<h2>from Trinh Duc Tai</h2>')
})

server.listen(3000, 'localhost', ()=>{
    console.log('Node.js server is running on port: 3000')
})
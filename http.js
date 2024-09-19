const http = require('http');
const server = http.createServer((req,res) => {
   if(req.url === '/'){
    res.write('welcome to the node real server')
    
   }else{
   res.end(`
    <h1>Ooops!!!</h1>
    <a herf = "/">back to home</a>
    `)
   }
})

server.listen(5000)
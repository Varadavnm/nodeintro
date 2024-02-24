
const http = require('http')
const server = http.createServer(async(req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.write('Welcome to new Node application')
        res.end()
    }
    else if(req.url==='/profile'&& req.method==='GET'){
        res.write('You can see Your profile here')
        res.end()
    }
    else if(req.url==='/signup'&& req.method==='GET'){
        res.write('You can Sign Up here')
        res.end()
    }
    else{
        res.write('Page not seen')
        res.end()
    }
})
server.listen(3202,()=>{
    console.log('Server is running at the port3202')
})
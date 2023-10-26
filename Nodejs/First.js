var http =require('http')

http.createServer(function(req,res){
res.write('port is 8800 connected')
res.end()
}).listen('8800')
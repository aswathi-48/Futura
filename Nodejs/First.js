// var http =require('http')

// http.createServer(function(req,res){
// res.write('port is 8800 connected')
// res.end()
// }).listen('8800')



// const a=setInterval(function(){
//     console.log('hello');
// },1000)
// setTimeout(()=>{
//     clearInterval(a)
// },4000)


const b=setTimeout(()=>{
    console.log('hai');
},4000)

setInterval(()=>{
    console.log('ok');
    clearTimeout()
},1000)



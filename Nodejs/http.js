var a=require('http')
var b=require('url')

var c=a.createServer((req,res)=>{

    const urls=b.parse(req.url).pathname;
    console.log('**********',urls);

    if(urls=='/'){
        res.write('Home Page');
        res.end();
    }else if (urls=='/anyname/abc'){
        res.write('Anyname Page');
        res.end();
    }else if(urls=='/another'){
        res.write('Another page');
        res.end();
    }else{
        res.write('your page not found');
        res.end();
    }

})
c.listen(8800)
const fs=require('fs')

  //read file

fs.readFile('hai.txt','utf-8',function(err,data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})

 //write file

fs.writeFile('dtaaa.txt','Hai hello iam node js 1',(err)=>{
    console.log('success');
})

//create or update(overwrite)

fs.appendFile('First.js','\n var a-=100',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
})

//renamed file

fs.rename('./nodejs.txt','abcdefg.txt',(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('file renamed');
    }
})

//deleted file

fs.unlink('./some.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file deleted');
    }
})
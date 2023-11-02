const fs=require('fs')

  //read file

fs.readFile('Any.txt','utf-8',function(err,data){           //utf-8 used t remove buffer code
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})

 //write file

fs.writeFile('new.txt','Hai hello iam node js 1',(err)=>{     // automattically created a new file new.txt and conent of this is hai hello iam node js 1  not repeact same content 
    console.log('success');
})

//create or update(overwrite)

fs.appendFile('new2.js','\n var a=100',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
})

fs.appendFile('new2.html','\n <html><h1>hai</h1></html>',(err)=>{
    if(err){                                                                       //just create a html file
        console.log(err);
    }else{
        console.log('file created');
    }
})

//renamed file
  
fs.rename('./file.txt','00000.txt',(err)=>{               //file.txt can be changed to 00000.txt      ./ use cheyyunne path name use cheyyunne
    if (err) {
        console.log(err);
    }else{
        console.log('file renamed');
    }
})

//deleted file

fs.unlink('./some.txt',(err)=>{             ///some.txt file can be deleted
    if(err){
        console.log(err);
    }else{
        console.log('file deleted');
    }
})
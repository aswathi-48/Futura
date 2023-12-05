const fs=require('fs')

const readable=fs.createReadStream('./file.txt',{encoding:'utf-8'})
const wrieable=fs.createWriteStream('./file2.txt',)
readable.on('data',(data)=>{
    console.log('**********',data);
    wrieable.write(data)
})
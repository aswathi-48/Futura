var path=require('path')

const a='/desktops/homes/data/files/hello.js'

// console.log(path.basename(a));

//const b=path.basename(a)

//const c=path.dirname(a)

console.log(path.dirname(a));

// console.log(path.join(c,'/file','imfiles','data'));
console.log(path.parse(a));      //parse-full data object aayi print cheyyan
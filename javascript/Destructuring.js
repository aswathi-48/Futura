
// Arraydestructuring

const numbers = [14,78,'abc',87,134];
const [a,b,c,e,d,f]= numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(f);


//objectdestructuring

const person ={
    name:'anu',
    domain:'mernstack',
    age:23,
    adderess:{
        state :'kannur',
        local:{
    data:123
        }
    }
};
const { name,domain,age,adderess:{local:{data}}}=person;

console.log(data);


const x={a:1,b:2,c:3}
const y={d:4,e:5,c:6}


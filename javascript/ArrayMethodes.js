//map
// const x=[1,2,3,4,5]
// x.map((ab)=>{
//     console.log(ab)
// })


//foreach()
const a=[7,8,9,10]
a.forEach((abc)=>{
    console.log(abc)
})   

// //fill() add a new element to the perticular position

const fruits=["banana","mango","kiwi"]
fruits.fill("kiwi",1,2);
 console.log(fruits);

// //filter() used to display elements followed  by a condition

const b=[10,20,30,40,50,60]
const c=b.filter((li)=>{
    return li>20
})
console.log(c)

//slice()

const d=[1,2,3,4,5,6]
const e=d.slice(2,4)
console.log(e);

// //splice()   

const f=[1,2,3,4,5,6]
const g=f.splice(2,5)
console.log(g)

// //sort()    array elements can be arrage assending or desending order   h-i assending  i-h desending

// const h=[1,5,2,4,8,6]
// const i=h.sort((h,i)=>{
//     return h-i
// })
// console.log(i)

// //push()   //add an elements to  end of the array

// const j=[2,3,4,5,7]
// j.push(9)
// console.log(j)

// //pop() delete last element on the array

// const k=[2,3,4,5,7]
// k.pop()
// console.log(k)

// //shift() delete first element in the array

// const l=[2,3,4,5,7]
// l.shift()
// console.log(l)

// //unshift() add a new elements to the array in first

// const m=[2,3,4,5,7]
// m.unshift(9)
// console.log(m)

// //some()  if one contition is true then the resut is true
// const abcd=[2,3,4,5,6,7]
// const z=abcd.some(cde)
// function cde(abcd){
//     return abcd >5
// }
// console.log(z);

// //every()  all the condition true then result is true
const aa=[10,45,34,24]
const y=aa.every(Checkaa)
function Checkaa(){
    return aa > 20
}
console.log(y);

// //includes() 

// const num=[32,43,54,13,35]
// const num2=num.includes(54)
// console.log(num2);

// //join()

const num3=[3,4,5,7]
const add=num3.join(4)
console.log(add);

//reverese() 
const num4=[3,4,5,6,7]
const rev=num4.reverse()
console.log(rev);

// //flat()   USED TO COMBINE MULTIPLE ARRAY TO SINGLE ARRAY  

const flat1=[1, 2, [3, [4, 5, 6], 7], 8]
const flat2=flat1.flat(2)
console.log(flat2);

// const bb=["A","B",["C","D",["E","F"],"G","H"],"I","K",["L","M"],"N","O"]
// const cc=bb.flat(2)
// console.log(cc);


// Promise

// function hello(n1,n2){
//     return new Promise((res,rej)=>{
//         res(n1+n2)
//     })
// }
// function hai(n1,n2){
//     return new Promise((res,rej)=>{
//         res(n1-n2)
//     })
// }
// function ok(n1,n2){
//     return new Promise((res,rej)=>{
//         res(n1*n2)
//     })
// }


// hello(10,12).then((data)=>{
//     console.log(data);
//     return hai(data,10)
// }).then((value)=>{
//     console.log(value);
//     return ok(value,10)
// }).then((result)=>{
//     console.log(result);
// })


// async&await

// function functionOne(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let name="anu"
//             res(name)
//         },3000)
//     })
// }

// function functionTwo(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let age=20
//             res(age)
//         },3000)
//     })
// }

// Promise.all([functionOne(),functionTwo()]).then((result)=>{
//     console.log(result);
// })

// async function displays(){
//     let name = await functionOne()
//     console.log('**',name);
//     let age=await functionTwo()
//     console.log('**',age);
// }
// displays()



// localStorage


// localStorage.setItem('Keys','hello')


const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);


// doubled is [2, 4, 6]

// const logSquares = [];
// numbers.forEach((num) => {
//   logSquares.push(num * num);

// logSquares is undefined (but the array is updated with [1, 4, 9])

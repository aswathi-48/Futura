import React, { useEffect, useState } from 'react'
import './OrederDetails.css'
import { getOredetails } from './ApiCallll/Apicall'
import OrderLisr from './OrderLisr'

const OrderDetails = () => {

    const [items,setItems] = useState([])
    const [data,setData]=useState([])


    useEffect(() =>{
        const UserDataView = async(id) =>{
            console.log("aaaaaaaaaa",id);
            try{
                 const {Details} = await getOredetails()
                 setData(Details)
                 console.log(Details);
                 const details =Details.map((li)=>li.Details);
                //  const itemData=details.map((li)=>li.itemData)
                 setItems(details)
                //  console.log("***",Details.Details);
            }catch(err){
                console.log(err);
            }
        }
        UserDataView()
    },[])
// console.log(items.map((li)=>li.itemDetails));


// const removeDuplicate=(arr)=>{
//     return arr.filter((item,index)=>arr.indexOf(item.ProfileId)===index)
// }

// function removeDuplicates(arr) {
//     let unique = arr.reduce(function (acc, curr) {
//         if (!acc.includes(curr))
//             acc.push(curr);
//         return acc;
//     }, []);
//     return unique;
// }
console.log("iteeeeeee",items);
const allEqual = arr => arr.every(val => val === arr[0]);
console.log("LLLLLLLLLLLLLll",items.map((li)=>li.Details));
const id = items.map((li)=>li.orderId)
// const details =items.map((li)=>li.Details)
// console.log(details);
const itemDetails = items.map((li)=>li.itemData)
const userDetails = items.map((li)=>li.userData)
console.log(userDetails);
const userNoDupliactedDetails = userDetails[0]
console.log("dupliacted",userNoDupliactedDetails);
useEffect(()=>{
if(allEqual(id)){

}
},[])
console.log("itemmmm",itemDetails);
console.log("userrrrrr",userDetails);
console.log(items.map((li)=>li.price));
console.log(items.map((li)=>li.title));
// const userid = items.map((li)=>)


const findArray = (arr)=>{
    let newElemnt
arr.forEach(element=>{
    if(Array.isArray(element)){
         newElemnt= element
       
    }
})
return newElemnt
}
const arrayitem=findArray(itemDetails)
console.log(arrayitem);
console.log(itemDetails.map((li)=>li.length>0));

console.log(userDetails.map((li)=>li.HouseName));

  return (
    <div className='order_container'>
    {/* <div className='deails_all_data'>
    {itemDetails.map(item => (
        <div>
            {item.length>0 && arrayitem.map((item)=>(
                <div>
                <div>
                <p>{item && <img src={`${process.env.PUBLIC_URL}/Images/${item.itemImages}`}  width={70}/>}</p>
                </div>
                
                    <div className='details_item'>                    
               <p> <span>Title:</span> {item.itemName} <span>Price:</span> {item.itemPrice} </p>
               </div> 
               </div>
            ))}
                <div className='items_detailsss'>
                    <div>
                    <p>{item && <img src={`${process.env.PUBLIC_URL}/Images/${item.Images}`}  width={70}/>}</p>
                    </div>
                    <div className='all_data'> 
                        <div className='details_item'>                    
                   <p> <span>Title:</span> {item.title} <span>Price:</span> {item.price} </p>
                   </div> 
                   <div className='details_user'>
                    

                   </div>
                   </div>
                   
                </div>
                </div>
            ))}
            {userDetails.map((li)=>
                   
                   <div className='aa'>
                      
                      <p> <span>user details:</span> {li.HouseName}(H) {li.HouseNo} , {li.Landmark} , {li.Pincode} ,{li.city}.</p>
                      
                   </div>
                   )}
          </div> */}
          <div>
           {data.map((li)=>(
           
           <OrderLisr details={li.Details}/>
         
           ))}
         </div>
    </div>
  )
}

export default OrderDetails
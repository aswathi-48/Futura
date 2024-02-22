import React from 'react'

const OrderLisr = (props) => {

const details = [props.details]
console.log(details);
const item = details.map((li)=>li.itemData)
const findArray = (arr)=>{
    let newElemnt
arr.forEach(element=>{
    if(Array.isArray(element)){
         newElemnt= element
       
    }
})

// console.log(item.itemImage);
return newElemnt
}
const arrayItem = findArray(item)
const user = details.map((li)=>li.userData)
  return (
    <div>
 {item.map(item => (
        <div className='deails_all_data'>
            {item.length>0 && arrayItem.map((item)=>(
                <div className='all_data'>
                <div>
                <p>{item && <img src={`${process.env.PUBLIC_URL}/Images/${item.itemImage}`}  width={70}/>}</p>
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
                   {user.map((li)=>
                   
                   <div className='aa'>
                      
                      <p> <span>user details:</span> {li.HouseName}(H) {li.HouseNo} , {li.Landmark} , {li.Pincode} ,{li.city}.</p>
                      
                   </div>
                   )}

                   </div>
                   </div>
                   
                </div>
                </div>
            ))}
    </div>
  )
}

export default OrderLisr
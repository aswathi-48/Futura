import React, { useState } from 'react'
import { useEffect } from 'react'
import { getOredetails } from './ApiCallll/Apicall'
import './OrederDetails.css'


const OrderList = (props) => {
    console.log(props.product);
    console.log();
    const products=[props.product]
    console.log(products);
    const itemProducts = products.map((li)=>li.itemData)
    const findArray = (arr)=>{
        let newElement 
        arr.forEach((element)=>{
            if(Array.isArray(element)){
                newElement=element
            }
        })
        return newElement
    }

    const arrayItems = findArray(itemProducts)
    const user = products.map((li)=>li.userData)
    console.log(itemProducts);
    return (
        <div>
            {itemProducts.map((li)=>(
                <>
                <div>
                    {itemProducts[0] && itemProducts[0].length>0 && arrayItems.map((li)=>(
                        <div className='items_detailsss'>
                            <p><span>Title:</span> {li.itemName} <span>Price:</span> {li.itemPrice}</p>
                            {li && <img src={`/Images/${li.itemImage}`} width={50} />}  
                                                  </div>
                    ))}
                </div>
                {itemProducts[0]&& !itemProducts[0].length>0 &&
                <div className='items_detailsss'>
                <p><span>Title:</span>{li.title} <span>Price:</span> {li.price}</p>
                {li && <img src={`${process.env.PUBLIC_URL}/Images/${li.Images}`} width={50} />}  

                </div>
}
                <div className='items_detailss'>
                    {user.map((li)=>(
                        <div>
                      {/* {li && <img src={`${process.env.PUBLIC_URL}/Images/${li.Images}`} width={50} />}   */}
                            <p>{li.HouseName}(H) {li.HouseNo}, {li.Pincode}(po) {li.Landmark} {li.city}</p>
                            <p>{li.phone}</p>
                        </div>
                    ))}
                </div>
                </>
            ))}
        </div>
    )
}

const OrderDetails = () => {
    const [mainData, setMainData] = useState([])

    useEffect(() => {
        const showHandler = async () => {
            const { Details } = await getOredetails()
            console.log(Details);
            setMainData(Details)
        }
        showHandler()
    }, [])
    console.log(mainData);


    return (
        <div className='order_container'>
            {mainData.map((li) =>
                <OrderList product={li.Details}  />
 )} 
        </div>
    )
}

export default OrderDetails
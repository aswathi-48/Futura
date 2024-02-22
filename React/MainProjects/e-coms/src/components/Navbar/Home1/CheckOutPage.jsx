import React, { useEffect, useState } from 'react'
import { GetCart } from '../../ApiCallll/ApiCall'

const CheckOutPage = () => {

    const [items,setItems] =useState([])


    useEffect(()=>{
        const GetCarts = async()=>{
            try{
                const caratItems = await GetCart()
                setItems(caratItems)
            }catch(err){
                console.log(err);
            }
        }
        GetCarts()
    },[])

        

  return (
    <div>
        <div>
            {items.map(data =>{
                <div>
                    {data.itemName}
                </div>

            })}
        </div>
    </div>
  )
}

export default CheckOutPage
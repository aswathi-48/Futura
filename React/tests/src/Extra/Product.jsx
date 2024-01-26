import React, { useState } from 'react'
import { productss } from '../Components/Apicall'

export const Product = () => {
const [category,setCategory] = useState('')
const [type,setType] = useState('')
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const [mrp,setMrp] = useState('')
const [price,setPrice] = useState('')


const display=(e) => {
  e.preventDefault();
  productss({category,type,title,description,mrp,price})
}

  return (
    <div>
        <form onSubmit={display} encType='multipart/form-data'>
           <div>
           <label htmlFor="">Category</label>
            <input type="text" name="" id="" placeholder='Category' onChange={(e)=>setCategory(e.target.value)}/>
           </div>
           <div>
           <label htmlFor="">Type</label>
            <input type="text" placeholder='type' onChange={(e) => setType(e.target.value)}/>
           </div>
           <div>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
           </div>
           <div>
           <label htmlFor="">description</label>
            <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
           </div>
           <div>
           <label htmlFor="">mrp</label>
            <input type="text" placeholder='mrp' onChange={(e) => setMrp(e.target.value)}/>
           </div>
           <div>
            <label htmlFor="">price</label>
            <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)}/>
           </div>
           {/* <div>
            <label htmlFor="">thumnail</label>
            <input type="text" placeholder='thumnail' />
           </div> */}
           <button type='submit'>submit</button>
        </form>

    </div>
  )
}

import React, { useState } from 'react'
import './AddItems.css'
import { Itemss } from './ApiCallll/Apicall'

const AddItems = () => {

    const [category,setCategory] = useState('')
const [type,setType] = useState('')
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
// const [mrp,setMrp] = useState('')
const [price,setPrice] = useState('')
const [Images,setImages]=useState({})

let formData = new FormData()

  formData.append('category', category)
  formData.append('type', type)
  formData.append('title', title)
  formData.append('description', description)
  // formData.append('mrp', mrp)
  formData.append('price', price)
  formData.append('Images', Images)


  const display = (e) => {
    e.preventDefault();
    // productss({ category, type, title, description, mrp, price,Image})
    Itemss(formData)
  }

  return (
    <div className='additem'>
         <div>
        <form  onSubmit={display}  encType='multipart/form-data'>
          <div className='head'>
            <p>Hey Welcome!</p>
            <h3>AddItems</h3>
          </div>
           <div className='cat'>
           <label htmlFor="" className='catlabel'>Category:</label>
            <input type="text" name="" id="" placeholder='Category' onChange={(e)=>setCategory(e.target.value)} className='cat-inpt'/>
           </div>
           {/* <div className='type'> */}
           <div className='cat'>
           <label htmlFor="">Type:</label>
            <input type="text" placeholder='type' onChange={(e) => setType(e.target.value)} className='type-inpt'/>
           </div>
           {/* <div className='titile'> */}
           <div className='cat'>
            <label htmlFor="">Title:</label>
            <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} className='title-inpt'/>
           </div>
           {/* <div className='des'> */}
           <div className='cat'>
           <label htmlFor="">Description:</label>
            <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} className='des-inpt'/>
           </div>
           {/* <div className='mrp'> */}
           {/* <div className='cat'>
           <label htmlFor="">Mrp:</label>
            <input type="text" placeholder='mrp' onChange={(e) => setMrp(e.target.value)} className='mrp-inpt'/>
           </div> */}
           {/* <div className='price'> */}
           <div className='cat'>
            <label htmlFor="">Price:</label>
            <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} className='price-inpt'/>
           </div>
           <div className='cat'>
            <label htmlFor="">Image:</label>
            <input type="file"  filename="Images" onChange={(e)=>setImages(e.target.files[0])} className='img-file'/>
           </div>
           {/* <div>
            <label htmlFor="">thumnail</label>
            <input type="text" placeholder='thumnail' />
           </div> */}
           <button type='submit' className='sub-btn'>submit</button>
        </form>

    </div>
    </div>
  )
}

export default AddItems
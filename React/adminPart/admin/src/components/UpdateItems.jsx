import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import './UpdateItems.css'
import { getitemDetails, itemview, updateItemDetails, viewDetails } from './ApiCallll/Apicall';

const UpdateItems = ({handleget}) => {

    const { id } = useParams();
  const [item, setItem] = useState({});

  const [category, setCategory] = useState('');
  const [type, setType] = useState( '');
  const [title, setTitle] = useState(); 
  const [description, setDescription] = useState( '');
  const [price, setPrice] = useState( '');
  const [Images, setImages] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const handegetdata = await viewDetails(id);
        console.log('valueee', handegetdata);

        // Assuming handegetdata is an object
        // setItem(handegetdata.data);
        setCategory(handegetdata.category)
        setType(handegetdata.type)
        setTitle(handegetdata.title);
        setDescription(handegetdata.description);
        setPrice(handegetdata.price);
        setImages(handegetdata.Images)

      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); // Call the async function immediately

  }, [id]);


  const UpdateItems = async ()=>{
    try{
        console.log('updatevaluee',id);
        const UpValues = await updateItemDetails({_id:id,category,type,title,description,price,Images})
        console.log("Upvaluesss",UpValues);
    }catch(err){
        console.log(err);
    }
  }



  return (
    <div className='update-container'>
       <div className='main1-container'>
       {/* <div className='update-head' >
            <h1>Update Items</h1>
        </div> */}

        <form onSubmit={UpdateItems}  encType='multipart/form-data'>
          <div className='head'>
            {/* <p>Hey Welcome!</p> */}
            <h3>UpdateItems</h3>
          </div>
           <div className='cat'>
           <label htmlFor="" className='catlabel'>Category:</label>
            <input type="text" value={category}  name="" id="" placeholder='Category' onChange={(e)=>setCategory(e.target.value)} className='cat-inpt'/>
           </div>
           {/* <div className='type'> */}
           <div className='cat'>
           <label htmlFor="">Type:</label>
            <input type="text" value={type} placeholder='type' onChange={(e) => setType(e.target.value)} className='type-inpt'/>
           </div>
           {/* <div className='titile'> */}
           <div className='cat'>
            <label htmlFor="">Title:</label>
            <input type="text" value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} className='title-inpt'/>
           </div>
           {/* <div className='des'> */}
           <div className='cat'>
           <label htmlFor="">Description:</label>
            <input type="text" value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} className='des-inpt'/>
           </div>
           {/* <div className='mrp'> */}
           {/* <div className='cat'>
           <label htmlFor="">Mrp:</label>
            <input type="text" placeholder='mrp' onChange={(e) => setMrp(e.target.value)} className='mrp-inpt'/>
           </div> */}
           {/* <div className='price'> */}
           <div className='cat'>
            <label htmlFor="">Price:</label>
            <input type="text" value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} className='price-inpt'/>
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


        {/* <div key={item._id}>
        <div> <h4>{item.title}</h4></div> 
         <div> <p>Description: {item.description}</p></div>
        <div> <p>Category: {item.category}</p></div> 
        <div> <p>Type: {item.type}</p></div>
       <div> <p>Price: {item.price}</p></div>
        </div> */}
     
       </div>
     
    </div>

  
  )
}

export default UpdateItems
{/* <div className='update-btn'><button  onClick={()=> handleUpdate(data._id)}> update</button> </div> */}








// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useLocation } from 'react-router-dom';
// import './UpdateItems.css'
// import { getitemDetails } from './ApiCallll/Apicall';

// const UpdateItems = () => {

//     const location = useLocation();
//   const { item } = location.state || {};

//   const [category, setCategory] = useState(item ? item.category : '');
//   const [type, setType] = useState(item ? item.type : '');
//   const [title, setTitle] = useState(item ? item.title : '');
//   const [description, setDescription] = useState(item ? item.description : '');
//   const [price, setPrice] = useState(item ? item.price : '');
//   const [Images, setImages] = useState(item ? item.Images : {});

 


//   return (
//     <div className='maa'>
    

//     <div className='maa'>UpdateItems
//       <form  encType='multipart/form-data'>
//         <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
//         <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//     </div>



  
//   )
// }

// export default UpdateItems

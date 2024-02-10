import React, { useEffect, useState } from 'react'
import './ManageItem.css'
import { DeleteItems, itemview, viewDetails } from './ApiCallll/Apicall'
import { Link } from 'react-router-dom'

const ManageItem = () => {
    const [items,setItems] = useState([])


    
useEffect(()=>{
    const ItemView = async (id) => {
        console.log("datata",id);
        try{
            const datas =await itemview();
            setItems(datas.data)
            console.log("dataaa",datas);

        }catch(err){
            console.log(err);
        }
    }
    ItemView()
},[])


const handleget = async (id) => {
    console.log("handeget",id);
    try{
        const handegetdata= await viewDetails(id)

        console.log('handelgetdata',handegetdata);
    }catch(err){
        console.log(err);
    }

    
}


const DeleteItem = async (id) =>{
    console.log('delete item id');
    try{
        DeleteItems(id)
    }catch(err){
        console.log(err);
    }
}

  return (
    
    <div className='maindiv'>
    <div className='manage'>
    <h3 className='manage-head'>Product<span className='manage-head-sub'>Details</span></h3>
    <div className='manage-body-one'>
    <div className='tab-hed1'>Image</div>
    <div className='tab-hed2'>Title</div>
    <div className='tab-hed3'>Description</div>
    <div className='tab-hed4'>Price</div>
    {/* <div className='tab-hed5'>Mrp</div> */}
    <div className='upd-hed'>Update</div>
    <div className='del-hed'>Delete</div>
    </div>

    {items.map((data) => (
      <div key={data.id} className='manage-body-two'>
        <div className='tab-body-img'>{data && <img src={`${process.env.PUBLIC_URL}/Images/${data.Images}`} width={50} />}</div>
        <div className='tab-body1'>{data.title}</div>
        <div className='tab-body2'>{data.description}</div>
        <div className='tab-body3'>{data.price}</div>
        {/* <div className='tab-body'>{data.mrp}</div> */}
        <div className='update-btn'> <Link to={`/updateitems/${data._id}`}>
                  {/* <button onClick={handleget(data._id)}>update</button> */}
                  <button onClick={() => handleget(data._id)}>update</button>

                </Link></div>
        <div className='delete-btn'><button onClick={()=> DeleteItem(data._id)}>delete</button></div>
      </div>
    ))}
    </div>
  </div>


    
  )
}

export default ManageItem



// <div className='maindiv'>  
    // <div className='main-div'>
    //     <table className='main-table' border='1px'>
    //       <thead className='main-head'>
    //         <tr className='first-tr'>
    //           <th>title</th>
    //           <th className='email-th'>description</th>
    //           <th>Type</th>
    //           <th>Price</th>
    //           <th></th>
    //           {/* <th className='remove-th'>Remove</th> */}
    //         </tr>
    //       </thead>
    //       <tbody className='ctnt-div'>
    //         {items.map((data) => (
    //           <tr key={data.id}>
    //             <td>{data.title}</td>
    //             <td >{data.description}</td>
    //             <td>{data.type}  </td>
    //             <td>{data.price}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //     </div>




// <div className='maindiv'>  
// <div>

// <div>
// <div></div>
// </div>

// {
//     items.map((data) => (
//        <div key={data.id}>
//             <div>  {data.title} </div>
//             <div>{data.description}</div>
//             <div>{data.type} </div>
//             <div>{data.price} </div>
//        </div>
//     ))
// }
//     </div>
//     </div>
// )
// }








// import React, { useEffect, useState } from 'react'
// import './manageproduct.css'
// import { productView } from '../../API/ApiCall'

// const ManageProducts = () => {

//   const[product,setProduct]=useState([])

//   useEffect(()=>{
//     const getproduct=async(id)=>{
//       console.log('getproduct',id);
//       try {
//         const res = await productView(); 
//         setProduct(res.data);
//         console.log("dataaaa",res);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     }    
//     getproduct()
//   },[])

//   return (
    // <div >
    //   <div className='manage'>
    //   <h3 className='manage-head'>Product<span className='manage-head-sub'>Details</span></h3>
    //   <div className='manage-body-one'>
    //   <div className='tab-hed'>Item</div>
    //   <div className='tab-hed'>Title</div>
    //   <div className='tab-hed'>Description</div>
    //   <div className='tab-hed'>Price</div>
    //   <div className='tab-hed'>Mrp</div>
    //   <div className='tab-hed'>Update</div>
    //   <div className='tab-hed'>Delete</div>
    //   </div>

    //   {product.map((data) => (
    //     <div key={data.id} className='manage-body-two'>
    //       <div className='tab-body-img'>{data && <img src={${process.env.PUBLIC_URL}/Images/${data.image}}/>}</div>
    //       <div className='tab-body'>{data.title}</div>
    //       <div className='tab-body'>{data.description}</div>
    //       <div className='tab-body'>{data.price}</div>
    //       <div className='tab-body'>{data.mrp}</div>
    //     </div>
    //   ))}
    //   </div>
    // </div>
//   )
// }

// export default ManageProducts
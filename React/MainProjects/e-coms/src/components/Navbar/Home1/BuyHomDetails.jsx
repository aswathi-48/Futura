// import React, { useEffect, useState } from 'react'
// import { getOrder } from '../../ApiCallll/ApiCall'
// import { useParams } from 'react-router-dom';

// const ProductDetail=(props)=>{
//     const [items,setItem] = useState([])
//     console.log("iddd",props.id);
//     useEffect(()=>{
//         const orderGet = async()=>{
//             console.log('dataaa',props.id);
//             try{
//                  const value = await getOrder(props.id)
//                  setItem(value.data)
//                  console.log('valuee',value);
//             }catch(err){
//                 console.log(err);
//             }
//         }
//         orderGet()
//     },[])

//     return(
//         <div>
//              {props.title}
//                {props.price}
//         </div>
//     )
// }
// const BuyHomDetails = () => {
//     const [items,setItem] = useState([])
//     // const { id } = useParams();

    
//     const [title, setTitle] = useState(); 
//     const [price, setPrice] = useState( '');
//     const [Images, setImages] = useState({});


    // useEffect(()=>{
    //     const orderGet = async()=>{
    //         console.log('dataaa',id);
    //         try{
    //              const value = await getOrder(id)
    //              setItem(value.data)
    //              console.log('valuee',value);
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     orderGet()
    // },[id])


//     // useEffect(()=>{
//     //    const fetchdata =async()=>{
//     //     try{
//     //         const getdataa = await getOrder(id);
//     //         setTitle(getdataa.title);
//     //         setPrice(getdataa.price);
//     //         // setImages(getdataa.Images)

//     //     }catch(err){
//     //         console.log(err);
//     //     }
//     //    }
//     //    fetchdata()
//     // },[id])

// //  const itemDeatils ={items.map((data)=>(
// //     // <div key={data.id}>
// //     //     {data.title}
// //     //     {data.price}
// //     //     {/* {data} */}
// //     // </div>
// //     <ProductDetail
// //     id={data.id}
// //    title= {data.title}
// //         price={data.price}
// //     />
// // ))}
//   return (
//     <div>
//          {/* <div>
//       <h2>Title: {title}</h2>
//       <p>Price: {price}</p>
//     </div> */}
 
//     <div className='item__container'>
//         <h1>helloo</h1>
//         {items.map((data)=>(
//             // <div key={data.id}>
//             //     {data.title}
//             //     {data.price}
//             //     {/* {data} */}
//             // </div>
//             <ProductDetail
//             id={data.id}
//            title= {data.title}
//                 price={data.price}
//             />
//         ))}
//            </div>
//     </div>
//   )
// }

// export default BuyHomDetails



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../ApiCallll/ApiCall'

const BuyHomDetails = () => {
    const [item,setItem] =useState([])
    const id = useParams()
console.log("++++++++",id.id);
var PId=id.id
    const [title, setTitle] = useState(); 
       const [price, setPrice] = useState( '');
       const [Images, setImages] = useState({});
    

  
    useEffect(()=>{
        const orderGet = async()=>{
            // console.log('dataaa',id);
            try{
                 const value = await getOrder(PId)
                 setItem(value)
                 console.log('valuee',value);
            }catch(err){
                console.log(err);
            }
        }
        orderGet()
    },[])


  return (
    <div>
                <div>title:{item&&item.title}</div>
                <div>price:{item&&item.price}</div>
      
    </div>
  )
}

export default BuyHomDetails
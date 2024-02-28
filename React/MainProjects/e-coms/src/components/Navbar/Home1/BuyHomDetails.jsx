
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import { GetCart, UpdateQuantity, addUserDetails, deleteItems, getOrder, getUserProfile, getuserorder, postUserOrder } from '../../ApiCallll/ApiCall'
import './BuyHomDetails.css'
import { useSelector } from 'react-redux'
import { ProceedPage } from './ProceedPage'

const BuyHomDetails = (props) => {

  const [quantity, setQuantity] = useState(1)

  console.log("&&&&&&&&&&&&&&&&",props);


  const [item, setItem] = useState([])
  const id = useParams()
  console.log("++++++++", id.id);
  var PId = id.id

  const [datas, setDatas] = useState([])
  const dataz = useSelector((state) => state.Userrss.userrData[0])
  const [cartItem,setCartItem]=useState([])
  const [totalAmount,setTotalAmount]=useState()
  const loginId = dataz._id

  const [state,setState]=useState()


  useEffect(() => {
    const orderGet = async () => {
      // console.log('dataaa',id);
      try {
        const value = await getOrder(PId)
        setItem(value)
        console.log('valuee', value);
        value ? setState(true) : setState(false)

      } catch (err) {
        console.log(err);
      }
    }
    orderGet()
    const fetchdatas = async () => {
      try {
        const getDatas = await getuserorder(loginId)
        console.log("dataaaaaaaaaass", getDatas);
        setDatas([getDatas.data[0]])
        //   setHouseName(getDatas.HouseName)
        //   setHouseNo(getDatas.HouseNo)
        //   setPincode(getDatas.Pincode)
        //   setLandmark(getDatas.Landmark)
        //   setCity(getDatas.city)
        // const {} = await postUserOrder()
        console.log();
      } catch (err) {
        console.log(err);
      }
    };
    fetchdatas()
    const cartShowHandler = async()=>{
      const {res,sum} = await GetCart(loginId)
      console.log(res.data);
      console.log("summmmm",sum);
      setTotalAmount(sum)
      setCartItem(res)


    }
    cartShowHandler()

  }, [])
  const itemquantity = cartItem.map((li)=>li.itemQuantity)
   const itemPrice= cartItem.map((li)=>li.itemPrice)
   console.log("qunatityyyyyy",itemquantity);
console.log("priceeeeeee",itemPrice);

// const subtotal = (itemquantity && itemPrice) ? (parseFloat(itemquantity) * parseFloat(itemPrice )): 0;
// const subtotal = 
// console.log("***********************************",subtotal);

// const subtotals =(parseFloat(itemquantity) *parseFloat(itemPrice))
const buyNowprice = item&&item.price
  console.log(datas);
  // const addProductDetailHandler =async()=>{
  //   console.log("haiii");
  // const res = await addUserDetails({datas,item,loginId})
  // console.log(res.data);
  // }

  const navigate = useNavigate();


  const [mod, setMod] = useState('')


  const hideHandler = () => {
    setMod(false)
  }
  console.log("itemmmmmm",item);

  const functionn = async () => {
    const deleteCartHandler = async ()=>{
      const res = await deleteItems(loginId)
      console.log(res);
      }
      deleteCartHandler()
    
    const addProductDetailHandler = async () => {
      
      console.log("haiii");
      const items = state === true ? item : cartItem
      console.log(item);
      
      const res = await addUserDetails({ datas, items, loginId })
      console.log(res.data);
      setTimeout(() => {
        navigate('/ ');
      }, 2000);
    }
    addProductDetailHandler()

    const handleOrderItems = () => {
      setMod(true)
    }
    handleOrderItems()
  }
 
  return (
    <div className='maain_container'>
      <div className='main_Heads'>
        {datas.map((li) => (
          <div className='adderes'>
            <div className='adderess'>
              <p><span className='headspan'>Your Address : </span> {li && li.HouseName}(H) {li && li.HouseNo} {li && li.Landmark}</p>
              <p>{li && li.Pincode}(Pin) {li && li.city}.. <Link to={`/buyhomeupdate/${PId}`}> <button className='chge_btns'>Change</button> </Link></p>
            </div>
          </div>
        ))}
        
        <div className='items'>
        {state &&  
        <div className='itemss'>
        <div className='Details_img'>    
          {item && <img src={`${process.env.PUBLIC_URL}/Images/${item.Images}`} width={100} />}         
        </div>
        <div className='Details_text'>
          <div className='Details_title'><span>Title:</span> {item && item.title}</div>
          <div className='Details_price'><span>Price:</span> {item && item.price}</div>
          {/* <h4 className='subtotal'>Sub Total:{subtotals}</h4> */}

        
          {/* //addProductDetailHandler */}

        </div>
      </div>
        }
        {!state &&
        <div className='items1'>        
         {cartItem.map((li)=>(
           <div className='itemss'>
            <div className='Details_img'> 
           {li && <img src={`/Images/${li.itemImage}`} width={70} />}
         </div>
         <div className='Details_text'>
           <p  className='Details_title'><span>Title:</span> {li.itemName}</p>
           <p className='Details_price'><span>Price:</span> {li.itemPrice}</p>
           </div>

           </div>
         ))}
       </div>
        }
           <h4 className='subtotal'>Sub Total: {state === true?buyNowprice:totalAmount}</h4>
        

<div className='del'><p>Free Delivary Avilable</p></div>
<button className='proceedbtn' onClick={functionn}  >Proceed</button>
                  </div>

                
      </div>
      <div>

        {mod && <ProceedPage orderhidehandler={hideHandler} />}
      </div>
      {/* <button className='proceedbtn' onClick={addProductDetailHandler}>proceed</button> */}

    </div>
  )
}

export default BuyHomDetails


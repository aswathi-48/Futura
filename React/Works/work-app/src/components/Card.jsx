import React, { useEffect ,useState} from 'react'
import './Card.css'
import axios  from 'axios'

function Card() {

  const [state,setstate] = useState([]);

  useEffect(()=>{
    async function display(){
      const res=await axios.get('https://jsonplaceholder.typicode.com/photos')
      console.log(res.data);
      setstate(res.data)
    }
    display()
  },[])
  console.log('state data',state)

  const a=state.filter((data)=>{
    return data.id<=10
  })

  console.log('8888888',a);


  return (
    <div className='card'>
        <div class="card1_1">
            {a.map((user)=>(
               <div class="main" key={user.Id}>
               <div class="top">
                   <div class="c_card">
                       <div class="card_head">
                          
                       <img src={user.thumbnailUrl} alt="" />
                       <h2>{user.title}</h2>
                       <button onClick={()=>window.open(user.url)}>click</button>                      </div>
                   </div> 
                </div>
             </div>
            ))}
         </div>                 
    </div>
  )
}

export default Card
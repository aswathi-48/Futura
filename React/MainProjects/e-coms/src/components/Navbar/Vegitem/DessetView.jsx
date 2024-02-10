import React from 'react'

const DessetView = ({value,setActivenav,setItemDetails}) => {

    const handleCardClick=(item)=>{
        setItemDetails(item)
        setActivenav(2)
    }
  return (
    
    <div>
        {
            value.map(item=>(
                <div key={item.id} onClick={()=>handleCardClick(item)}>
                    <div>
                        <span>{item.title}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DessetView
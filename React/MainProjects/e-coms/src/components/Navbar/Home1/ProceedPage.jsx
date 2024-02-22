import React from 'react'
import Model from '../../Model'
import './ProceedPage.css'
export const ProceedPage = (props) => {
  return (
    <div>
        <div className='order__main'>
            <Model hideHandler={props.orderhidehandler} >
              <div className='order__main'>
            <h1 className='order_succ'>Order Successfull..</h1>
            </div>
            </Model>
        </div>
    </div>
  )
}

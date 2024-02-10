import React from 'react'
import DataContext from './DataContext'
import { postCart } from '../components/ApiCallll/ApiCall'

const Dataproviders = (props) => {
    const addDataHandler= async(item)=>{
return await postCart(item)
    }

    const dataContext={
        addDataHandler:addDataHandler
    }
  return (
    <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>
  )
}

export default Dataproviders
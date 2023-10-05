// import { configureStore } from "@reduxjs/toolkit";   //configurestore used to create a Redux store instance with sensible default settings and other pre-configured options.
// import userreducer from './Useredux'   // userreducer is userdefind  ,first ndakkiya js filente path kodukkanam
 
// export default configureStore({
//     reducer:{
//         users:userreducer
//     }
// })


import  {configureStore,combineReducers} from "@reduxjs/toolkit"
import Useredux from "./Useredux"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
 
  const rootreducer = combineReducers({user:Useredux})
  const persistedReducer = persistReducer(persistConfig, rootreducer)

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export let persistor = persistStore(store)
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import useReducer from './Localstorage'

const persistConfig = {
    key: 'signupdata',
    version: 1,
    storage,
  }

  const rootreducer=combineReducers({local:useReducer})
  const persistedReducer = persistReducer(persistConfig, rootreducer)

  export const store = configureStore({
    reducer: persistedReducer,

  });

  export let persistor = persistStore(store)

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Userredux from './Userredux'

const persistConfig = {
    key: 'roots',
    version: 1,
    storage,
}

const rootReducer = combineReducers({users:Userredux})
const persistedReducer = persistReducer(persistConfig, rootReducer)

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


// import { createStore } from 'redux';
// import { persistStore } from 'redux-persist';
// import { persistedReducer } from './persistConfig';

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export { store, persistor };

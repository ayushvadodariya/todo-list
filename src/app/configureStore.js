import storage from "redux-persist/lib/storage"
import todoReducer from "../features/todo/todoSlice"
import { createStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/es/persistStore"
import persistReducer from "redux-persist/es/persistReducer"

const persistConfig = {
  key:'root',
  storage
}


const persistedReducer = persistReducer(persistConfig, todoReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}

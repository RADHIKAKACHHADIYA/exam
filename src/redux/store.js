import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducer";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Count']
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const configareStore = () => {
  
    const store = createStore(persistedReducer , applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor };
}
export default configareStore;
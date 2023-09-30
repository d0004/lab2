import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducerCombined = combineReducers({
    rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducerCombined)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

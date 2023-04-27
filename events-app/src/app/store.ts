import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import homeSlice, { HOME_SLICE } from './features/Home/homeSlice';
import wishListSlice, { WISH_LIST_SLICE } from './features/WishList/wishListSlice';
// ...

const rootReducer = combineReducers({
    [HOME_SLICE]: homeSlice,
    [WISH_LIST_SLICE]: wishListSlice
},)

const persistConfig = {
    key: 'roo-2837sdft',
    storage,
    whitelist: [HOME_SLICE, WISH_LIST_SLICE],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
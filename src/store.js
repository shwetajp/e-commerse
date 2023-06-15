
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from './redux/cartSlice';
import { favouriteSlice } from './redux/favouriteSlice';

const rootReducer = combineReducers({
  myCart: cartSlice.reducer,
  myFavouritePage: favouriteSlice.reducer,

});

export const store = configureStore({
  reducer: rootReducer
});

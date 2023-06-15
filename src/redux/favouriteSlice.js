import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('favorites')) || []

export const favouriteSlice = createSlice({
    name: 'myFavouritePage',
    initialState,
    reducers: {
        addFav: (state, action) => {
            console.log(state, action.payload)
           state.push(action.payload)
           localStorage.setItem('favorites', JSON.stringify(state));
            
        },

        removeFav: (state, action) => {
            state = state.filter(
                (product) => product.id !== action.payload.id
            );
            localStorage.setItem('favorites', JSON.stringify(state));
            return [...state]
        
           
        }
    }
})
export const {addFav,removeFav} = favouriteSlice.actions;
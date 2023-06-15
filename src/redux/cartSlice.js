import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('carts')) || []
export const cartSlice = createSlice({
    name: 'myCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log(state, action.payload);
            // return [...state, action.payload]
            state.push(action.payload)
            localStorage.setItem('carts', JSON.stringify(state));
        },
        removeItem:  (state, action) => {
            state = state.filter(
                (product) => product.id !== action.payload.id
            );
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state]
        
          
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;
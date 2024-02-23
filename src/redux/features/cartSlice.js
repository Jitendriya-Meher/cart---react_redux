import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: JSON.parse(localStorage.getItem('carts')) || []
};

// cart slice
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{

        // add o cart
        addToCart : (state,action) => {
            // state.carts = [...state.carts, action.payload];
            const itemIndex = state.carts.findIndex((item) => (item.id === action.payload.id));

            if( itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
            }
            else{
                const temp = {...action.payload, qnty:1};
                state.carts = [...state.carts, temp];
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        // remove particular iteam
        removeFromCart : (state,action) => {
            const data = state.carts.filter((ele) => (ele.id !== action.payload));
            state.carts = data;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        // remove single item
        removeSingleItems : (state,action) => {
            const itemIndex = state.carts.findIndex((item) => (item.id === action.payload.id));

            if( state.carts[itemIndex].qnty >=1 ){
                state.carts[itemIndex].qnty -= 1;
            }
            else{
                const data = state.carts.filter((ele) => (ele.id !== action.payload));
                state.carts = data;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        // clear cart
        emptyCartItem : (state,action) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        }

    }
});

export const {addToCart,removeFromCart,removeSingleItems,emptyCartItem} = cartSlice.actions;
export default cartSlice.reducer;

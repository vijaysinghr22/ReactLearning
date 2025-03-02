import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    editProduct: (state, action) => {
      const index = state.list.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;

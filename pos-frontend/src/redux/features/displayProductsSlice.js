import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const displayProductsSlice = createSlice({
  name: "displayProducts",
  initialState: {},
  reducers: {},

  extraReducers: (builder) => {
    // builder
    //   .addCase(allMedicines.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(allMedicines.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.dispalyAllMedicines = action.payload;
    //     state.currentMedicineListStatus = "all";
    //   })
    //   .addCase(allMedicines.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   });
  },
});

export const {} = displayProductsSlice.actions;
export default displayProductsSlice.reducer;

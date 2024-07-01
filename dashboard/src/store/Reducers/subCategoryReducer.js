import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// Async thunk for adding a subcategory
export const subCategoryAdd = createAsyncThunk(
  "subcategory/subCategoryAdd",
  async ({ categoryId, sname }, { rejectWithValue, fulfillWithValue }) => {
    try {
      // console.log("rrrrrrrrr", sname, categoryId);
      // const formData = new FormData();
      // formData.append("name", name);
      // formData.append("parentId", parentId);
      const { data } = await api.post(`/subcategory-add/${categoryId}`, {
        sname: sname,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// // Async thunk for getting subcategories
// export const get_subCategory = createAsyncThunk(
//     'subcategory/get_subCategory',
//     async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
//         try {
//             const { data } = await api.get(`/subcategory-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`, { withCredentials: true })
//             return fulfillWithValue(data)
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

export const subCategoryReducer = createSlice({
  name: "subcategory",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    subcategories: [],
    totalSubCategory: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [subCategoryAdd.pending]: (state, _) => {
      state.loader = true;
    },
    [subCategoryAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [subCategoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.subcategories = [...state.subcategories, payload.subcategory];
    },
    // [get_subCategory.fulfilled]: (state, { payload }) => {
    //   state.totalSubCategory = payload.totalSubCategory;
    //   state.subcategories = payload.subcategories;
    // },
  },
});

export const { smessageClear } = subCategoryReducer.actions;
export default subCategoryReducer.reducer;

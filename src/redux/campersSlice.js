import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/campers");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.favorites.indexOf(camperId);
      if (index === -1) {
        state.favorites.push(camperId);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = Array.isArray(action.payload)
          ? action.payload
          : action.payload.items || [];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = campersSlice.actions;
export default campersSlice.reducer;

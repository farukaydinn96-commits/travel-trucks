import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    features: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      const index = state.features.indexOf(feature);
      if (index === -1) {
        state.features.push(feature);
      } else {
        state.features.splice(index, 1);
      }
    },
    resetFilters: (state) => {
      state.location = "";
      state.form = "";
      state.features = [];
    },
  },
});

export const { setLocation, setForm, toggleFeature, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;

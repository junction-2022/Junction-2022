import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface ConfigState {
  surveyCompleted: boolean;
}

// Initial state
const initialState: ConfigState = {
  surveyCompleted: false,
};

// Actual Slice
export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {

    // Action to set the authentication status
    setConfigState(state, action) {
      state.surveyCompleted = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
     // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setConfigState } = configSlice.actions;

export const selectConfigState = (state: AppState) => state.config.surveyCompleted;

export default configSlice.reducer;
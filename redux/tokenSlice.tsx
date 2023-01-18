import { createSlice } from "@reduxjs/toolkit/";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface TokenState {
    numTokens: number;
}


const initialState: TokenState = {
    numTokens: 3,
};

export const tokenSlice = createSlice({

    name: "token",
    initialState,
    reducers: {
        UPDATE: (state, action) => {
            state.numTokens = action.payload;
        }
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },

});

export const { UPDATE } = tokenSlice.actions;

export const selectTokenState = (state: AppState) => state.token.numTokens;

export default tokenSlice.reducer;
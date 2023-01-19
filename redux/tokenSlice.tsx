import { createSlice } from "@reduxjs/toolkit/";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface TokenState {
    numTokens: number;
    isLoading: boolean;
}

const initialState: TokenState = {
    numTokens: 5,
    isLoading: true
};

export const tokenSlice = createSlice({

    name: "token",
    initialState,
    reducers: {
        UPDATE: (state, action) => {
            state.numTokens = action.payload;
            state.isLoading = false;
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
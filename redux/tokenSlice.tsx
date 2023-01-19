import { createSlice, PayloadAction } from "@reduxjs/toolkit/";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface TokenState {
    numTokens: number;
    isLoading: boolean;
    counters: Array<number>;
}

const initialState: TokenState = {
    numTokens: -1,
    isLoading: true,
    counters: [0, 0, 0, 0, 0, 0, 0]
};

export const tokenSlice = createSlice({

    name: "token",
    initialState,
    reducers: {
        UPDATE: (state: TokenState, action:PayloadAction<number>) => {
            state.numTokens = action.payload;
            state.isLoading = false;
        },
        SET_COUNTERS: (state: TokenState, action:PayloadAction<Array<number>>) => {
            state.counters = action.payload;
        },
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

export const { UPDATE, SET_COUNTERS } = tokenSlice.actions;

export const selectTokenState = (state: AppState) => state.token.numTokens;

export default tokenSlice.reducer;
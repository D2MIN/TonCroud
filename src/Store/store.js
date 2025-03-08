import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from './AllSlices/projectSlice.js';

const rootReducer = combineReducers({
    project : projectReducer,
});

export const store = configureStore({
    reducer : rootReducer
});
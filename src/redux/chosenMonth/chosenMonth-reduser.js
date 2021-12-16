import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { incrementMonth, decrementMonth } from './chosenMonth-action';

const datenow = Date.now()
const monthValue = createReducer(`${datenow}`, {
    [incrementMonth]: (_, { payload }) => payload.nextMonthToState,
    [decrementMonth]: (_, { payload }) => payload.nextMonthToState,
});
const error = createReducer(null, {});

export default combineReducers({
    desiredMonth: monthValue,
    error
});
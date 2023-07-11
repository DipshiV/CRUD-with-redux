import { configureStore } from '@reduxjs/toolkit'
import CrudSliceReducer from './CrudSlice'
export const store = configureStore({
    reducer:{
    input : CrudSliceReducer,
    }

});
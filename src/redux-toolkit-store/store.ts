/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit"
import toastSlices from "../redux-slices/toast/toastSlices"

const combineReducer = combineReducers({
  toastify: toastSlices
})

const rootReducer = (state: any, action: any) => {
  return combineReducer(state, action)
}
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

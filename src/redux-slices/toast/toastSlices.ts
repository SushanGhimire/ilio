import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ToastProps = {
  type: string
  message: string
}

type testProps = {
  toast: ToastProps
}
const initialState: testProps = {
  toast: {
    type: "",
    message: ""
  }
}

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    success: (state, action: PayloadAction<string>) => {
      state.toast = {
        ...state.toast,
        type: "success",
        message: action.payload
      }
    },
    error: (state, action: PayloadAction<string>) => {
      state.toast = {
        ...state.toast,
        type: "error",
        message: action.payload
      }
    },
    remove: (state) => {
      state.toast = {
        ...state.toast,
        type: "",
        message: ""
      }
    }
  }
})

const { success, error, remove } = toastSlice.actions
export const toast = {
  success,
  error,
  remove
}

export default toastSlice.reducer

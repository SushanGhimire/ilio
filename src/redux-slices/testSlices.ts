import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type testProps = {
  test: boolean
}
const initialState: testProps = {
  test: false
}

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<boolean>) => {
      state.test = action.payload
    }
  }
})

export const { setTest } = testSlice.actions

export default testSlice.reducer

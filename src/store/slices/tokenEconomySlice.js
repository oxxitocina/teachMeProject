import { createSlice } from '@reduxjs/toolkit'

export const tokenEconomySlice = createSlice({
  name: 'getData',
  initialState: {
    balance: 0
  },
  reducers: {
    IncrementBalance: (state, action) => {
        state.balance = action.payload
        console.log(state.balance)
    }
  }
})

export const { IncrementBalance } = tokenEconomySlice.actions

export default tokenEconomySlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const authorizationSlice = createSlice({
  name: 'getData',
  initialState: {
    address: '',
    isLoggedIn: false,
  },
  reducers: {
    setAddress: (state, action) => {
        state.address = action.payload
    },
    setLoggedIn: (state, action) => {
        state.isLoggedIn = action.payload
    }
  }
})

export const { setAddress, setLoggedIn } = authorizationSlice.actions

export default authorizationSlice.reducer
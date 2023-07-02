import { configureStore } from '@reduxjs/toolkit'
import getDataSlice from './slices/getData'
import authorizationSlice from './slices/authorization'
import tokenEconomySlice from './slices/tokenEconomySlice'

export const store = configureStore({
  reducer: {
    getData: getDataSlice,
    authorization: authorizationSlice,
    tokenEconomy: tokenEconomySlice
  },
})
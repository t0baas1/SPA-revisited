import { configureStore } from '@reduxjs/toolkit'

import initialReducer from './reducers/initialReducer'
import savedReducer from './reducers/savedReducer'

const store = configureStore({
  reducer: {
    initial: initialReducer,
    saved: savedReducer
  }
})

export default store
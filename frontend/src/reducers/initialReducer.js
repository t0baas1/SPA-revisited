import { createSlice } from '@reduxjs/toolkit'
import initialCustomers from '../services/intialCustomers'

const initialSlice = createSlice({
    name: 'initialCustomers',
    initialState: [],
    reducers: {
        setInitial(state, action) {
            return action.payload
        }
    }
})

export const { setInitial } = initialSlice.actions

export const initializeCustomers = () => {
    return async dispatch => {
        const customers = await initialCustomers.getAll()
        dispatch(setInitial(customers))
    }
}

export default initialSlice.reducer
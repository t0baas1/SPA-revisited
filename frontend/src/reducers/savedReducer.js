import { createSlice } from '@reduxjs/toolkit'
import savedCustomers from '../services/savedCustomers'

const customerSlice = createSlice({
    name: 'savedCustomers',
    initialState: [],
    reducers: {
        createCustomer(state, action) {
            state.push(action.payload)
        },
        setCustomers(state, action) {
            return action.payload
        },
        appendCustomer(state, action) {
            state.push(action.payload)
        }
    }
})

export const { setCustomers, appendCustomer } = customerSlice.actions

export const initializeSaved = () => {
    return async dispatch => {
        const customers = await savedCustomers.getAll()
        dispatch(setCustomers(customers))
    }
}

export const createCustomer = customer => {
    return async dispatch => {
        const newCustomer = await savedCustomers.create(customer)
        dispatch(appendCustomer(newCustomer))
    }
}

export default customerSlice.reducer
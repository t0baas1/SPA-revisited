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
        },
        customerRemoval(state, action) {
            const id = action.payload
            return state.filter(customer => customer.id !== id)
        }
    }
})

export const { setCustomers, appendCustomer, customerRemoval } = customerSlice.actions

export const initializeSaved = () => {
    return async dispatch => {
        const customers = await savedCustomers.getAll()
        dispatch(setCustomers(customers))
    }
}

export const removeCustomer = customer => {
    console.log('tulee tänne')
    const id = customer.id
    console.log(id)
    return async dispatch => {
        console.log('tulee returniin')
        const deletedCustomer = await savedCustomers.deleteCustomer(id)
        console.log(deletedCustomer)
        dispatch(customerRemoval(customer))
    }
}

export const createCustomer = customer => {
    return async dispatch => {
        const newCustomer = await savedCustomers.create(customer)
        dispatch(appendCustomer(newCustomer))
    }
}

export default customerSlice.reducer
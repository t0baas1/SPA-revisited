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
    },
    addEdit(state, action) {
      return state.map(customer => customer.id !== action.payload.id ? customer : action.payload)
    }
  }
})

export const { setCustomers, appendCustomer, customerRemoval, addEdit } = customerSlice.actions

export const initializeSaved = () => {
  return async dispatch => {
    const customers = await savedCustomers.getAll()
    dispatch(setCustomers(customers))
  }
}

export const removeCustomer = (id) => {
  console.log('tulee reducerille')
  console.log(id)
  return async dispatch => {
    console.log('tulee returniin')
    await savedCustomers.deleteCustomer(id)
    dispatch(customerRemoval(id))
  }
}

export const editCustomer = (id, customer) => {
  console.log(id)
  console.log(customer)
  return async dispatch => {
    const edited = await savedCustomers.update(id, customer)
    dispatch(addEdit(edited))
  }
}
export const createCustomer = customer => {
  return async dispatch => {
    const newCustomer = await savedCustomers.create(customer)
    dispatch(appendCustomer(newCustomer))
  }
}

export default customerSlice.reducer
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCustomer } from '../reducers/savedReducer'
import { initializeCustomers } from '../reducers/initialReducer'

const Customer = ({ customer, save }) => {
  return(
    <div>
      <h4>{customer.name} <button onClick={save}>tallenna</button></h4>
    </div>
  )
}

const InitialList = () => {
  const dispatch = useDispatch()
  let customers = useSelector(state => state.initial)


  return (
    <div>
      <div>Haku</div>
      {customers.map(customer => 
          <Customer
          key={customer.id}
          customer={customer}
          save={() => dispatch(createCustomer(customer))}
          />
      )}
    </div>
  )
}

export default InitialList
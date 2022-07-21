import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCustomer } from '../reducers/savedReducer'

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
  const [filter, setFilter] = useState('')

  const updateFilter = (event) => {
    let filter = event.target.value.toString()
    setFilter(filter)
  }

  customers = customers.filter(customer => customer.name.toUpperCase().includes(filter.toUpperCase()))  

  return (
    <div>
      <div>Haku <input onChange={updateFilter}></input></div>
      
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
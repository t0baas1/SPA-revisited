import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCustomer } from '../reducers/savedReducer'
import { Table } from 'react-bootstrap'

const Customer = ({ customer, save }) => {
  return(
    <div>
      <p>{customer.name} <button onClick={save}>tallenna</button></p>
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
      <Table striped>
        <tbody>
          {customers.map(customer =>
            <tr key={customer.id}>
              <td>
                <Customer
                key={customer.id}
                customer={customer}
                save={() => dispatch(createCustomer(customer))}
                />
              </td>
            </tr>
          )}
        </tbody>
        </Table>
    </div>
  )
}

export default InitialList
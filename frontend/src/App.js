import React, { useState, useEffect } from 'react'

import { Route, Routes, Link, useMatch, useNavigate } from 'react-router-dom'

import InitialList from './components/initialCustomers'
import SavedList from './components/savedList'
import SingleCustomer from './components/singleCustomer'
import { initializeCustomers } from './reducers/initialReducer'
import { initializeSaved } from './reducers/savedReducer'
import { useDispatch, useSelector } from 'react-redux'

import customerService from './services/savedCustomers'

const Menu = () =>{
  const padding = {
    paddingRight: 10
  }

  return (
    <div>
      <Link style={padding} to='/'>Koti</Link>
      <Link style={padding} to='/customers'>Listaus</Link>
    </div>
  )
}

const App = () => {
  const dispatch = useDispatch()
  let savedCustomers = useSelector(state => state.saved)
  const [filter, setFilter] = useState('')

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(initializeCustomers())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeSaved())
  })



  const updateFilter = (event) => {
    let filter = event.target.value.toString()
    setFilter(filter)
  }

 /* const removeCustomer = (id) => {
    const customer = savedCustomers.find(c => c.id === id)
    const confirmRemoval = window.confirm(`Delete ${customer.name}?`)

    if (confirmRemoval) {
      customerService
      .deleteCustomer(id)
      .then(() =>
        setSavedCustomers(savedCustomers.filter(c => c.id !== id)))
      
      navigate('/customers')
    }
  }*/

  const match = useMatch('/customers/:id')
  const chosenCustomer = match
    ? savedCustomers.find(c => c.id === Number(match.params.id))
    : null

  //customers = customers.filter(customer => customer.name.toUpperCase().includes(filter.toUpperCase()))  

  return(
      <div>
        <h1>Aspa 2.0</h1>
        <Menu />
        <Routes>
          <Route path='/' element={<InitialList />} />
          <Route path='/customers' element={<SavedList />} />
          <Route path='/customers/:id' element={<SingleCustomer customer={chosenCustomer}/>} />
        </Routes>
      </div>
  )
}

export default App
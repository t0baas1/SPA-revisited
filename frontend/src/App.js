import React, { useState, useEffect } from 'react'

import { Route, Routes, Link, Redirect, useRouterMatch, useHistory, useMatch, useNavigate } from 'react-router-dom'

import InitialList from './components/initialCustomers'
import SavedList from './components/savedList'
import SingleCustomer from './components/singleCustomer'

import initialService from './services/intialCustomers'
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
  const [customers, setCustomers] = useState([])
  const [savedCustomers, setSavedCustomers] = useState([])

  const navigate = useNavigate()
  
  useEffect(() => {
    initialService
      .getAll()
      .then(customers => setCustomers(customers))
  }, [])

  useEffect(() => {
    customerService
      .getAll()
      .then(savedCustomers => setSavedCustomers(savedCustomers))
  }, [])

  const addCustomer = ({customer}) => {
    customerService
      .create(customer)
      .then(returnedCustomer => {
        setSavedCustomers(savedCustomers.concat(returnedCustomer))
      })
  }

  const removeCustomer = (id) => {
    const customer = savedCustomers.find(c => c.id === id)
    const confirmRemoval = window.confirm(`Delete ${customer.name}?`)

    if (confirmRemoval) {
      customerService
      .deleteCustomer(id)
      .then(() =>
        setSavedCustomers(savedCustomers.filter(c => c.id !== id)))
      
      navigate('/customers')
    }
  }

  const match = useMatch('/customers/:id')
  const chosenCustomer = match
    ? savedCustomers.find(c => c.id === Number(match.params.id))
    : null

  return(
      <div>
        <h1>Aspa 2.0</h1>
        <Menu />
        <Routes>
          <Route path='/' element={<InitialList customers={customers} addCustomer={addCustomer}/>} />
          <Route path='/customers' element={savedCustomers.map(customer => <SavedList key={customer.id} customer={customer} removeCustomer={removeCustomer} />)} />
          <Route path='/customers/:id' element={<SingleCustomer customer={chosenCustomer} removeCustomer={removeCustomer}/>} />
        </Routes>
      </div>
  )
}

export default App
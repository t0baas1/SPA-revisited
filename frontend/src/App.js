import { useEffect } from 'react'

import { Route, Routes, Link, useMatch} from 'react-router-dom'

import InitialList from './components/initialCustomers'
import SavedList from './components/savedList'
import SingleCustomer from './components/singleCustomer'
import { initializeCustomers } from './reducers/initialReducer'
import { initializeSaved } from './reducers/savedReducer'
import { useDispatch, useSelector } from 'react-redux'

const Menu = () =>{
  const padding = {
    paddingRight: 10
  }

  return (
    <nav className='nav'>
      <h1 className="site-title">Aspa 2.0</h1>
      <ul>
        <Link style={padding} to='/'>Koti</Link>
        <Link style={padding} to='/customers'>Listaus</Link>
      </ul>
    </nav>
  )
}

const App = () => {
  const dispatch = useDispatch()
  let savedCustomers = useSelector(state => state.saved)


  useEffect(() => {
    dispatch(initializeCustomers())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeSaved())
  }, [dispatch])

  const match = useMatch('/customers/:id')
  const chosenCustomer = match
    ? savedCustomers.find(c => c.id === Number(match.params.id))
    : null

  return(
    <div>
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
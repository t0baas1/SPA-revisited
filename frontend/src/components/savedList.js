import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useDispatch } from 'react'
import { initializeSaved } from '../reducers/savedReducer'

const Customer =({customer}) => {

    const customerStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5
    }

    return(
        <div style={customerStyle}>
            <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
        </div>
    )
}


const SavedList = () => {
    let customers = useSelector(state => state.saved)

    return (
        <div>
        {customers.map(customer => 
            <Customer
            key={customer.id}
            customer={customer}
            />
            )}
        </div>
    )
}

export default SavedList
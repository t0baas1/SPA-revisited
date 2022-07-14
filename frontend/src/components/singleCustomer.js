import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import savedService from '../services/savedCustomers'

const SingleCustomer = ({customer}) => {
    let savedCustomers = useSelector(state => state.saved)
    
    const navigate = useNavigate()

    const handleDelete = (id) => {
        console.log(id)
        savedService
            .deleteCustomer(id)
            .then(() =>
            savedCustomers.filter(customer => customer.id !== id)
            )
        navigate('/customers')

    }


    const customerStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5
    }

    return (
        <div>
            <div style={customerStyle}>
            <h4>{customer.name}</h4>
            <h5>Address</h5>
            <ul>
                <div>{customer.address.streetAddress}</div>
                <div>{customer.address.city}</div>
                <div>{customer.address.state}</div>
                <div>{customer.address.zip}</div>
            </ul>
            </div>
            <button>muokkaa</button>
            <button onClick={() => handleDelete(customer.id)}>poista</button>
        </div>
    )
}

export default SingleCustomer
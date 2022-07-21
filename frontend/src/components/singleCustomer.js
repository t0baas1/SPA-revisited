import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { removeCustomer, editCustomer } from '../reducers/savedReducer'

const SingleCustomer = ({customer}) => {

    const dispatch = useDispatch()

    const [customerName, setCustomerName] = useState(customer.name)
    const [customerStreetAddress, setCustomerStreetAddress] = useState(customer.address.streetAddress)
    const [customerCity, setCustomerCity] = useState(customer.address.city)
    const [customerState, setCustomerState] = useState(customer.address.state)
    const [customerZip, setCustomerZip] = useState(customer.address.zip)
    const [visible, setVisible] = useState(true)
    
    const navigate = useNavigate()

    const handleDelete = (id) => {
        console.log(id)
        dispatch(removeCustomer(id))
        navigate('/customers')

    }

    const handleEdit = (event) => {
        event.preventDefault()
        console.log('toimii')
        const id = customer.id
        const newCustomer = {
            name: customerName,
            address: {
                streetAddress: customerStreetAddress,
                city: customerCity,
                state: customerState,
                zip: customerZip
            }
        }
        dispatch(editCustomer(id, newCustomer))
        setVisible(!visible)
    }


    const customerStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5
    }

    if (!visible) {
        return(
            <div style={customerStyle}>
                <form onSubmit={handleEdit}>
                    <div>
                        Name:
                        <input id='name' type='text' value={customerName} name="Name" onChange={(event) => setCustomerName(event.target.value)}/>
                    </div>
                    <div>
                        Street Address:
                        <input id='street' type='text' value={customerStreetAddress} name="Street" onChange={(event => setCustomerStreetAddress(event.target.value))}/>
                    </div>
                    <div>
                        City:
                        <input id='city' type='text' value={customerCity} name="City" onChange={(event) => setCustomerCity(event.target.value)}/>
                    </div>
                    <div>
                        State:
                        <input id='state' type='text' value={customerState} name="State" onChange={(event) => setCustomerState(event.target.value)}/>
                    </div>
                    <div>
                        Zip:
                        <input id='zip' type='text' value={customerZip} name="Zip" onChange={(event) => setCustomerZip(event.target.value)}/>
                    </div>
                    <button id='edit' type='submit'>tallenna</button>
                </form>
                <button onClick={() => setVisible(!visible)}>takaisin</button>
            </div>
        )
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
            <button onClick={() => setVisible(!visible)}>muokkaa</button>
            <button onClick={() => handleDelete(customer.id)}>poista</button>
        </div>
    )
}

export default SingleCustomer

const SingleCustomer = ({customer, removeCustomer}) => {

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
                <div>{customer.address.city} {customer.address.zip} {customer.address.state}</div>
            </ul>
            </div>
            <button onClick={() =>removeCustomer(customer.id)}>poista</button>
        </div>
    )
}

export default SingleCustomer
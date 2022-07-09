import { Link } from 'react-router-dom'

const SavedList = ({ customer }) => {

    const customerStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5
    }

    return (
        <div style={customerStyle}>
            <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
        </div>
      )
}

export default SavedList


const InitialList = ({customers, addCustomer}) => {

    return (
      <div>
        <ul>
          {customers.map(customer => 
            <ul key={customer.id} >
              <div>
                <h4>{customer.name} <button onClick={() => addCustomer({customer})}>tallenna</button></h4>
              </div>
            </ul>
          )}
        </ul>
      </div>
    )
}

export default InitialList
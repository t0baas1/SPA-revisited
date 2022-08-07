import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../reducers/savedReducer";
import { Table } from "react-bootstrap";

const InitialList = () => {
  const dispatch = useDispatch();
  let customers = useSelector((state) => state.initial);
  let savedCustomers = useSelector((state) => state.saved);
  const [filter, setFilter] = useState("");

  const updateFilter = (event) => {
    let filter = event.target.value.toString();
    setFilter(filter);
  };

  const Customer = ({ customer, save }) => {
    return (
      <div>
        {customer.name} <Button save={save} customer={customer} />
      </div>
    );
  };

  const Button = ({ customer, save }) => {
    const found = savedCustomers.find((c) => c.id === customer.id);
    if (found !== undefined) {
      return <p className="success">Tallennettu!</p>;
    }
    return <button onClick={save}>tallenna</button>;
  };

  customers = customers.filter((customer) =>
    customer.name.toUpperCase().includes(filter.toUpperCase())
  );

  const NewCustomer = ({ customer }) => {
    console.log(customer);
    const newCustomer = {
      id: customer.id,
      name: customer.name,
      streetAddress: customer.address.streetAddress,
      city: customer.address.city,
      state: customer.address.state,
      zip: customer.address.zip,
    };
    console.log(newCustomer);
    dispatch(createCustomer(newCustomer));
  };

  return (
    <div>
      <div>
        Haku <input onChange={updateFilter}></input>
      </div>
      <Table striped>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <Customer
                  key={customer.id}
                  customer={customer}
                  save={() => NewCustomer({ customer })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InitialList;

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
                  save={() => dispatch(createCustomer(customer))}
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

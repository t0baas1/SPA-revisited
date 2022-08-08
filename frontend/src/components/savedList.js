import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Customer = ({ customer }) => {
  return (
    <div>
      <Link id="singlecustomer" to={`/customers/${customer.id}`}>
        {customer.name}
      </Link>
    </div>
  );
};

const SavedList = () => {
  let customers = useSelector((state) => state.saved);
  const [filter, setFilter] = useState("");

  const updateFilter = (event) => {
    let filter = event.target.value.toString();
    setFilter(filter);
  };

  let customersFiltered = customers.filter((customer) =>
    customer.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div>
      <div>
        Haku <input onChange={updateFilter}></input>
      </div>
      <Table striped>
        <tbody>
          {customersFiltered.map((customer) => (
            <tr key={customer.id}>
              <td>
                <Customer key={customer.id} customer={customer} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SavedList;

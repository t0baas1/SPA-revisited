import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Customer = ({ customer }) => {
  return (
    <div>
      <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
    </div>
  );
};

const SavedList = () => {
  let customers = useSelector((state) => state.saved);

  return (
    <div>
      <Table striped>
        <tbody>
          {customers.map((customer) => (
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

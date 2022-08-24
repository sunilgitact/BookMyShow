import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="white" border='none' text='white' id="dropdown-basic">
       Bengaluru
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mumbai</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Delhi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bengalure</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hyderabad</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const { DropdownButton, Dropdown } = require("react-bootstrap");

const DropDown = ({ dataArr }) => {
  const [dropDownTitle, setDropDownTitle] = useState("All Launches");

  return (
    <>
      <style type="text/css">
        {`
        .super-colors {
        
        }
      `}
      </style>
      <div
        style={{
          margin: "20px auto",
          height: "16px",
          width: "241px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FiFilter />
        <DropdownButton
          variant="light"
          className="super-colors"
          menuAlign="right"
          title={dropDownTitle}
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item
            eventKey="1"
            onClick={() => setDropDownTitle("All launches")}
          >
            All Launches
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => setDropDownTitle("Upcoming Launches")}
          >
            Upcoming Launches
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="3"
            onClick={() => setDropDownTitle("Successful Launches")}
          >
            Successful Launches
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setDropDownTitle("Failed Launches")}
            eventKey="4"
          >
            Failed Launches
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="5">Separated link</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
};

export default DropDown;

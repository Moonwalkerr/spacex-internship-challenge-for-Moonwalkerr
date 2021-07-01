import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const { DropdownButton, Dropdown } = require("react-bootstrap");

const DropDown = ({ dataArr, setDataArr }) => {
  const [dropDownTitle, setDropDownTitle] = useState("All Launches");

  const handleToggle = (title) => {
    setDropDownTitle(title);
  };
  return (
    <div
      style={{
        margin: "20px auto",
        height: "16px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
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
          onClick={() => handleToggle("All Launches")}
        >
          All Launches
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          onClick={() => handleToggle("Upcoming Launches")}
        >
          Upcoming Launches
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          onClick={() => handleToggle("Successful Launches")}
        >
          Successful Launches
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleToggle("Failed Launches")}
          eventKey="4"
        >
          Failed Launches
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default DropDown;

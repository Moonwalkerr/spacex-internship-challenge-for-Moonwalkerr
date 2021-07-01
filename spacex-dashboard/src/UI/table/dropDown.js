import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import getData from "../../utils/functions";

const { DropdownButton, Dropdown } = require("react-bootstrap");

const DropDown = ({ dataArr, setDataArr, setLoading }) => {
  // spacex api launch url
  const URL = "https://api.spacexdata.com/v3/launches";
  const [dropDownTitle, setDropDownTitle] = useState("All Launches");
  const [permanentDataArr, setPermanentDataArr] = useState([]);
  useEffect(() => {
    getData(URL, setPermanentDataArr);
  }, [permanentDataArr, setPermanentDataArr]);
  const handleToggle = (title) => {
    setDropDownTitle(title);
    if (title === "Successful Launches") {
      // filterting acc to launch success
      setDataArr(permanentDataArr.filter((data) => data.launch_success));
    } else if (title === "All Launches") {
      // resetting the tableData
      getData(URL, setDataArr, setLoading);
    } else if (title === "Upcoming Launches") {
      setDataArr(
        permanentDataArr.filter((data) => data.launch_success === "upcoming")
      );
    } else if (title === "Failed Launches") {
      setDataArr(permanentDataArr.filter((data) => !data.launch_success));
    } else return;
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

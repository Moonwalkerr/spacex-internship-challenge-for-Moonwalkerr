import "./styles.css";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropDown from "./dropDown";
import getData from "../../utils/functions";
import Spinner from "./spinner";
import Modal from "./modal";

const DashboardTable = () => {
  // spacex api launch url
  const URL = "https://api.spacexdata.com/v3/launches";
  // table Data piece of state for table
  const [tableData, setTableData] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 12,
    lastPageText: ">",
    firstPageText: "<",
    nextPageText: "..",
    prePageText: "..",
    hideSizePerPage: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
    },
  });
  useEffect(() => {
    getData(URL, setTableData, setLoading);
  }, []);

  const columns = [
    {
      dataField: "flight_number",
      text: "No.",
      headerStyle: {
        backgroundColor: "#F4F5F7",
        borderBottom: "none",
        width: "8%",
        textAlign: "center",
      },
      style: commonStylings,
    },
    {
      dataField: "launch_year",
      text: "Launched(UTC)",
      headerStyle: commonHeaderStylings,
      style: commonStylings,
    },
    {
      dataField: "rocket.second_stage.payloads[0].orbit",
      text: "Orbit",
      headerStyle: commonHeaderStylings,
      style: commonStylings,
    },
    {
      dataField: "launch_site.site_name",
      text: "Location",
      headerStyle: commonHeaderStylings,
      style: commonStylings,
    },
    {
      dataField: "launch_success",
      text: "Launch Status",
      formatter: statusFormatter,
      headerStyle: {
        backgroundColor: "#F4F5F7",
        borderBottom: "none",
        textAlign: "center",
      },
      style: getStatusStyle,
    },
    {
      dataField: "rocket.rocket_name",
      text: "Rocket",
      style: commonStylings,
      headerStyle: commonHeaderStylings,
    },
  ];

  // common stylings for column header
  function commonHeaderStylings() {
    return {
      backgroundColor: "#F4F5F7",
      borderBottom: "none",
      textAlign: "center",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      color: "#4B5563",
    };
  }
  // Common stylings for Column
  function commonStylings() {
    return { textAlign: "center" };
  }

  // launch status column cell value formatter
  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (cell) {
      return "Success";
    } else if (cell === false) return "Failure";
    else return "Upcoming";
  }

  // launch status column styles handler
  function getStatusStyle(cell, row, rowIndex, formatExtraData) {
    if (cell) {
      return {
        height: "21px",
        width: "10%",
        textAlign: "center",
        textShadow: " -1px 2px 7px green",
      };
    } else if (cell === false)
      return {
        textAlign: "center",
        color: "red",
        textShadow: " -1px 2px 7px red",
      };
    else
      return {
        textAlign: "center",
        textShadow: " -1px 2px 7px yellow",
      };
  }

  // row stylings for the table
  const rowStyle = (row, rowIndex) => {
    return {
      border: "none",
      margin: "60px",
      cursor: "pointer",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      color: "#1F2937",
    };
  };

  // row Event onClick handler
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      return <Modal />;
    },
  };

  return (
    <div>
      <DropDown setDataArr={setTableData} setLoading={setLoading} />
      <BootstrapTable
        keyField="flight_number"
        data={tableData}
        rowStyle={rowStyle}
        rowEvents={rowEvents}
        columns={columns}
        pagination={pagination}
      />
      <div className="stateHelper">
        {loading && <Spinner />}
        {!loading && tableData.length === 0 && (
          <p>No Results found for the specified filter</p>
        )}
      </div>
    </div>
  );
};

export default DashboardTable;

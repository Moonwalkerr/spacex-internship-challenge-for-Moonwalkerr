import "./styles.css";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropDown from "./dropDown";
import getData from "../../utils/functions";
import Spinner from "./spinner";
import TableModal from "./modal";

const DashboardTable = () => {
  // spacex api launch url
  const URL = "https://api.spacexdata.com/v3/launches";
  // table Data piece of state for table
  const [tableData, setTableData] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);

  // Showing modal piece of state
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);

  // custom pagination settings for table
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
        width: 150,
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
    if (cell) return "Success";
    else if (cell === false) return "Failure";
    else return "Upcoming";
  }

  // launch status column styles handler
  function getStatusStyle(cell, row, rowIndex, formatExtraData) {
    if (cell) {
      return {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        borderRadius: 20,
        width: 50,
        backgroundColor: "#DEF7EC",
      };
    } else if (cell === false)
      return {
        fontWeight: "500",
        textAlign: "center",
        fontSize: 12,
        borderRadius: 20,
        width: 50,
        backgroundColor: "#FDE2E1",
      };
    else
      return {
        fontWeight: "500",
        textAlign: "center",
        fontSize: 12,
        borderRadius: 20,
        width: 50,
        backgroundColor: "yellow",
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
      setModalData(row);
      setModalShow(true);
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
      {modalShow && (
        <TableModal
          show={modalShow}
          data={modalData}
          onHide={() => setModalShow(false)}
        />
      )}
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

import "./styles.css";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropDown from "./dropDown";

const DashboardTable = () => {
  // spacex api launch url
  const URL = "https://api.spacexdata.com/v3/launches";
  // table Data piece of state for table
  const [tableData, setTableData] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);

  const getData = async (url) => {
    try {
      const data = await axios.get(url);
      setTableData(data.data);
      setLoading(false);
    } catch (e) {
      alert(e.message);
    }
  };
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
    getData(URL);
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
      headerStyle: commonHeaderStylings,
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
    } else if (!cell) return "Failure";
    else return "Upcoming";
  }

  // launch status column styles handler
  function getStatusStyle(cell, row, rowIndex, formatExtraData) {
    if (cell) {
      return {
        textAlign: "center",
        color: "green",
      };
    } else if (!cell)
      return {
        textAlign: "center",
        color: "red",
      };
    else
      return {
        textAlign: "center",
        // color: "red",
      };
  }

  // row stylings for the table
  const rowStyle = (row, rowIndex) => {
    return {
      border: "none",
    };
  };

  return (
    <div>
      <DropDown />
      <BootstrapTable
        className="table"
        keyField="flight_number"
        data={tableData}
        rowStyle={rowStyle}
        // bordered={false}
        columns={columns}
        pagination={pagination}
      />
      {loading && <h2>Loading...</h2>}
    </div>
  );
};

export default DashboardTable;

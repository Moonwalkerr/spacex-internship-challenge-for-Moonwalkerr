import "./styles.css";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";
import DropDown from "./dropDown";

const DashboardTable = () => {
  const [tableData, setTableData] = useState([]);

  const [loading, setLoading] = useState(true);

  const URL = "https://api.spacexdata.com/v3/launches";

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
      },
    },
    {
      dataField: "launch_year",
      text: "Launched(UTC)",
      headerStyle: { backgroundColor: "#F4F5F7", borderBottom: "none" },
    },
    {
      dataField: "rocket.second_stage.payloads[0].orbit",
      text: "Orbit",
      headerStyle: { backgroundColor: "#F4F5F7", borderBottom: "none" },
    },
    {
      dataField: "launch_site.site_name",
      text: "Location",
      headerStyle: { backgroundColor: "#F4F5F7", borderBottom: "none" },
    },
    {
      dataField: "launch_success",
      text: "Launch Status",
      formatter: statusFormatter,
      headerStyle: { backgroundColor: "#F4F5F7", borderBottom: "none" },
    },
    {
      dataField: "rocket.rocket_name",
      text: "Rocket",
      headerStyle: { backgroundColor: "#F4F5F7", borderBottom: "none" },
    },
  ];

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (cell) {
      return "Success";
    } else if (!cell) return "Failure";
    else return "Upcoming";
  }

  return (
    <div>
      <DropDown />
      <BootstrapTable
        className="table"
        keyField="flight_number"
        data={tableData}
        // bordered={false}
        columns={columns}
        pagination={pagination}
      />
    </div>
  );
};

export default DashboardTable;

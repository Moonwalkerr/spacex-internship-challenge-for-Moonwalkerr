import "./styles.css";
import Nav from "../Nav";
import DashboardTable from "../table";
const Dashboard = () => {
  return (
    // dashboard container
    <div>
      {/* Navbar */}
      <Nav />
      {/* table container */}
      <div className="mainCont">
        {/* Dashboard table */}
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;

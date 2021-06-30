import "./styles.css";
import Nav from "../Nav";
import DashboardTable from "../table";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="mainCont">
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;

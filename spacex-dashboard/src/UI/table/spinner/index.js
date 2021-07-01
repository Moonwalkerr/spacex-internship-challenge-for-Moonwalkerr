import "./styles.css";
import Loader from "../assets/Loader.png";

const Spinner = () => {
  return (
    <img className="rotate linear infinite" src={Loader} alt="Loading..." />
  );
};

export default Spinner;

import "./styles.css";
import Logo from "./assets/Logo.png";

const Nav = () => {
  return (
    <div className="navBar">
      <img className="navBar__img" src={Logo} alt="SpaceX-Logo" />
    </div>
  );
};

export default Nav;

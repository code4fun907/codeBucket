import { Link } from "react-router-dom";

const NavLink = ({ to, className = "", linkClassName = "", text, show }) => (
  <li
    className={`hover:bg-blue-300 p-2 rounded cursor-pointer ${className} ${
      !show ? "hidden" : "block"
    }`}
  >
    <Link className={linkClassName} to={to}>
      {text}
    </Link>
  </li>
);

export default NavLink;

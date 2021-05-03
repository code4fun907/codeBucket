import { Link } from "react-router-dom";

const NavLink = ({ to, className = "", linkClassName = "", text, show }) => (
  <Link className={linkClassName} to={to}>
    <li
      className={`hover:bg-blue-300 p-2 rounded cursor-pointer ${className} ${
        !show ? "hidden" : "block"
      }`}
    >
      {text}
    </li>
  </Link>
);

export default NavLink;

import NavLink from "./NavLink";
import SearchInput from "../ui/SearchInput";
import LogoIcon from "../../icons/LogoIcon";
import Hamburger from "../../icons/Hamburger";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className="relative flex flex-wrap items-center justify-center bg-blue-400 shadow-lg"
      id="navheader"
    >
      <nav className="flex items-center w-full px-4 py-4 max-w-7xl">
        <Link to="/" className="mr-auto">
          <LogoIcon />
        </Link>
        <ul className="hidden text-white gap-8 md:flex">
          <NavLink to="/auth/signin" text="Sign in" />
          <NavLink to="/auth/signup" text="Sign up" />
        </ul>
        <div className="ml-8">
          <SearchInput
            f="questions"
            value={searchQuery}
            onChange={handleChange}
            className="hidden p-2 pl-2 md:block"
            iClassName="hidden md:block"
          />
        </div>
        <Hamburger
          className="cursor-pointer md:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        />
      </nav>
      {mobileNavOpen && (
        <div className="w-full px-4 bg-blue-400 md:hidden">
          <ul className="text-white">
            <div className="mb-4">
              <SearchInput
                f="questions"
                value={searchQuery}
                onChange={handleChange}
                className="w-full p-4 text-sm"
              />
            </div>
            <NavLink to="/auth/signin" text="Sign in" className="mb-4" />
            <NavLink to="/auth/signup" text="Sign up" className="mb-4" />
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

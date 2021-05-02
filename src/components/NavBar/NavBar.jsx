import NavLink from "./NavLink";
import SearchInput from "../ui/SearchInput";
import LogoIcon from "../../icons/LogoIcon";
import Hamburger from "../../icons/Hamburger";
import { useSearch } from "../../contexts/Search";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { questionsQuery, setQuestionsQuery } = useSearch();
  const location = useLocation();
  const { user, signout } = useAuth();

  const searchContainerClassNames = () =>
    `mb-4 ${location.pathname != "/" ? "hidden" : "block"}`;

  const signoutButtonClassNames = () =>
    `p-2 rounded text-white hover:bg-blue-500 mb-2 ${
      !user ? "hidden" : "block"
    }`;

  const renderDesktopLinks = () => (
    <ul className="hidden text-white gap-8 md:flex">
      <NavLink to="/auth/signin" text="Sign in" show={!user} />
      <NavLink to="/auth/signup" text="Sign up" show={!user} />
      <button onClick={signout} className={signoutButtonClassNames}>
        Sign out
      </button>
    </ul>
  );

  const renderMobileLinks = () => (
    <ul className="text-white">
      <div className={searchContainerClassNames}>
        <SearchInput
          f="questions"
          value={questionsQuery}
          onChange={handleChange}
          className="w-full p-4 text-sm"
        />
      </div>
      <NavLink to="/auth/signin" text="Sign in" className="mb-4" show={!user} />
      <NavLink to="/auth/signup" text="Sign up" className="mb-4" show={!user} />
      <button onClick={signout} className={signoutButtonClassNames}>
        Sign out
      </button>
    </ul>
  );

  const handleChange = (e) => {
    setQuestionsQuery(e.target.value);
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
        {renderDesktopLinks()}
        <div className={searchContainerClassNames}>
          <SearchInput
            f="questions"
            value={questionsQuery}
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
          {renderMobileLinks()}
        </div>
      )}
    </header>
  );
};

export default NavBar;

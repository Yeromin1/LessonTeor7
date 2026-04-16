import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2>Header authorization</h2>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/articles" className={buildLinkClass}>
          Articles
        </NavLink>
        <NavLink to="/articles/add" className={buildLinkClass}>
          Add article
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2 className={s.title}>Authorization</h2>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/articles" end className={buildLinkClass}>
          Articles
        </NavLink>
        <NavLink to="/articles/add" className={buildLinkClass}>
          Add article
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

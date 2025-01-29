import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-xs rounded-full navigation text-white p-4">
      <ul className="flex space-x-4 justify-evenly items-center">
        <li>
          <NavLink
            to="/documentation"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Privacy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            Terms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

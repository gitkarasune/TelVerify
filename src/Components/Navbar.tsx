import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-black text-sm rounded-full navigation text-white p-4">
      <ul className="flex space-x-4 justify-center items-center">
        <li>
          <NavLink
            to="/documentation"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
          >
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
          >
            Privacy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/terms"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-white')}
          >
            Terms
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
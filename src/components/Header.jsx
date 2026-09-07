import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const isAdmin = true;

  return (
    <div className="topnav">

      {/* Logo */}
      <Link to="/">
        <img
          id="logo"
          src="/polar-bear.png"
          alt="Logo"
        />
      </Link>

      {/* User Type */}
      {isAdmin ? (
        <span className="userType">Admin</span>
      ) : (
        <span className="userType">User</span>
      )}

      {/* Navigation */}
      <nav>
        <ul>

          {/* UseState Dropdown */}
          <li className="dropdown">
            <button className="dropbtn">
              useState ▾
            </button>

            <div className="dropdown-content">
              <Link to="/useStateDemo1">
                useState Demo 1
              </Link>

              <Link to="/useStateDemo2">
                useState Demo 2
              </Link>

              <Link to="/useStateDemo3">
                useState Demo 3
              </Link>

              <Link to="/useStateDemo4">
                useState Demo 4
              </Link>

              <Link to="/useStateDemo5">
                useState Demo 5
              </Link>
            </div>
          </li>


          {/* Forms Dropdown */}
          <li className="dropdown">
            <button className="dropbtn">
              Forms ▾
            </button>

            <div className="dropdown-content">

              <Link to="/formdemo1">
                Form Demo 1
              </Link>

              <Link to="/formdemo2">
                Form Demo 2
              </Link>

              <Link to="/formdemo3">
                Form Demo 3
              </Link>

              <Link to="/formsDemo4">
                Form Demo 4
              </Link>

            </div>
          </li>

        </ul>
      </nav>

    </div>
  );
};

export default Header;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setUser}) => {
    const [dropdownLabel, setDropdownLabel] = useState('Login as');

    const dropdownClick = (user) => {
        if (user === 'none') {
            setDropdownLabel('Login as');
            setUser(null);
            return;
        }
        if (user === 'Admin')
            setDropdownLabel(user);
        else
            setDropdownLabel('Customer ' + user);

        setUser(user);
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item bg-light active">
                <Link to="/" className="nav-link">Order<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item bg-light">
                <Link to="/history" className="nav-link">History</Link>
            </li>
          </ul>
          <span className="bg-light dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {dropdownLabel}
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <button className="dropdown-item" type="button" onClick={() => dropdownClick('1138')}>Customer 1138</button>
                <button className="dropdown-item" type="button" onClick={() => dropdownClick('3199')}>Customer 3199</button>
                <button className="dropdown-item" type="button" onClick={() => dropdownClick('Admin')}>Admin</button>
                <button className="dropdown-item" type="button" onClick={() => dropdownClick('none')}>None</button>
              </div>
            </span>
        </div>
      </nav>
    );
}

export default Navbar;
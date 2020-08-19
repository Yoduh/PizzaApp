import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import brand from '../images/brand.png';

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
    <nav className="navbar navbar-expand-lg navbar-dark">
        <img className="navbar-brand" src={brand} height="50px" alt="brand"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Order<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/history" className="nav-link">History</Link>
            </li>
          </ul>
          <span className="dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.scss';

function Navbar() {
    return (
        <Fragment>
            <nav>
                <Link className="navbar-brand" to="/">Dashboard</Link>
            </nav>
        </Fragment>
    )
}

export default Navbar;

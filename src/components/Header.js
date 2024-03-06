import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p>
            <span><NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink></span>
            <span><NavLink to="/create" activeClassName="is-active">Create </NavLink></span>
            <span><NavLink to="/help" activeClassName="is-active">Help </NavLink></span>
        </p>
    </header>
);

export default Header;
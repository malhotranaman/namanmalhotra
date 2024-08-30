import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Naman Malhotra</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/poll">Poll</Link>
            </nav>
        </header>
    );
}

export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="NavBar">
                    <div className="linkspace">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="linkspace">
                        <Link to="/">Home</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
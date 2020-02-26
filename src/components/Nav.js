import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/css/nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <h2>Szállás</h2>
                <div>
                    <ul>
                        <li>+36 798 3212</li>
                        <li>szallas@szallas.com</li>
                    </ul>
                    <ul>
                        <li><Link to="/">Kezdőlap</Link></li>
                        <li><Link to="/pictures">Képek</Link></li>
                        <li><Link to="/contact">Kapcsolat</Link></li>
                    </ul>
                </div>
                
            </nav>
        );
    }
}

export default Nav;

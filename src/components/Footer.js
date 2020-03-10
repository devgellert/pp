import React from 'react';
import '../style/css/footer.css'
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const Footer = () => {
    return (
        <footer>
            <div className="footer-section-wrapper">
                <div className="footer-section">
                    <h2>Elérhető tartalmak:</h2>
                <ul>
                    <li><Link style={linkStyle} to="/">Kezdőlap</Link></li>
                    <li><Link style={linkStyle} to="/pictures">Képek</Link></li>
                    <li><Link style={linkStyle} to="/book">Foglalás</Link></li>
                </ul>
                </div>
                <div className="footer-section">
                    <h2>Hírlevél</h2>
                    <form>
                        <label>Iratkozzon fel a hírlevelünkre!</label><br/>
                        <input placeholder="Email..." type="text"/>
                    </form>
                </div>
                <div className="footer-section">
                    <h2>Adatok</h2>
                    <ul>
                        <li>Telefonszám: +36307982133</li>
                        <li>Számlaszám: 1312312321</li>
                        <li>Cím: 8624 Balatonszárszó Rónay György utca 18</li>
                        <li>Oldalt készítette: Puskás Gellért</li>
                    </ul>
                </div>
            </div>
            

            
            
            
        </footer>
    );
}

export default Footer

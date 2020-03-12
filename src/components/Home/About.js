import React, { Component } from 'react';
import '../../style/css/about.css';
import { tabs, why } from '../../assets/about';
export class About extends Component {

    
    render() {
        
        return (
            <div>
                <section id="about-wrapper">
                    <h1>Szolgáltatásaink</h1>
                    <div className="horizontal-half-line"></div>
                    { tabs }
                </section>
                { why }
            </div>
        );
    }
}

export default About;

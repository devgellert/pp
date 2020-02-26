import React, { Component } from 'react';
import img3 from '../images/3.jpg'
import img10 from '../images/10.jpg'
import img8 from '../images/8.jpg'
import '../style/css/galery.css'

export class Galery extends Component {
    render() {
        return (
            <div id="galery-wrapper">
                <div>
                    <img src={img3}/>
                    <img src={img8}/>
                    <img src={img10}/>
                    <button>További képek</button>
                </div>
                
            </div>
        );
    }
}

export default Galery;

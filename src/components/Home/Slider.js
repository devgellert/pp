import React, { Component } from 'react';
import '../../style/css/slider.css';
import slide1 from '../../images/1.jpg'
import slide2 from '../../images/2.jpg'
import slide3 from '../../images/3.jpg'

import { nextBackground, previousBackground } from './functions';


export class Slider extends Component {
    constructor(props) {
        super(props);
        this.nextBackground = nextBackground.bind(this);
        this.previousBackground = previousBackground.bind(this);
    }
    state = {
        pictures: [
            slide1, slide2, slide3
        ],
        index: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => this.nextBackground(this.state.index), 3000);
    }
    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        return (
                <section id="slider-wrapper" >
                    <div 
                        className="slider-current hide-slide" 
                        style={{backgroundImage: `url(${ this.state.pictures[this.state.index] })`}}
                    >
                    </div>
                </section>
        );
    }
}

export default Slider;

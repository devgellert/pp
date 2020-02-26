import React, { Component } from 'react';
import '../style/css/slider.css';
import slide1 from '../images/1.jpg'
import slide2 from '../images/2.jpg'
import slide3 from '../images/3.jpg'




export class Slider extends Component {
    state = {
        pictures: [
            slide1, slide2, slide3
        ],
        index: 0
    };
    
    nextBackground = (index) => {
        const max = this.state.pictures.length - 1;
        index === max ? this.setState({index: 0}) : this.setState({index: this.state.index+1})
    }
    previousBackground = (index) => {
        const max = this.state.pictures.length - 1;
        index === 0 ? this.setState({index: max}) : this.setState({index: this.state.index-1})
    }

    componentDidMount() {
        setInterval(() => this.nextBackground(this.state.index), 3000);
    }

    render() {
        return (
                <section id="slider-wrapper" >
                <div 
                className="slider-current hide-slide" 
                style={{backgroundImage: `url(${this.state.pictures[this.state.index]})`}}
                
                >
                    </div>
                </section>
            
        );
    }
}

export default Slider;

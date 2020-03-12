import React, { Component } from 'react';
import '../../style/css/app.css';
import Slider from './Slider';
import BookingField from '../Book/BookingField';
import About from './About';

export class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <BookingField/>
                <About aboutId={this.props.match.params.aboutid}/>
            </div>
        );
    }
}

export default Home;

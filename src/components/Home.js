import React, { Component } from 'react';
import '../style/css/app.css';
import Slider from './Slider';
import BookingField from './BookingField';
import BookingSection from './BookingSection';
import About from './About';
import Galery from './Galery';

export class Home extends Component {

    render() {
        return (
            <div>
                <Slider/>
                <BookingField/>
                <About aboutId={this.props.match.params.aboutid}/>
                <Galery/>
                <BookingSection/>
            </div>
        );
    }
}

export default Home;

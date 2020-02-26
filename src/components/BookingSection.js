import React, { Component } from 'react';
import '../style/css/book.css';

export class BookingSection extends Component {
    render() {
        return (
            <div id="booking-section">
                <h1>Foglaljon most!</h1>
                <button> <a href="#booking-field">Foglaláshoz!</a> </button>
            </div>
        );
    }
}

export default BookingSection;

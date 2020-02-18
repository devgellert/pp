import React, { Component } from 'react';
import '../style/css/book.css';
export class BookingField extends Component {
    render() {
        return (
            <section id="booking-field">
                <form>
                    <div>
                        <label>Érkezés</label> <br/>
                        <input type="text"></input>
                    </div>
                    <div class="vertical-line"></div>
                    <div>
                        <label>Érkezés</label> <br/>
                        <input type="text"></input>
                    </div>
                    <div class="vertical-line"></div>
                    <div>
                        <label>Vendégek</label> <br/>
                        <input type="text"></input>
                    </div>
                    <button>Foglalás</button>
                </form>
            </section>
        );
    }
}

export default BookingField;

import React, { Component } from 'react';
import '../../style/css/book.css';
import { connect } from 'react-redux';
import { getBookData } from '../../redux/actions/bookActions';
import { validInputs , readyToSubmit, getSaturdays, getThisAndNextYear, setArrivalMonthOptions, handleChange, handleInput, setDepartureMonthOptions } from '../../functions';
import { BookDate } from './functions';
import axios from 'axios';
import BookingDocu from './BookingDocu';

export class BookingSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                arrivals: {
                    years: getThisAndNextYear('arrival'),
                    months: undefined,
                    days: undefined
                },
                departures: {
                    years: undefined,
                    months: undefined,
                    days: undefined
                }
            },
            arrival: {
                year: this.props.book.arrival.year,
                month: this.props.book.arrival.month,
                day: this.props.book.arrival.day
            },
            departure: {
                year: this.props.book.departure.year,
                month: this.props.book.departure.month,
                day: this.props.book.departure.day
            },
            person: 2,
            name: '',
            phone: '',
            email: '',
            message: ''
    }
    this.getSpecificMonths = setDepartureMonthOptions.bind(this);  
    this.getSaturdays = getSaturdays.bind(this);
    this.handleChange = handleChange.bind(this);
    this.setArrivalMonthOptions = setArrivalMonthOptions.bind(this);
    this.readyToSubmit = readyToSubmit.bind(this); 
    this.handleInput = handleInput.bind(this);
    this.validInputs = validInputs.bind(this);
    this.setDepartureMonthOptions = setDepartureMonthOptions.bind(this);
    this.BookDate = BookDate.bind(this);
    }
    
    componentDidMount() {
        this.props.getBookData();
    }
    
    render() {
        return (

            <div id="book-page">
                <h2>- Foglaljon szállást már most a nyárra -</h2>        
                <h1>Szállásfoglalás</h1>
            <BookingDocu/>
            <form id="other-info">
                    <this.BookDate/>
                    <textarea 
                        style={{marginBottom: '20px', marginTop: '20px'}}
                        placeholder="Üzenet (opcionális)"
                        name="message"
                        onChange={e => this.handleInput(e)}
                    >
                        {this.state.message}
                    </textarea>

                    <div id='data-input'>
                        <b>Név*</b>
                    <br/>
                    <input
                        onChange={e => this.handleInput(e)}
                        name='name'
                        value={this.state.name}
                        type="text"
                    />
                    <br/>
                    <b>Személyek száma*</b> <br/>
                    <input
                        onChange={e => this.handleInput(e)}
                        name='person'
                        value={this.state.person}
                        type="text"
                    />
                    <br/>
                    <b>Telefonszám*</b> <br/>
                    <input
                        onChange={e => this.handleInput(e)}
                        name='phone'
                        value={this.state.phone}
                        type="tel"
                    />
                    <br/>
                    <b>E-mail*</b>
                    <br/>
                    <input
                        onChange={e => this.handleInput(e)}
                        name='email'
                        value={this.state.email}
                        type="text"
                    />
                    <button
                        onClick={(e) => {
                        e.preventDefault();
                            axios.post('http://localhost:5000/api/send', this.state)
                            .then(res => console.log(res.status) )
                            .catch((err) => console.log(err));
                    }}
                    >Küldés</button>
                    </div>
                    
                    
                    
            </form>   
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    book: state.book
})

const mapDispatchToProps = dispatch => {
    return {
        getBookData: () => dispatch(getBookData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookingSection);

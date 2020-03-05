import React, { Component } from 'react';
import '../style/css/book.css';
import { connect } from 'react-redux';
import { getBookData } from '../redux/actions/bookActions';
import { validInputs , readyToSubmit, getSaturdays, getThisAndNextYear, setArrivalMonthOptions, handleChange, handleInput, setDepartureMonthOptions } from '../functions';
import axios from 'axios';
import Select from 'react-select';
import BookingDocu from './bookingAssets/BookingDocu';

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
    }
    
    componentDidMount() {
        this.props.getBookData();
    }
    

    BookDate = () => {
        if(this.props.book.arrival.year && this.props.book.arrival.month && this.props.book.arrival.day && this.props.book.departure.year && this.props.book.departure.month && this.props.book.departure.day) {
            return (
                <div className="booking-date-filled">
                    
                    <div>
                        <b>Érkezés dátuma:</b>
                        <p>{this.props.book.arrival.year + '.' + this.props.book.arrival.month + '.' + this.props.book.arrival.day}</p>
                    </div>
                    <div>
                        <b>Távozás dátuma:</b>
                        <p>{this.props.book.departure.year + '.' + this.props.book.departure.month + '.' + this.props.book.departure.day}</p>
                    </div>
                        <small>(Kezdőlapról)</small>
                    
                    
                </div>
            );
        }else{
            return (
                <div className="booking-date">
                    <b>Érkezés*</b> <br/>
                    <div>
                        <Select
                            name="arrivalYear"
                            className="select"
                            placeholder="Érkezés éve*"
                            options={this.state.options.arrivals.years}
                            onChange={ data => {
                                this.handleChange(data);
                                this.setArrivalMonthOptions();
                            }}
                        />
                        
                        <Select
                            isDisabled = { !this.state.arrival.year ? true : false }
                            options={this.state.options.arrivals.months}
                            className="select"
                            placeholder="Érkezés hónapja*"
                            onChange = {data => {
                                this.handleChange(data);
                                this.setDepartureMonthOptions();
                        }}

                        />
                        <Select
                            isDisabled = { !(this.state.arrival.year && this.state.arrival.month) ? true : false }
                            className="select"
                            placeholder="Érkezés napja*"
                            onChange={data => {
                                this.handleChange(data);
                            }}
                            options={this.state.options.arrivals.days}
                        />

                    <b>Távozás*</b> <br/>
                    <Select
                            name="departureYear"
                            isDisabled
                            className="select"
                            placeholder={this.state.departure.year || "Távozás éve*"}
                            options={this.state.options.arrivals.years}
                            isSearchable
                            
                            onChange={
                                data => {
                                this.handleChange(data);
                            }}
                        />

                    <Select
                        isDisabled = { !(this.state.arrival.year && this.state.arrival.month && this.state.arrival.day && this.state.departure.year) ? true : false }
                        options={this.state.options.departures.months}
                        className="select"
                        placeholder="Távozás hónapja*"
                        
                        onChange = {data => {
                            this.handleChange(data);
                            setTimeout(() => {
                                this.setState({
                                    options: {
                                        ...this.state.options,
                                        departures: {
                                            ...this.state.options.departures,
                                            days: this.getSaturdays(this.state.departure.year, this.state.departure.month, 'departure')
                                        }
                                    }
                                })
                            }, 1)   
                        }}

                        />
                        <Select
                        isDisabled = { !(this.state.departure.year && this.state.departure.month && this.state.arrival.day) ? true : false }
                        className="select"
                        placeholder="Távozás napja*"
                        onChange={
                            data => this.handleChange(data)
                        }
                        options={this.state.options.departures.days}
                        />
                </div>
            </div>
                

        )}
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
                    placeholder="Üzenet (opcionális)"
                    name="message"
                    onChange={e => this.handleInput(e)}
                    >{this.state.message}</textarea>
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
                            if(this.state.name.length > 5 && this.state.person > 0 && this.state.phone && this.state.email.length > 5){
                                axios.post('http://localhost:5000/api/send', this.state)
                                .then(res => console.log(res) )
                                .catch(err => console.log(err));
                            }else {
                                console.log('inputs are not valid');
                            }  
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

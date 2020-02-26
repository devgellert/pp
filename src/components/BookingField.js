import React, { Component } from 'react';
import '../style/css/book.css';
import { validInputs ,toggleActive, readyToSubmit, getSaturdays, getThisAndNextYear, setArrivalMonthOptions, handleChange, handleInput, setDepartureMonthOptions } from '../functions';
import Select from 'react-select';
import axios from 'axios';

export class BookingField extends Component {
    
    constructor(props) {
        super(props);
       
        this.state = {
            person: 2,
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
                year: undefined,
                month: undefined,
                day: undefined
            },
            departure: {
                year: undefined,
                month: undefined,
                day: undefined
            },
            name: '',
            person: 2,
            phone: '',
            email: '',
            active: false
        }
        this.getSpecificMonths = setDepartureMonthOptions.bind(this);  
        this.getSaturdays = getSaturdays.bind(this);
        this.handleChange = handleChange.bind(this);
        this.setArrivalMonthOptions = setArrivalMonthOptions.bind(this);
        this.readyToSubmit = readyToSubmit.bind(this); 
        this.handleInput = handleInput.bind(this);
        this.toggleActive = toggleActive.bind(this);
        this.validInputs = validInputs.bind(this);
    }
    render() {
        return (
            <section id="booking-field">
                <form id="dates">
                    <div className="booking-section">
                        <label>Érkezés</label> <br/>
                        <div>
                            <Select
                                name="arrivalYear"
                                className="select"
                                placeholder="Select year"
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
                            placeholder="Month"
                            onChange = {data => {
                                this.handleChange(data);
                                setTimeout(() => {
                                    this.state.options.arrivals.days = this.getSaturdays(this.state.arrival.year, this.state.arrival.month, 'arrival');
                                    this.setState(this.state);
                                    setDepartureMonthOptions.bind(this)();
                                }, 1);
                            }}

                            />
                            <Select
                            isDisabled = { !(this.state.arrival.year && this.state.arrival.month) ? true : false }
                            className="select"
                            placeholder="Day"
                            onChange={data => {
                                this.handleChange(data);
                            }}
                            
                            options={this.state.options.arrivals.days}
                            />
                        </div>
                        
                    </div>

                    <div className="vertical-line"></div>
                    
                    <div className="booking-section">
                        <label>Távozás</label> <br/>
                        <div>
                        <Select
                                name="departureYear"
                                isDisabled
                                className="select"
                                placeholder={this.state.departure.year}
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
                            placeholder="Hónap"
                            
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
                            placeholder="Nap"
                            onChange={
                                data => this.handleChange(data)
                            }
                            options={this.state.options.departures.days}
                            />
                        </div>
                        
                        
                    </div>
                    <div className="vertical-line"></div>
                    <div className="booking-section">
                        <button 
                        onClick={e => this.toggleActive(e)}
                        > {this.readyToSubmit() ? 'FOGLALÁS >' : 'TÖLTSE KI'}</button>
                    </div>
                    
                </form>
                    <div className={this.state.active ? 'display' : 'hide'} id="final-booking">
                    
                            <form id="other-info">
                                <span
                                onClick={e => this.toggleActive(e)}
                                >&#10006;</span>
                                <div>
                                    <b>Érkezés dátuma:</b>
                                    <p>{this.state.arrival.year + '.' + this.state.arrival.month + '.' + this.state.arrival.day}</p>
                                    <b>Távozás dátuma:</b>
                                    <p>{this.state.departure.year + '.' + this.state.departure.month + '.' + this.state.departure.day}</p>
                                    <b>Név:</b> <br/>
                                    <input
                                        onChange={e => this.handleInput(e)}
                                        name='name'
                                        value={this.state.name}
                                        type="text"/><br/>
                                    <b>Személyek száma:</b> <br/>
                                    <input
                                        onChange={e => this.handleInput(e)}
                                        name='person'
                                        value={this.state.person}
                                        type="text"/><br/>
                                    <b>Telefonszám:</b> <br/>
                                    <input
                                        onChange={e => this.handleInput(e)}
                                        name='phone'
                                        value={this.state.phone}
                                        type="tel"/><br/>
                                        <p>{this.state.phone}</p>
                                    <b>E-mail:</b> <br/>
                                    <input
                                        onChange={e => this.handleInput(e)}
                                        name='email'
                                        value={this.state.email}
                                        type="text"/><br/>
                                    <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if(this.validInputs()){
                                            axios.post('/api/booking', this.state)
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

            </section>
                    
        );
    }
}

export default BookingField;

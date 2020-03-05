import React, { Component } from 'react';
import '../../style/css/book.css';
import { validInputs , readyToSubmit, getSaturdays, getThisAndNextYear, setArrivalMonthOptions, handleChange, handleInput, setDepartureMonthOptions } from '../../functions';
import Select from 'react-select';
import { setBookData } from '../../redux/actions/bookActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class BookingField extends Component {
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
                year: undefined,
                month: undefined,
                day: undefined
            },
            departure: {
                year: undefined,
                month: undefined,
                day: undefined
            }
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
                                placeholder={this.state.departure.year || "Távozás éve*"}
                                options={this.state.options.arrivals.years}
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
                    <div className="vertical-line"></div>
                    <div className="booking-section">
                        <Link to="/book">
                        <button type="button" 
                            onClick={e => {
                                if(this.readyToSubmit()) {
                                    this.props.setBookData({
                                        arrival: {
                                            year: this.state.arrival.year,
                                            month: this.state.arrival.month,
                                            day: this.state.arrival.day,
                                        },
                                        departure: {
                                            year: this.state.departure.year,
                                            month: this.state.departure.month,
                                            day: this.state.departure.day,
                                        }
                                        })  
                                    }
                                    
                            }
                            }   
                        >
                        Foglalás
                        </button>
                        </Link>
                    </div>
                    
                </form>
                    
            </section>
                    
        );
    }
}
const mapStateToProps = state => ({
    book: state.book
})

const mapDispatchToProps = dispatch => {
    return {
        setBookData: (data) => dispatch(setBookData(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookingField);
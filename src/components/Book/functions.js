
import React, { Component } from 'react';
import Select from 'react-select';

export function BookDate() {
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
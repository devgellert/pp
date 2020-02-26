import Axios from "axios";

export function getSaturdays(year, month, option) {
    const n = new Date(year, month, 0).getDate();
    let saturdays = [];


    if (option === 'departure' && this.state.arrival.month == this.state.departure.month) {


        for (let i = 1; i <= n; i++) {
            let day = new Date(year, month, i);
            if (day.getDay() === 6 ) {
                if (day.getDate() > this.state.arrival.day) {
                    saturdays.push({
                            value: day.getDate(),
                            label: day.getDate().toString(),
                            name: option === 'arrival' ? 'arrivalDay' : 'departureDay'
                    });
                }
                
            }
        }  
    }else {
        for (let i = 1; i <= n; i++) {
            let day = new Date(year, month, i);
            if(day.getDay() == 6) {
                
                saturdays.push({
                        value: day.getDate(),
                        label: day.getDate().toString(),
                        name: option === 'arrival' ? 'arrivalDay' : 'departureDay'
                });
            }
            }
            
    }
    
    return saturdays;
}

export const getThisAndNextYear = option => {
    const now = new Date();
    const year = now.getFullYear();
    return [
        {label: year.toString(), value: year, name: option === 'arrival' ? 'arrivalYear' : 'departureYear'},
        {label: (year+1).toString(), value: year+1, name: option === 'arrival' ? 'arrivalYear' : 'departureYear'}
    ]
}
export function setArrivalMonthOptions() {
    this.state.options.arrivals.months = [
            {
                label: 'Június',
                value: 5,
                name: 'arrivalMonth'
            },
            {
                label: 'Július',
                value: 6,
                name: 'arrivalMonth'
            },
            {
                label: 'Augusztus',
                value: 7,
                name: 'arrivalMonth'
            }
        ];
        return this.setState(this.state);
}
export function setDepartureMonthOptions() {
    const months = [
        {
            label: 'Június',
            value: 5,
            name: 'departureMonth'
        },
        {
            label: 'Július',
            value: 6,
            name: 'departureMonth'
        },
        {
            label: 'Augusztus',
            value: 7,
            name: 'departureMonth'
        }
    ].filter(month => month.value >= this.state.arrival.month);
    this.state.options.departures.months = months;
    this.setState(this.state);

}
export function handleInput(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
}
export function toggleActive(e) {
    if(this.state.arrival.year && this.state.arrival.month && this.state.arrival.day &&this.state.departure.year && this.state.departure.month && this.state.departure.day )
        {e.preventDefault();
        this.setState({...this.state, active: !this.state.active
    })}else {

    }
}
export function validInputs() {
    return this.state.active && this.state.name.length > 5 && this.state.person > 0 && this.state.phone && this.state.email.length > 5
}
export function handleChange(data) {
    switch (data.name) {
        case 'arrivalYear':
            this.state.arrival.year = data.value;
            this.state.arrival.month = undefined;
            this.state.arrival.day = undefined;
            this.state.departure.year = data.value;
            return this.setState(this.state);
        case 'arrivalMonth':
            this.state.arrival.month = data.value
            return this.setState(this.state);
        case 'arrivalDay':
            return this.setState({
                ...this.state,
                arrival: {
                    ...this.state.arrival,
                    day: data.value
                }
            })
        case 'departureMonth':
            this.state.departure.month = data.value
            return this.setState(this.state);
        case 'departureDay':
            this.state.departure.day = data.value
            return this.setState(this.state);
            
        default: return
    }
    
}
export function readyToSubmit() {
    return (this.state.arrival.year && this.state.arrival.month && this.state.arrival.day && this.state.departure.year && this.state.departure.month && this.state.departure.day)
}
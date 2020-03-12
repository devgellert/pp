import React from 'react';
import phonePng from '../../images/phone.png';
import calendarPng from '../../images/calendar.png';
import arrowPng from '../../images/arrow.png'
import carPng from '../../images/car.png'
const BookingDocu = () => {
    return (
        <div id="booking-documentation">
            <div className="single-booking-documentation">
                <img src={calendarPng}/>
                <p>Foglalás csak szombattól szombatig lehetséges, a mezők autómatikusan kihozzák a lehetséges szombati napokat.</p>
                <p>Foglaljon a mezők kitöltésével, melyet e szövegek alatt talál</p>

            </div>
            <img className="arrow" src={arrowPng}/>
            <div className="single-booking-documentation">
                <img src={phonePng}/>
                <p>Ezután a házigazda fel fogja hívni Önöket. Ezért fontos a helyes telefonszám (maximum 2 nap eltéréssel)</p>
                <p>Vele tudnak egyeztetni a szállással kapcsolatban.</p>
            </div>
            <img className="arrow" src={arrowPng}/>
            <div className="single-booking-documentation">
                <img src={carPng}/>
                <p>Adott nap szombaton délután tudnak érkezni, illetve ugyancsak adott szombaton tudják elhagyni a szállást 10 óráig.</p>
            </div>
        </div>
    );
}

export default BookingDocu;

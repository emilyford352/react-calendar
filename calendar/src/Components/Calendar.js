import React from 'react';
import Day from './Day';
import '../App.css';

const Calendar = () => {
    return (
        <div>
            <Day date="1st" />
            <Day date="2nd" />
            <Day date="3rd" />
        </div>
    );
}

export default Calendar;
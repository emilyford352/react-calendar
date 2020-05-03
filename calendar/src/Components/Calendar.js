import React from 'react';
import Day from './Day';
import '../App.css';

const Calendar = () => {
    const january = Array.from(Array(31).keys()); //Array

    return january.map((date) => {
    	return (
    		<Day date={date}/>
    	);
    });
};


export default Calendar;
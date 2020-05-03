import React from 'react';
import Day from './Day';
import MonthChanger from './Month-Changer';
import '../App.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMonth: 'January'
        }
    }
    render() {
        const january = Array.from(Array(31).keys());
        return (
            <div>
                <MonthChanger />
                { this.state.currentMonth }
                {
                    january.map((date) => {
                        return (
                            <Day date={date}/>
                    );
                    })
                }
            </div>
        )
    }
};


export default Calendar;
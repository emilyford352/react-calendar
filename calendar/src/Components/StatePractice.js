import React from 'react';
import Day from './Day';
import '../App.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'something',
            test2: 'something1'
        };

        this.blah = this.blah.bind(this);
    }

    blah() {
        this.setState({test: 'somethingelse'});
    }

    render() {
        return (
            <div onClick={this.blah}>
                {this.state.test}
            </div>
        );
    }
};


export default Calendar;
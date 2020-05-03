import React from 'react';
import '../App.css';
import ShowLink from './ShowLink.js';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Show = (props) => {
    return (
        <Grid container spacing={ 2 } alignItems="center" justify="center" className="show">
        <Grid item xs={4}>
        <h2>
        { props.title }
        &nbsp;
    { props.link && <ShowLink link={ props.link }/> }
    </h2>
    </Grid>
    <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
        <Grid container direction="column">
        <Grid item className="show-place">
        <b>
        <FontAwesomeIcon icon={ faMapMarker } style={{color: '#b2d6da'}}/>
    &nbsp;
        { props.place }
    </b>
    </Grid>
    <Grid item>
    { props.date } - { props.time }
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    );
}

export default Show;
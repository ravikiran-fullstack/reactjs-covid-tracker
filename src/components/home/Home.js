import React from 'react'

import Typography from '@material-ui/core/Typography';

import useStyles from './homeStyles';
import ChartOne from '../chart1/ChartOne';

const url = "https://course-api.com/react-tours-project";

const Home = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChartOne></ChartOne>
      </main>
    )
}

export default Home

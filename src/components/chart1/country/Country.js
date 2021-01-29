import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import useStyles from './countryStyles'

const Country = (props) => {
  // console.log(props)
  const [countryData, setCountryData] = useState('')
  const [confirmedCases, setConfirmedCases] = useState('')
  const [recoveredCases, setRecoveredCases] = useState('')
  const [numberOfDeaths, setNumberOfDeaths] = useState('')

  const classes = useStyles()
  const getCountryData = async () => {
    try {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${props.name}`
      )
      if (response.status < 200 || response.status > 299) {
        throw new Error()
      }
      const data = await response.json()
      // console.log(data);
      setCountryData(data)
      setConfirmedCases(data.confirmed.value)
      setNumberOfDeaths(data.deaths.value)
      setRecoveredCases(data.recovered.value)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCountryData()
  }, [])
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div>
            <Typography component='h5' variant='h5' className={classes.heading}>
              {props.name}
            </Typography>
          </div>
          <hr />
          <Typography variant='subtitle1' color='textSecondary'>
            <p>Confirmed</p>
            {confirmedCases}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            <p>Deaths</p>
            {numberOfDeaths}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            <p>Recovered</p>
            {recoveredCases}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default Country

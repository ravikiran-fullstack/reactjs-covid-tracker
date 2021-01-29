import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import useStyles from './countryStyles'

const Country = (props) => {
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
            <Typography component='h5' variant='h5'>
              {props.name}
            </Typography>
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ margin: '0 10px' }}>
              <p>Confirmed</p>
              <Typography variant='subtitle1' color='textSecondary'>
                {confirmedCases}
              </Typography>
            </div>
            <div style={{ margin: '0 10px' }}>
              <p>Deaths</p>
              <Typography variant='subtitle1' color='textSecondary'>
                {numberOfDeaths}
              </Typography>
            </div>
            <div style={{ margin: '0 10px' }}>
              <p>Recovered</p>
              <Typography variant='subtitle1' color='textSecondary'>
                {recoveredCases}
              </Typography>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default Country

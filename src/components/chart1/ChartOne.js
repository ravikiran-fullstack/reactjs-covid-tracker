import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import useStyles from './chartOneStyles'

import Country from './country/Country'
import Dashboard from './dashboard/Dashboard'

const url = 'https://covid19.mathdro.id/api/countries/'

const ChartOne = () => {
  const classes = useStyles()
  const [countriesData, setCountriesData] = useState([])
  const getAllCountriesData = async () => {
    try {
      const response = await fetch(url)
      if (response.status < 200 || response.status > 299) {
        throw new Error()
      }
      const data = await response.json()
      //console.log(data.countries);
      setCountriesData(data.countries)
    } catch (err) {
      console.log(err)
      setCountriesData([])
    }
  }

  useEffect(() => {
    getAllCountriesData()
  }, [])

  return (
    <>
      <div>
        <Switch>
          <Route exact path='/'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/reports'>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {countriesData.map((country, index) => {
                return <Country key={country.name} {...country}></Country>
              })}
            </div>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default ChartOne

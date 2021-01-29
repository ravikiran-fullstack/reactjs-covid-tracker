import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from './appStyles'

import { BrowserRouter as Router } from 'react-router-dom'

import AppBarComponent from './components/appBar/AppBarComponent'
import SideBar from './components/sideBar/SideBar'
import Home from './components/home/Home'

export default function PermanentDrawerLeft() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBarComponent></AppBarComponent>
        <SideBar></SideBar>
        <Home></Home>
      </div>
    </Router>
  )
}

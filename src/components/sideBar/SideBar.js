import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'

import useStyles from './sideBarStyles'

const SideBar = () => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />

      <Button>
        <Link className={classes.btn} to='/'>
          Home
        </Link>
      </Button>
      <Button>
        <Link className={classes.btn} to='/dashboard'>
          Dashboard
        </Link>
      </Button>
      <Button>
        <Link className={classes.btn} to='/reports'>
          Report
        </Link>
      </Button>
    </Drawer>
  )
}

export default SideBar

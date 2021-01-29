import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useStyles from './appBarStyles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FaSearch } from 'react-icons/fa'
import { MdMailOutline, MdNotificationsNone } from 'react-icons/md'
import Divider from '@material-ui/core/Divider'
import Image from 'material-ui-image'

const AppBarComponent = () => {
  const classes = useStyles()
  const [image, setImage] = useState('')

  const fetchImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const image = await response.blob()
    const outside = URL.createObjectURL(image)
    console.log(outside)
  }
  useEffect(() => {
    fetchImage()
  })
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField
              id='outlined-basic'
              label='Search for...'
              variant='outlined'
              style={{
                borderBottomRightRadius: '0px',
                borderTopRightRadius: '0px',
              }}
            />
            <Button
              style={{
                borderBottomLeftRadius: '0px',
                borderTopLeftRadius: '0px',
              }}
              variant='contained'
              color='primary'
            >
              <FaSearch />
            </Button>
          </form>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Button>
              <MdNotificationsNone size='2rem' />
            </Button>
            <Button>
              <MdMailOutline size='2rem' />
            </Button>
          </div>
          <div>
            <Divider orientation='vertical' />
          </div>
          <div
            style={{
              margin: '0 10px',
              display: 'flex',
              width: '140px',
              height: '35px',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p>Douglas McGee</p>
            </div>
            <div>
              <img
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  marginTop: '5px',
                }}
                alt='user'
                src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
              />
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent

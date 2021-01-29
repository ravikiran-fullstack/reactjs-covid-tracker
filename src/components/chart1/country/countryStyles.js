import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '10px',
    height: '150px',
    width: '400px',
    marginBottom: '40px',
    boxShadow: 'none',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    padding: '0 2rem',
  },
  cover: {
    border: '10px solid #c59d5f',
    borderRadius: '10px',

    height: '150px',
  },
  image: {
    height: '150px',
    width: '150px',
  },
  price: {
    color: '#c59d5f',
    fontWeight: 'bold',
  },
}))

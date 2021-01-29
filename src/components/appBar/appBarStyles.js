import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    color: 'black',
    backgroundColor: '#fff',
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  btn: {
    borderBottomLeftRadius: '0px',
    borderTopLeftRadius: '0px',
    backgroundColor: 'green',
  },
  input: {
    borderBottomRightRadius: '0px',
    borderTopRightRadius: '0px',
  },
  hidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

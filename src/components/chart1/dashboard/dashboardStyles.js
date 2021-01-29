import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "10px",
    height: "400px",
    width: "300px",
    marginBottom: "40px",
    boxShadow: "none",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    padding: "0 2rem",
  },
  cover: {
    border: "10px solid #c59d5f",
    borderRadius: "10px",

    height: "150px",
  },
  image: {
    height: "150px",
    width: "150px",
  },
  heading: {
    width: "90%",
  },
  price: {
    color: "#c59d5f",
    fontWeight: "bold",
  },
}));
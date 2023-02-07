import React, { useState } from 'react'
import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from './navbar';
import { makeStyles } from "@material-ui/core/styles";
import { Navigate } from 'react-router-dom';
import { useMediaQuery, Avatar } from "@material-ui/core";
import { GridList, GridListTile } from "@material-ui/core";
import { Grid, Button, Box, Typography, Paper } from "@material-ui/core";
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  heroText: {
    position: "absolute",
    margin: "0 10% 0 10%",
    color: "white",
  },
  header: {
    height: "91vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require("../assets/maintheme.png")})`,
  }
}));
const Homepage = () => {
  const classes = useStyles();
  const [gotosignin,setgotosignin]=useState(false);
  if(gotosignin)
  {
    return <Navigate to="/signup" />
  }
  return (
    <>
      <Navbar />
      <Grid container alignItems="center" className={classes.header}>
        <Grid item className={classes.heroText}>
          <Typography variant="h1" gutterBottom style={{color:"white"}}>
            Get Your Premium Health Care
          </Typography>
          {/* <Typography variant="subtitle1" style={{fontSize:"25px" }} gutterBottom>
            Book Appointments 
          </Typography> */}
          <Button style={{ "min-height": "56px", width: "30%", fontSize: "25px" }} variant="contained" color="primary" onClick={()=>{setgotosignin(true)}}>
            Sign Up Now
          </Button>
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

export default Homepage
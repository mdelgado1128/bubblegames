import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from "../utils/API";
// import axios from 'axios';
import { useHistory } from "react-router-dom"
// import { Divider } from '@material-ui/core';
import '../App.css';
import Alert from '@material-ui/lab/Alert';
// import ButtonPageStepper from '../Components/Stepper';



// import {BrowserRouter as Router, Route } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://material-ui.com/">
        Bubble Games
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// const WhiteTextTypography = withStyles({
//     root: {
//       color: "#8ecbea"
//     }
//   })(Typography);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  pos: {
    marginBottom: 12,
  },

}));

  
export default function SignUpCard() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  
  

//   let history = useHistory();

// function handleSignIn(event) {
    
//     event.preventDefault();
//     API.getAuth ({
//       // eslint-disable-next-line no-undef
//       email,
//       // eslint-disable-next-line no-undef
//       password
//     }).then((res) => {
//       console.log(res);
//       console.log("You are now signed in!")
//      if(!res.data.token) {
//        setLogin(false);
//      } else {
//        localStorage.setItem("token",res.data.token)
//        setLogin(true);
//       history.push("/")

//      }
      
//     }).catch((err) => {
//       console.log(err, "incorrect password or username")
//     })
  
//   }

  function handleSignUp(event) {
    event.preventDefault();
    API.saveAuth ({
      // eslint-disable-next-line no-undef
      email,
      // eslint-disable-next-line no-undef
      password
    }).then((res) => {
      console.log(res, "Thank you for signing up", email);
      
      
    }).catch ((err) => {
      console.log(err)

    })
  }
  function userAuth (event) {
    event.preventDefault();
    API.checkAuth( 
  localStorage.getItem("token")

  ).then ((res) => {
console.log(res)
    })
     
   }

  




  return (
      
   <div className="App-header"> 
    
    <div className={classes.root}> 

  

  

    <Container component="main" maxWidth="xs" justify="center" alignItems="center">
      <CssBaseline />
          <Card className={classes.root} variant="outlined" style={{backgroundColor: "#fffff"}}>
      <CardContent>


      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate >
        <TextField
          
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="First Name"
          name="name"
          autoComplete="name"
          autoFocus
          />
          <TextField
          
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="last"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          label="Last Name"
          name="last"
          autoComplete="last"
          autoFocus
          />
          <TextField
          
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
          
          <Button onClick={handleSignUp}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sign Up
          </Button  >
        

          <Grid container>
            <Grid item>
            <Grid container>
            <Grid item>
            
            {/* <Alert onClose={(login) => {login === false}}> incorrect password or email !</Alert>  */}
            </Grid>
          </Grid>
            </Grid>
          </Grid>

        </form>
      </div>
      
      
              </CardContent>
          </Card>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
 {/* <ButtonPageStepper/> */}
 </div>
 </div>  

   );
}
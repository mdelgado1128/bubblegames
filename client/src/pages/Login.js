//------------IMPORTS------------------------//
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from "../utils/API";
import { useHistory } from "react-router-dom"
import '../App.css';

import BGLogo from '../Components/Logo'

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
//--------------------------------------------------//
//--------------Export Sign in----------------------//
export default function SignInCard() {
  const classes = useStyles();


//--------------AUTH mark---------------------------//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  console.log(login)

  let history = useHistory();

function handleSignIn(event) {
    
    event.preventDefault();
    API.getAuth ({
      // eslint-disable-next-line no-undef
      email,
      // eslint-disable-next-line no-undef
      password
    }).then((res) => {
      console.log(res);
      console.log("You are now signed in!")
     if(!res.data.token) {
       setLogin(false);
     } else {
       localStorage.setItem("token",res.data.token)
       setLogin(true);
      history.push("/")

     }
      
    }).catch((err) => {
      console.log(err, "incorrect password or username")
    })
  
  }

  function handleSignUp(event) {
    history.push("/SignUp")
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
      
   <div className="App"> 
   <BGLogo /> 
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
          
          <Button onClick={handleSignIn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sign In
          </Button  >
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleSignUp}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>

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
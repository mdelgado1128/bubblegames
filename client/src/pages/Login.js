import React, { useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from "../utils/API";
import axios from 'axios';
import { useHistory } from "react-router-dom"
import BGLogo from "../Components/Logo";
import { Divider } from '@material-ui/core';




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

  
export default function SignInCard() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  

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
      history.push("/Kingscup")

     }
      
    }).catch((err) => {
      console.log(err, "incorrect password or username")
    })
  
  }

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
        </form>
      </div>
      
      
              </CardContent>
          </Card>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
 </div>
 </div>  

   );
}
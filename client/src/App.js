import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import SignInCard from './pages/Login'
import BGLogo from "./Components/Logo";
import Kings from './pages/GPKingsCup';
import Quarters from "./pages/GPQuarters";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
  <Router >  

   <div className="App"> 
   
       <div className={classes.root}> 
  
     

      </div>
    </div>  



  <Switch>
    <Route  exact path="/" component={Login} />
    <Route exact path="/Kingscup" component={Kings} />
  </Switch>
</Router>


  );
}
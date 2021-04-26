import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import SignInCard from './pages/Login'
// import BGLogo from "./Components/Logo";
// import Kings from './pages/GPKingsCup';
// import Quarters from "./pages/GPQuarters";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamesButtons from './pages/GamesButtons'
import KingsCupAcc from './pages/GPKingsCup'
import BeerPongAcc from './pages/GPBeerPong'
import QuartersAcc from './pages/GPQuarters'
import FlipcupAcc from './pages/GPFlipCup'
// import Grid from '@material-ui/core/Grid';
// import BGHeader from './Components/Header'
// import SideBar from './Components/SideBar.js'
import ParticlesBg from 'particles-bg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  particlesBg: {
    zIndex: -1,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router >
      <div className={classes.particlesBg}>
      <ParticlesBg type="circle" bg={true} />
      </div>
      <div>

        <div className={classes.root}>


          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/">
              <GamesButtons />
            </Route>
            <Route exact path="/KingsCup">
              <KingsCupAcc />
            </Route>
            <Route exact path="/FlipCup">
              <FlipcupAcc />
            </Route>
            <Route exact path="/Quarters">
              <QuartersAcc />
            </Route>
            <Route path="/BeerPong">
              <BeerPongAcc />
            </Route>
          </Switch>






        </div>
      </div>
     
    </Router>


  );
}
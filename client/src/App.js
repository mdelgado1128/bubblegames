//--------------IMPORTS------------------------//
import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GamesButtons from './pages/GamesButtons'
import KingsCupAcc from './pages/GPKingsCup'
import BeerPongAcc from './pages/GPBeerPong'
import QuartersAcc from './pages/GPQuarters'
import FlipcupAcc from './pages/GPFlipCup'
import ParticlesBg from 'particles-bg';
import BGLogo from './Components/Logo'
import SideBar from './Components/SideBar'
//-----------------------------------------------//
//----------------STYLING------------------------//
//--------Material UI joe------------------------//
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
//-------------------------------------------------//
//------------export main app----------------------//
export default function App() {
  const classes = useStyles();
  localStorage.clear();
 
  return (
    <Router >
      {/* <BGLogo /> */}
      <div className={classes.particlesBg}>
      <ParticlesBg type="circle" bg={true} />
      </div>
      <div>
     
        <div className={classes.root}>
        <BGLogo />
        <SideBar />

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
//---------------------------------------------------//
// *Notes* Logout Fuction, Center Logo, Side Bar more visible//
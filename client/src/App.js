import React, {useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import SignInCard from './pages/Login'
//import BGLogo from "./Components/Logo";
//import Kings from './pages/GPKingsCup';
//import Quarters from "./pages/GPQuarters";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GamesButtons from './pages/GamesButtons'
import KingsCupAcc from './pages/GPKingsCup'
import BeerPongAcc from './pages/GPBeerPong'
import QuartersAcc from './pages/GPQuarters'
import FlipcupAcc from './pages/GPFlipCup'
import CssBaseline from '@material-ui/core/CssBaseline';
import BGHeader from './Components/Header'
import SideBar from './Components/SideBar.js'
import ParticlesBg from 'particles-bg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

 
  return (
    <Router>
      <ParticlesBg type="circle" bg={true} />

   <div className="App-header"> 
          <BGHeader />
       <div className={classes.root}> 
          
     
          <CssBaseline />
    
          
            
            <Switch>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/">
                <GamesButtons/>
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
      </div>
   
 </Router>

  );
}
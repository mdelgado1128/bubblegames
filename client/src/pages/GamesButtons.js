//--------------IMPORTS----------------------//
import React, { useEffect} from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import Grid from '@material-ui/core/Grid';
import FlipCupBtn from '../Components/FlipCupBtn';
import QuartersBtn from '../Components/QuartersBtn';
import KingsCupBtn from '../Components/KingsCupBtn';
import BeerPongBtn from '../Components/BeerPongBtn';
import "../styles/GamesButtons.css";

//--------Export Games Buttons------------//
export default function GamesButtons(props) {
 

  let history = useHistory();


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/Login");
    }
    function userAuth(event) {
      API.checkAuth().then((res) => {
        console.log(res);
        if (!res.data) {
          return history.push("/Login");
        }
      });
    }
    userAuth();
  }, );



  return (
  
    <div className wrapper>
        <Grid container direction='column' spacing={2} alignItems='center'>
        <Grid/>
   
        <Grid container spacing={2} alignItems='center' direction='column'>
        <Grid item ={6}>
        <Link to="./KingsCup.js">
       <div className='BtnAnimation'>
       <KingsCupBtn/>
       </div>
      </Link>
    </Grid>
    
  
    <Grid item ={6}>
      <Link to="/FlipCup">
      <div className='BtnAnimation'>
     <FlipCupBtn/>
     </div>
      </Link>
    </Grid>
  
  <Grid item ={6}>
      <Link to="/Quarters">
      <div className='BtnAnimation'>
    <QuartersBtn/>
    </div>
      </Link>
    </Grid>

<Grid item ={6}>
      <Link to="/BeerPong">
      <div className='BtnAnimation'>
    <BeerPongBtn/>
    </div>
      </Link>
    </Grid>
    </Grid>
    </Grid>
  </div>
  );
}
//----------------------------------------------------//
//*Notes* Add new games and render buttons from a database//
import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { CardActionArea } from '@material-ui/core';
import BGLogo from "../Components/Logo";
import "../styles/GamesButtons.css";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
// import ButtonPageStepper from "../Components/Stepper";
import {
  Link
} from "react-router-dom";

const UseStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },

});
const WhiteTextTypography = withStyles({
    root: {
      color: "#8ecbea"
    }
  })(Typography);

const TealTextTypography = withStyles({
    root: {
      color: "#00897b"
    }
  })(Typography);

const GreyTextTypography = withStyles({
    root: {
      color: "#383838"
    }
  })(Typography);

const BlackTextTypography = withStyles({
    root: {
      color: "#121212"
    }
  })(Typography);

export default function GamesButtons(props) {
  const classes = UseStyles();

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
        <Grid item direction='column' sm={12}><BGLogo/></Grid>
        <Grid/>
   
        <Grid container spacing={2} alignItems='center'>
        <Grid item xs={6}>
      <Card className={classes.root} variant="outlined">
      <Link to="/KingsCup">
      <CardActionArea>
      <CardContent>
          <GreyTextTypography>
        <Typography variant="h5" component="h2">
          King's Cup
        </Typography>
        <Typography className={classes.pos}>
          You'll need: Deck of Cards,<br/> 2-12(or more)players
        </Typography>
        <Typography variant="body2" component="p">
          Players take turns pulling cards that decide how the game is played.
          <br />
        </Typography>

        </GreyTextTypography>

      </CardContent>
      {/* <CardActions>
        <Button size="small">I want to play this game </Button>
      </CardActions> */}
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    
  
    <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <Link to="/FlipCup">
      <CardActionArea>
      <CardContent>
        <TealTextTypography>
        <Typography variant="h5" component="h2">
          Flip Cup
        </Typography>
        <Typography className={classes.pos}>
          You'll need: Plastic cups and a table/ countertop. 
          <br></br>
          1-2 or more players
        </Typography>
        <Typography variant="body2" component="p">
          Skillful game involving the flipping of plastic cups.
          <br />
        </Typography>
        </TealTextTypography>
      </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
  
  <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <Link to="/Quarters">
      <CardActionArea>
      <CardContent>
        <WhiteTextTypography>
        <Typography variant="h5" component="h2">
          Quarters
        </Typography>
        <Typography className={classes.pos}>
          You'll need: Tall, large mouthed glass. Quarters. 
          <br/>
          1-2 or more players
        </Typography>
        <Typography variant="body2" component="p">
          Iconic game where you skillfully bounce quarters
          <br />
        </Typography>
        </WhiteTextTypography>
      </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>

<Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <Link to="/BeerPong">
    <CardActionArea>
      <CardContent>
        <BlackTextTypography>
        <Typography variant="h5" component="h2">
          Beer Pong
        </Typography>
        <Typography className={classes.pos}>
         You'll need: Ping pong table (or of similar shape and size),
        <br/>
        20+ plastic cups, 2 - 4 Players
        <br />
        Take turns tossing ping pong balls into each others' cups.
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
        </BlackTextTypography>
      </CardContent>
      </CardActionArea>
      </Link>
    </Card>
    </Grid>
    </Grid>
    {/* <Grid container direction='column' spacing={2} alignItems='center'>
    <Grid item xs={12}>
      <ButtonPageStepper/>
    </Grid>
    </Grid> */}
    </Grid>
  </div>
  );
}
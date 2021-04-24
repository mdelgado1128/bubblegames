import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { CardActionArea } from '@material-ui/core';
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

export default function GamesButtons() {
  const classes = UseStyles();

  return (
  
  <div>
   
  
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <Link to="/KingsCup">
      <CardActionArea>
      <CardContent>
          <WhiteTextTypography>
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

        </WhiteTextTypography>

      </CardContent>
      {/* <CardActions>
        <Button size="small">I want to play this game </Button>
      </CardActions> */}
      </CardActionArea>
      </Link>
    </Card>
    
  
    
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
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
  
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <Link to="/Quarters">
      <CardActionArea>
      <CardContent>
        <WhiteTextTypography>
        <Typography variant="h5" component="h2">
          Quarters
        </Typography>
        <Typography className={classes.pos}>
          You'll need: Tall, large mouthed glass. Quarters. 
          <br></br>
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

    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <Link to="/BeerPong">
    <CardActionArea>
      <CardContent>
        <WhiteTextTypography>
        <Typography variant="h5" component="h2">
          Beer Pong
        </Typography>
        <Typography className={classes.pos}>
           
        <br />
        <br />
          2 or more players
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
        </WhiteTextTypography>
      </CardContent>
      </CardActionArea>
      </Link>
    </Card>
 
  </div>
  );
}
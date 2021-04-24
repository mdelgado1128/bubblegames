import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});
const TealTextTypography = withStyles({
  root: {
    color: "#00897b"
  }
})(Typography);

export default function FlipCup() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
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
    </Card>
  );
}
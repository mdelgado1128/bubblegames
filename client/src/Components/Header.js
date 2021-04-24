import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import { withStyles } from "@material-ui/core/styles";
import BGLogo from './Logo'

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});

export default function BGHeader() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#121212"}}>
      <CardContent>
        <BGLogo></BGLogo>
      </CardContent> 
    </Card>
  );
}
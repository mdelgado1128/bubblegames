//------------IMPORTS-------------------//
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BGLogo from './Logo'
//--------------------------------------//
//-----------STYLING--------------------//
//-------Material UI joe----------------//
const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});
//---------------------------------------//
//----------Export Bubble Header---------// 
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
//----------------------------------------//
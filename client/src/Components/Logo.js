//---------IMPORTS------------------//
import React from 'react';
import Logo from '../images/BGLogo.png'
import Grid from '@material-ui/core/Grid';
//----------------------------------//
//-----------logo Export------------//
export default function BGLogo() {
  // Import result is the URL image

  return( 
  <Grid container direction='column' spacing={2} alignItems='center'>
  <img src={Logo} alt="Bubbles Games" />
  </Grid>
  )
}
//-----------------------------------//
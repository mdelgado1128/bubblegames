//---------IMPORTS------------------//
import React from 'react';
import BackArrow from '../images/BackArrow.png';
import {Link} from 'react-router-dom'
//----------------------------------//
//-----------QuartersBtn Export------------//
export default function BackArrowBtn() {
  // Import result is the Back Arrow Image
  return<Link to ='/'><img src={BackArrow} alt="Go Back" /></Link>;
}
//-----------------------------------//
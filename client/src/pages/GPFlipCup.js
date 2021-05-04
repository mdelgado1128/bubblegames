//----------------IMPORTS--------------------//
import React, { useEffect }from  'react';
import { withStyles,} from "@material-ui/core/styles";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import WYNBtn from '../Components/WYNBtn';
import GameRulesBtn from '../Components/GameRulesBtn';
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper"
import "../styles/GamesButtons.css"

//--------------------------------------------//
//--------------STYLING-----------------------//
//---------Material UI joe--------------------//
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
//------------------------------------------------------//
//-------------------Export Flip Cup--------------------//
export default function FlipCupAcc() {
  const [expanded, setExpanded] = React.useState('panel1');

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  

  return (    
  
<div className wrapper>
<Grid container direction='column' spacing={2} alignItems='center'>
<Grid item ={6}>
<div className='BtnAnimation'>

<WYNBtn/>

</div>
<div>
            <Paper variant="outlined">
            <Typography>
       1-2 or more players
            <br />
            Plastic cups and a table/ countertop.
            <br />
    </Typography>
            </Paper>
    </div>
</Grid>
<Grid item xs={12}>
<div className='BtnAnimation'>
<GameRulesBtn/>
</div>
</Grid>
<Grid item xs={6}>
<div>
            <Paper  variant="outlined">
            <Typography>
      <h4>Flip Cup</h4>
      Two teams of an equal number of players stand on opposite sides of a table, facing one another. The players directly facing are opponents. In front of each teammate is a disposable plastic cup filled with a set amount of beer. Generally, the first line inside a disposable cup is used as a marker.

At the start, it is customary for the initiating players to make a toast, after which the first member of each team drinks the entirety of their beverage. When finished, the cup is placed open side up at the edge of the table, and the player who drank it attempts to flip the cup, by flicking or lifting the 
bottom of the cup until it flips and lands face down on the table, If a cup is knocked over in the chain whilst moving to the next cup the player must go back and re-flip. The player may not use two hands, or blow on the cup to guide it to flip over. If the player is unsuccessful on the first try, the cup is reset and re-flipped. Only after the first teammate is done flipping successfully can the next person proceed. Additionally, subsequent players may not touch or manipulate their cup until the previous player has successfully flipped their cup. Whichever team finishes drinking and flipping all its cups first wins.
    </Typography>
            </Paper>
    </div>
</Grid>
</Grid>
</div>
    
  )
};
//--------------------------------------------------------//
//*Notes* Dupe Component?//
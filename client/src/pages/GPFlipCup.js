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
  
<div>
       <Grid container direction="column">
      <Grid item xs={12}>

<WYNBtn/>
<GameRulesBtn/>
      {/* <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What you'll need</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1-2 or more players
            <br />
            Plastic cups and a table/ countertop.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Place penalty drink"(loser(s) will have to drink this.)"
            <br />
            While the plastic cup barely hangs off the edge, 
            <br />
            Players/teams take turns flipping cups 180 degrees into the upside down position
            <br />
            Losing player/team takes the penalty
            <br/>
            Variations of the game may include a line of cups for each team,
            <br />
            Winner is declared upon correctly flipping all their cups in onto the upside down position. 
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      </Grid>
      </Grid>
      
    </div>
    
  )
};
//--------------------------------------------------------//
//*Notes* Dupe Component?//
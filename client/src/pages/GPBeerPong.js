import React, { useEffect }from 'react';
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import API from "../utils/API";
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

export default function BeerPongAcc() {
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
    <div className="App">
      <Grid container direction="column" spacing={2}>
     
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What you'll need</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2 or 4 players
            <br />
            Equipment
            <br/>
            The most common cups used are 18-US-fluid-ounce disposable plastic cup with ridge-lines which can
            <br/>
            be used precisely to measure the amount of beer to be poured into the cup. On each side of the table,
            <br/>
            teams assemble equilateral triangles with a convergence point focusing on the other team.
            <br/>
            Games typically use ten cups. Each team usually also has a separate cup of water used to rinse off the ball.
            <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            *rules are directly from wikipedia
            <br/>
            Teams
            <br/>
            Beer pong is usually played with two teams of two to four players each.
            <br/>
            Each team begins the game by standing at either end of the table behind their rack of cups.
            <br/>
            Playing field
            <br/>
            Although the game is typically played on either a ping pong table or a folding banquet table, 
            <br/>
            enthusiasts may create a personalized table for use by friends and visitors.
            <br/> 
            In general, this will be a plywood board cut to proper size, sometimes painted with sports, school,
            <br/> 
            or fraternity symbols and given a liquid-proof coating. Some companies sell tables,
            <br/>
            including portable and inflatable tables.However, the game can be played on any flat surface.
            <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Typical drink choice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Alcohol
            <br/>
            An inexpensive pale lager or light beer of 3.2–5% ABV is sometimes preferred because of the large quantities 
            <br/>
            consumed during the course of several games. Sometimes under house rules, 
            <br/>
            there might be cups of other liquors used during the game. For non-drinkers, the game may be played without beer, 
            <br/>
            as is done at Utah State University, where alcohol is not allowed on campus; root beer is used instead.
            <br/>
            For sanitary reasons, the game may also be played with cups of water that players do not drink from, 
            <br/>
            instead drinking from a separate cup of beer or alcohol.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </div>
  )
};

import React from 'react';
import { withStyles } from "@material-ui/core/styles";
// import BGLogo from './Logo'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

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

export default function QuartersAcc() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {/* <BGLogo /> */}
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What you'll need</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Players: 2+ (More the merrier!)"
            <br />
            Quarters.
            <br />
            Tall, large mouthed glass.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Each round starts off with a glass filled with a drink in the middle of the table and two people on opposite ends of the table having a quarter and a glass.
          <br />
          Each player shoots his or her quarter at his/her glass until he makes it in, then the player passes the glass to the player to their left
          <br />
          If the player to their left still has a glass as well, the player taps that glass with theirs, and the player who has been tapped must drink from the glass in the middle of the table, refill it, then make the quarter into his or her glass before they get tapped again, with play still going around the table.
          <br />
          If a player makes his or her first shot, s/he can choose to pass the glass to any player who does not currently have a glass.
          <br />
          If there are enough people at the table, the group can add more shot glasses and position them equally spaced around the outside of the circle.
          <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* Each round starts off with a glass filled with a drink in the middle of the table and two people on opposite ends of the table having a quarter and a glass.
          <br />
          Each player shoots his or her quarter at his/her glass until he makes it in, then the player passes the glass to the player to their left
          <br />
          If the player to their left still has a glass as well, the player taps that glass with theirs, and the player who has been tapped must drink from the glass in the middle of the table, refill it, then make the quarter into his or her glass before they get tapped again, with play still going around the table.
          <br />
          If a player makes his or her first shot, s/he can choose to pass the glass to any player who does not currently have a glass.
          <br />
          If there are enough people at the table, the group can add more shot glasses and position them equally spaced around the outside of the circle.
          <br /> */}

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
};

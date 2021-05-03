//---------------IMPORTS-----------------------//
import React, { useEffect } from "react";
import { withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import WYNBtn from "../Components/WYNBtn";
import GameRulesBtn from "../Components/GameRulesBtn";
import CardRulesBtn from "../Components/CardRulesBtn";
import Paper from "@material-ui/core";
//----------------------------------------------//

// //------------Export Kings Cup Game Rules------------------//
export default function GRKingsCup() {
  const [expanded, setExpanded] = React.useState("panel1");
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
  return (
    <div>
            <Paper variant="outlined">
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
            </Paper>
    </div>
  );
}
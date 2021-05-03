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
export default function CAKingsCup() {
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
              <h2>Card Assignments</h2>
            <Typography>
     
    Players: 4+ (More the merrier!)
    <br />
    Standard deck of cards
    <br />
    Large mug, chalice, pitcher to be used as the KING'S CUP
   
    </Typography>
            </Paper>
    </div>
  );
}
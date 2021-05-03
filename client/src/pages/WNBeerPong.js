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
export default function WNBeerPong() {
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
<h4>Beer Pong Players & Equipment</h4> 
Two teams each consisting of two people
8’ x 2’ beer pong table (or any level playing surface) 
(22) plastic cups (10 per team and 2 water cups)
Ping-pong balls (you need at least 2, but the more the better)
Beer (or another tasty beverage)


      <h4>Beer Pong Tables</h4>
If you’re wanting to play by ‘official’ rules, your beer pong table should by 8’ x 2’. However, any flat surface will do. 

<h4>Beer Pong Cups</h4>
Standard beer pong party cups are 16 oz, but that doesn’t mean you shouldn’t supersize the fun. KegWorks has party cups in 36 oz.
    </Typography>
            </Paper>
    </div>
  );
}
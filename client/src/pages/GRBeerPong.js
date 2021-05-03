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
export default function GRBeerPong() {
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
            At each end of your beer pong table, arrange ten cups in a pyramid-like formation. Fill each cup with your desired amount of beverage.
            If you’re wanting to play by ‘official’ rules, your beer pong table should by 8’ x 2’. However, any flat surface will do. 
            Standard beer pong party cups are 16 oz, but that doesn’t mean you shouldn’t supersize the fun. KegWorks has party cups in 36 oz.
            Start Your Beer Pong Game
One player from each team is selected to take an initial throw to determine which team goes first in the actual game.

While looking each other in the eye, the chosen opposing players count to three and take their throw at the same time. If only one of them makes the shot, their team goes first. If they both make or miss their shot, players go again. (If this is all too complicated for your group, just flip a coin!)

After the first game, the winning team gets the first throw.

<h4>Turns</h4>
Each beer pong team shoots twice per turn; each player taking one shot. If both players make their shot, “throwbacks” are given, and that team receives another turn.

<h4>Shooting</h4>
The ball can be tossed or bounced into the cup. A tossed ball that sinks is worth one cup (the cup it lands in). A bounced shot that sinks is worth two cups (the one in which the shot was made and another from the pyramid)*

*There’s a catch: the defending (non-throwing) team may block a bounced ball once it hits the table, whereas tossed shots are indefensible.

<h4>Sinking Cups</h4>
A beer pong cup is “sunk” as soon as the ball touches the contents of the cup. Any cup that is sunk must be immediately removed from the table and the defending team is responsible for drinking its contents. Team members alternate drinking.

Warning: Watch your cups that have been sunk but are left undrank. If the opposing team sinks a ball in the cup you’re drinking from, it’s game over.

If one cup is sunk, and the next player shoots, hitting the same cup, that also ends the game. Any cups accidentally knocked over are considered sunk.

<h4>Re-Racking & Formations</h4> 
A team is allowed to request a “re-rack” at the end of a turn, in order to maintain a compact shape.

Each team gets two re-racks per game, which can be used at almost any time*. The standard beer pong rule is to take one re-rack with 6 cups remaining, and the other when 2 or 3 cups remain. Note: if you’re playing beer pong with 6 cups each – there is one re-rack allowed per team, per game.

*You can not re-rack if you’re shooting during “throwbacks”

*You can not re-rack during a “redemption round” 

<h4>Beer Pong Formations</h4> 
6 Cup Beer Pong Formations
Marching (2 rows of 3 cups)
Triangle (pyramid of 6 cups)
4 Cup Beer Pong Formations
Diamond 
Square
3 Cup Beer Pong Formations
Triangle (pyramid of 3 cups)
Traffic light (single row of 3 cups)
2 Cup Beer Pong Formations
Double (single row of 2 cups)
    
    </Typography>
            </Paper>
    </div>
  );
}
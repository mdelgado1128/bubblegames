//---------------IMPORTS-----------------------//
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import WYNBtn from "../Components/WYNBtn";
import GameRulesBtn from "../Components/GameRulesBtn";
import CardRulesBtn from "../Components/CardRulesBtn"
import "../styles/GamesButtons.css";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
//------------Export Kings Cup------------------//
export default function KingsCupAcc() {
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
    
    <div className wrapper>
      <Grid container direction='column' spacing={2} alignItems='center'>
      <Grid item xs={12}>
    <div className='BtnAnimation'>
    
   <WYNBtn/>
 
   </div>
   </Grid>
      <Grid item ={6}>
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
   </Grid>
   <Grid item xs={12}>
   <div className='BtnAnimation'>

   <GameRulesBtn/>

   </div>
   </Grid>
   <Grid item xs={6}>
   <div>
            <Paper variant="outlined">
            <Typography>
      One person pulls a card at a time and all players respond
      appropriately according to what action the card requires.
      <br />
      Some cards are time sensitive reaction games while others game may
      require a small setup time.
      <br />
      See card assignments below.
    </Typography>
            </Paper>
    </div>
   </Grid>
   <Grid item xs={12}>
   <div className='BtnAnimation'>

   <CardRulesBtn/>

    </div>
    </Grid>
   <Grid item xs={6}>
    <div>
            <Paper variant="outlined">
              <h2>Card Assignments</h2>
            <Typography>
      <Typography>
      Ace - Waterfall. (Each player starts drinking at the same time as
      the person to their left. NO player can stop drinking until the
      person before them stops.)
      <br />
      Two - You. (Whoever draws this can choose anyone to take a drink.)
      <br />
      Three - Me. (The person who draws this takes a drink.)
      <br />
      Four - Floor. (The last person to touch the floor takes a drink.)
      <br />
      Five - Guys. (All the guys at the table drink.)
      <br />
      Six - Chicks. (All the girls at the table drink.)
      <br />
      Seven - Heaven. (If you draw this card, raise your hand above you
      head. Every other player must do so as well. The last person takes a
      drink.)
      <br />
      Eight - Mate. (Choose someone to be your mate. For the rest of the
      game, they drink when you drink.)
      <br />
      Nine - Rhyme. (You say a word, then the person to your right has to
      say a word that rhymes. This continues until someone can't think of
      a word. That person takes a drink. You can't reuse words.)
      <br />
      Ten - Categories. (Come up with a category of things. The person to
      your right must name something that falls within the category. This
      continues until someone can't think of something. That person takes
      a drink.)
      <br />
      Jack - Never Have I Ever. (Everyone plays Never Have I Ever.)
      <br />
      Queen - Questions. (Ask someone a question. That person then asks
      someone else a question. This continues until someone messes up or
      fails to ask a question. That person drinks. No question can be
      repeated.)
      <br />
      King - King's Cup. (Set a rule to be followed, e.g. stand on one
      foot when you drink, only speak in an accent, etc.)
      <br />
      When each of the first 3 Kings is drawn, the person who drew it puts
      some of their drink into the King's Cup in the center of the table.
      When the 4th King is drawn, the person who drew it must drink the
      entire King's Cup.)
    </Typography>
    </Typography>
            </Paper>
    </div>
    </Grid>
    </Grid>
    </div>
  );
}

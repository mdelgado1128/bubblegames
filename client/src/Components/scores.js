import React, { useState }from "react";
import API from "../utils/API";


export default function Scores (props) {
const [score, setScore] = useState("");
const [name, setName] = useState("");

function handleScore(event) {
event.preventDefault();
API.setScores({
  name,
  score
}).then((res) => {
  console.log(res,"you score is", score)

}).catch((err) =>{
  console.log(err)
})


}
  return (
    <div>
      

      <div> 

        <input 
        placeholder="Name"
        id="name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        
        >
        </input>

        <input 
       placeholder="Score"
        id="score"
      value={score}
        name="score"
        onChange={(e) => setScore(e.target.value)}
      
        >
        </input>

        <button onClick={handleScore}
        type="submit"

        >
          submit
        </button>


       
      </div>
    </div>
  )
}
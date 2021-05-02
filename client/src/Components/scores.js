import React, { useState, useEffect }from "react";
import API from "../utils/API";


export default function Scores (props) {
const [score, setScore] = useState("");
const [name, setName] = useState("");
const [listScores, setListScores] =useState([]);
// const [listName, setListName] =useState();


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

useEffect (() => {
  API.getScores().then(res => {
    console.log(res.data)
    setListScores(res.data)
  }).catch(err => console.log(err))

},[])



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

      {listScores.map((s) => (
        <div>
        <h3>{s.name} </h3>
        <h3>{s.score}</h3>
        </div>
      )) }



       
      </div>
    </div>
  )
}
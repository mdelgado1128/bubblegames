const router = require("express").Router();
const Scores = require("../../models/scores");

router.post("/showScores", (req,res) => {
  const { name, score } = req.body
 Scores.create({
    name: name,
   score: score
  })
  res.json( {name, score:score.toString()})

});

module.exports = router;
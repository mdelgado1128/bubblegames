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

router.get("/allScores", (req, res) => {
  Scores.find({})
  .sort({ date: -1 })
  .then (dbModel => res.json(dbModel))
  .catch((err) => {
    console.log(err)
    res.status(400).json(err);
    
  })
})


module.exports = router;
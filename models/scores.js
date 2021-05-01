const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const scoresSchema = new Schema ({
name: {type: String, trim: true, },
score:{type: Number,}
});

const Scores = mongoose.model("Scores", scoresSchema);

module.exports = Scores;
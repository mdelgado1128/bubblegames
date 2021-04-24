// const mongoose = require("mongoose");
// const multer = require ("multer");

// const Schema = mongoose.Schema;

// const storage = multer.diskStorage ({
//   destination : ( req, file, cb) => {
//     cb(null, "../client/public/uploads")
//   },
//   filename: (req, res ,cb) => {
//     cb(null, file.originalname);
//   }
// })

// const upload = multer ({storage: storage});

// const gameSchema = new Schema ({
// title: {type: String, trim: true, },
// materials:{type: String,},
// description: {type: String,},
// gameImage: {type: String, rerquired: true}
// });

// const Game = mongoose.model("Game", gameSchema);

// module.exports = Game;
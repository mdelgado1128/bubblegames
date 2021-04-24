// const router = require("express").Router();
// const Game = require("../../models/game");

// router.post("/upload",  upload.single("gameImage"),(req,res) => {
//   const { title, materials, description } = req.body
//   const { gameImage } = req.file.originalname
//   Game.create({
//     title: title,
//     materials: materials,
//     description:description,
//     gameImage: gameImage
//   }).then (game => res.json(game)).catch(err => res.status(422).end());
// });

// module.exports = router;
const router =require("express").Router();
const authRoutes= require("./authRoutes");
const gameRoutes = require("./gameRoutes")

router.use("/auth", authRoutes)
// router.use("/game", gameRoutes)




module.exports= router;
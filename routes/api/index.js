const router =require("express").Router();
const authRoutes= require("./authRoutes");
const scoreRoutes= require("./scoreRoutes");


router.use("/auth", authRoutes)
router.use("/scores", scoreRoutes)




module.exports= router;
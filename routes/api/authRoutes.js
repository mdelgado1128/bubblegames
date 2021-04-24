const router =require("express").Router();
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const User = require("../../models/user");


router.post("/signup", async (req, res)=> {
  try {
    const {email, password} = req.body// name email and password depends on front end 
    const hashed = await bcrypt.hash(password, 10)
    const user = User.create({
      email: email,
      password: hashed

    })
    // const user = new User({
    //   email: email,
    //   name: name,
    //   password: hashed

    // })
    // const result = user.save()
    res.json({userId: user._id.toString()})
    // save user with hash password . and then res json the users id from creating the user
  } catch (err) {
    res.json(err)
  }
})

const verifyJwt = (req,res,next) => {
  const token = req.body.token
  console.log(token)
  // const decoded = jwt.verify(token, "Secret")
  if (!token) {
    res.send("You need a token.")
  } else {
    jwt.verify(token, "Secret", (err, decoded) => {
      if (err) {
        res.json({auth: false, message: "failed to authenticate"});
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

router.post("/isAuth", verifyJwt, (req, res) => {
  res.send("you are authenticated !")
})

router.post("/login", async (req, res)=> {
  try {
    const {email, password } = req.body// name email and password depends on front end
    const user = await User.findOne ({
      email: email
    }) 
    if (!user) {
      return res.status(401).send("unauthorized")
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
       res.status(401).send({auth: false})
       console.log(res)
    } else {
      
    }
//  is this passing a heard ? 
    const token = jwt.sign(
      {email: user.email, userId: user._id.toString()},
      "Secret", 
      {expiresIn:"1h"}
    )
    res.cookie('access_token', token, {
      maxAge: 3600,
      httpOnly: true 
    })
  
    console.log(token)
    res.json({token, email: email, auth: true,  })
    // save user with hash password . and then res json the users id from creating the user
  
  } catch (err) {
    console.log(err)
    res.json(err)
  }
})




module.exports= router;
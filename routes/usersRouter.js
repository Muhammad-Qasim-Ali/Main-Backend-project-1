const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/authController')


// /users <-- name of this route
router.get("/", function(req,res){
    res.send("hey userRouter is working")
})

// es ka route banyga /users/register
router.post("/register", registerUser)

// /users/login
router.post("/login", loginUser)

module.exports = router
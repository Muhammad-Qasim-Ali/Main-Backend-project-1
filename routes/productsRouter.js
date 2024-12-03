const express = require('express')
const router = express.Router()

router.get("/", function(req,res){
    res.send("hey productRouter is working")
})

module.exports = router
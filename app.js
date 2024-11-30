const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const path = require('path')
const exp = require('constants')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("Working!!")
})

app.listen(3000)
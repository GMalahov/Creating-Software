"use strict"
const express = require("express")
const app = express()
app.use(express.static("./static"))
app.use(express.json())
app.get("/", (_req, res) => {
    res.send("index.html")
})
app.listen(8080,"127.0.0.1",() => {
    console.log("server started at http://127.0.0.1:8080")
})
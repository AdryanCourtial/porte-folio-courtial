const express = require("express")
const router = express.Router()

router.get( "/", (req, res) => {
    res.send("JE SUIS LA PAGE HOME")
})

module.exports = router ;
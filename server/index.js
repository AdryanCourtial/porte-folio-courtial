const express = require("express");
const app = express();

const homeRouter = require("./routes/home")
app.use("/home", homeRouter)

app.listen(8080, () => {
    console.log("Hey je Fonctionne Sur le Port 8080")
})

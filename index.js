const express = require('express');

const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use("/api", routes)

app.get("/boo", () => {
    console.log("Called")
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listining To Port ${port}...`) )
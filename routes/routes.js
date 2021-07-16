const express = require("express");
const { Pool } = require("pg")

const toDoRouter = express.Router();

// its pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Progressive0314",
    port: 5432,
    max: 20,
  })
// toDoRouter.use(function(req, res, next) {

//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     next
// })

toDoRouter.get("/", (req, res) => {
    res.send("Hello Home")
})

toDoRouter.get("/gettask", async (req, res) => {
    const result = await pool.query("SELECT * FROM ToDo")
    console.table(result.rows);
    res.send(result.rows)
})

toDoRouter.post("/addtask", async (req, res) => {

    const name = req.body.taskname;
    const desc = req.body.taskdesc;
    const iscompleted = req.body.iscompleted;

    console.log(`name is ${name} desc is ${desc} isComp is ${iscompleted}`)

    const result = await pool.query(`INSERT INTO ToDo VALUES('${name}', '${desc}', ${iscompleted})`)

    console.table(result.rows)
    res.send(result.rows)
})

toDoRouter.post("*", async (req, res) => {

    console.log("starek route")
})

module.exports = toDoRouter
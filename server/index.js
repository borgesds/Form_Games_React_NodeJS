const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const res = require('express/lib/response')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "lostawer7",
    database: "crudgames",
})


app.use(cors())
// transformar o que vem do front em JSON
app.use(express.json())


// busca os inputs la em handleClickButton no front-end
// mandar para o mysql
app.post("/register", (req, res) => {
    const { name } = req.body
    const { cost } = req.body
    const { category } = req.body

    let SQL = "INSERT INTO games (name, cost, category) VALUES ( ?, ?, ?)"

    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err)
    })
})

// buscar no BD
app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM games"

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// editar
app.put("/edit", (req, res) => {
    const { id } = req.body
    const { name } = req.body
    const { cost } = req.body
    const { category } = req.body

    let SQL = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?"

    db.query(SQL, [name, cost, category, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

// deletar
app.delete("/delete/:id", (req, res) => {
    const {id} = req.params

    let SQL = "DELETE FROM games WHERE id = ?"

    db.query(SQL, [id], (err, result) => {
        if (err) console.error(err)
        else res.send(result)
    })
})



app.listen(3000, () => {
    console.log('Servidor Rodando!!! http://localhost:3000')
})
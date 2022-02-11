const express = require('express')
const db = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3001

const userRouter = require('./app/routes/user')


app.use(
    bodyParser.json({ limit: '20mb'})
    )

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(userRouter)

app.listen( port, () =>{
    console.log('la aplicacion esta en linea')
})

db()
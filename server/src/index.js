const express = require('express')
const app = express()
const cors = require('cors')


// Midle ware
app.use(cors());
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({ extended: true, limit:'100mb'}))


// Router
const Router = require('./router/index')
Router(app)

// Cnnect database
const db = require('./config/db/connect')
db.connect()


// App running
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listening on ${PORT}`))
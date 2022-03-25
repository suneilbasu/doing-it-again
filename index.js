const express = require('express')
require('./db/mongoose')

const testRouter = require('./routers/test')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(testRouter)

app.listen(port, () => {
    console.log("Suneil's server is up on port " + port)
})
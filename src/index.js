const express = require('express')
const dotenv = require('dotenv');
const app = express()

const pokemonRouter = require('./routes/pokemon')
const userRouter = require('./routes/user')

dotenv.config();

app.use('/pokemon', pokemonRouter)
app.use('/user', userRouter)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

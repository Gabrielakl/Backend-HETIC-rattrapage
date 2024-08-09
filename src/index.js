import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import { pokemonRouter } from './routes/pokemon.js'
import { userRouter } from './routes/user.js'

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());

app.use('/pokemon', pokemonRouter)
app.use('/user', userRouter)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

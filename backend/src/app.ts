// You can middleware and routes here

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"

import routes from "./routes"

const app = express();

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', routes)

export default app 
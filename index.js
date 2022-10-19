import express from 'express';
import authRouter from './router/router.js';
import mongoose from 'mongoose';
import {DB_ACCESS} from './config/config.js'

mongoose.connect(DB_ACCESS,
)
const app = express()
const port = 3000

app.use(express.json());
app.use("/api/", authRouter);

mongoose.connect();
app.listen(port, () => console.log(`server started  ${port}!`))

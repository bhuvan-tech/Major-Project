import express from 'express';
import authRouter from './router.js';
const app = express()
const port = 3000

app.use(express.json());
app.use("/api/", authRouter);
app.listen(port, () => console.log(`server started  ${port}!`))
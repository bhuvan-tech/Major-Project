import express from 'express';
import authRouter from './router/router.js';
import mongoose from 'mongoose';
import {DB_ACCESS} from './config/config.js';
import cors from 'cors';
mongoose.connect(
    DB_ACCESS, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('mongodb connection established');
}).catch(err => {console.log(err)});



const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/", authRouter);

app.listen(port, () => console.log(`server started  ${port}!`))

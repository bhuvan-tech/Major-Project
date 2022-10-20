import express from 'express';
import authRouter from './router/router.js';
import mongoose from 'mongoose';
import {DB_ACCESS} from './config/config.js';
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

app.use(express.json());
app.use("/api/", authRouter);

async function started() {
    const client = new MongoClient()
}
app.listen(port, () => console.log(`server started  ${port}!`))

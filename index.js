import express from 'express';
import router from './router/router.js';
import comm from './router/comm.js';
import mongoose from 'mongoose';
import {DB_ACCESS} from './config/config.js';
import cors from 'cors';
import morgan from 'morgan'

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

if(process.env.NODE_ENV ===  'development')
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/", router,comm);

app.listen(port, () => console.log(`server started  ${port}!`))

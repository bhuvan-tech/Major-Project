import express from 'express';
const authRouter = express.Router();
import UserDetails from '../model/schema.js'
import {addUser} from '../controller/auth.js'
authRouter.get('/', async (req, res) => {
    try{
    const newUser = await UserDetails.find() 
    res.send(newUser)
    }
    catch(err){
        console.log(err);
    }
})

authRouter.post('/adduser', addUser)
export default  authRouter;

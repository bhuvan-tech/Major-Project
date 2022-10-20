import { response } from 'express';
import UserDetails from '../model/schema.js'
import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';
const addUser = async (req,res) => {
    let {name,number,password} = req.body;
    try{
        
        UserDetails.find({number:number},()=>{
            return errorResponse(res,409,"User already exists")
        })
        const user = new UserDetails()
        user.username = name;
        user.number= number;
        user.password = password;
        await user.save()
        return successResponse(res,201,"user added successfully")
    }
    catch(err){ 
        errorResponse(res,500,err);
    }
}

export {addUser} ;
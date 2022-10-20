import { response } from 'express';
import userDetails from '../model/schema.js'
import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';

const addUser = async (req,res) => {
    try{ 
        const userExists = await userDetails.find({ number: req.body.number });

        if(userExists.length > 0){
            return errorResponse(res,404,"User already exists");
        }
            
        const user  = await userDetails.create(req.body)
        return successResponse(res,201,"user added successfully")
                
    } catch(err){ 
        errorResponse(res,500,err);
    }
}

export {addUser};
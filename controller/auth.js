import { response } from 'express';
import userDetails from '../model/schema.js'
import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';

const addUser = async (req,res) => {
    let {name,number,password} = req.body;

    try{ 
        userDetails.find({number:number}, async (err,data)=>{
            var keycount  = Object.keys(data).length;

            if(keycount > 0){
                return errorResponse(res,406,"User already exists")
            }
            else{
                // variable names for front end are - name, password, number
                const user = new userDetails()
                user.username = name;
                user.number= number;
                user.password = password;
                user.save()
                return successResponse(res,201,"user added successfully")
            }
    })

    } catch(err){ 
        errorResponse(res,500,err);
    }
}

export {addUser};      
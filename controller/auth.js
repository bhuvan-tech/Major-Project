import {SALT} from '../config/config.js'
import userDetails from '../model/schema.js'
import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';
import bcrypt from 'bcrypt'

const addUser = async (req,res) => {
    // variable names for front end are - name, password, number
    let {name,number,password} = req.body;

    try{ 
        //checking whether the user is already exists
        userDetails.find({number:number}, async (err,data)=>{
            var keycount  = Object.keys(data).length;
            //if the user is already return the response
            if(keycount > 0){
                return errorResponse(res,406,"User already exists")
            }
            else{
                //hashing our password
                const salt = await bcrypt.genSalt(SALT);
                const bcryptPassword = await bcrypt.hash(password,salt);
                //creating schema Object 
                const user = new userDetails()
                //adding new object into DB
                user.username = name;
                user.number= number;
                user.password = bcryptPassword;
                user.save()
                return successResponse(res,201,"user added successfully")
            }
    })

    } catch(err){ 
        errorResponse(res,500,err);
    }
}

export {addUser};      
import PasswordValidator from 'password-validator'
import { errorResponse } from '../interceptor/error.js';
var schema = new PasswordValidator;

schema
.is().min(8)                        // Minimum length 8
.is().max(20)                      // Maximum length 20
.has().uppercase(1)               // Must have uppercase letters
.has().lowercase(1)              // Must have lowercase letters



const validatePassword = function(req,res,next){
    try{
    const {password} = req.body;
    if(schema.validate(password)){
        next();
    }
    else{
        return errorResponse(res,400,"password does must meet the requirements")
        }
    }
    catch(err){
     return errorResponse(res,500,"error in validing the password")
    }
}

export {validatePassword};

import { errorResponse } from "../interceptor/error.js";
const valid = (req,res,next) => {
    const {number} = req.body;
    console.log( typeof(number))
    if(req.path === "/adduser" || req.path === "/login"){
        console.log(number.length);
        if(number.length !== 10){
            return errorResponse(res,400,"invalid number");
        }
    }
    next();
}
const password = (req,res,next) => {
    
}
export default valid;
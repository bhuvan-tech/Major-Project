import { errorResponse } from "../interceptor/error.js";
const valid = (req,res,next) => {
    const {number} = req.body;
    if(req.path === "/adduser" || req.path === "/login"){
        if(number.length !== 10){
            return errorResponse(res,400,"invalid number");
        }
    }
    next();
}
const password = (req,res,next) => {
    
}
export default valid;
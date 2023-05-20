import {SALT} from '../config/config.js'
import userDetails from '../model/schema.js'
import { successResponse } from '../interceptor/success.js';
import { errorResponse } from '../interceptor/error.js';
import jwtGenerator from '../utils/tokengenertor.js';
import bcrypt from 'bcrypt'

// ADD NEW USER
const addUser = async (req,res) => {
    // variable names for front end are - name, password, number
    let {name,phone,password} = req.body;
    try{ 
        //checking whether the user is already exists
        const keyCount = await userDetails.find({number:phone});
            //if the user is already return the response
            if(keyCount.length > 0){
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
                user.number= phone;
                user.password = bcryptPassword;
                
                user.save()
                return successResponse(res,201,`User added Successfully`);
            }

    } catch(err){ 
        return errorResponse(res,500,err);
    }
}     


const login = async(req, res) => {
    try{
    let {phone,password} = req.body;
    const user = await userDetails.find({number:phone});
    if(user.length === 0){
        return errorResponse(res,406,"User Not Found");
    }
    const validPassword = await bcrypt.compare(
        password,
        user[0].password
    )
    if(!validPassword){
        return errorResponse(res,400,"invalid password")
    }
    const token = jwtGenerator(user[0]._id,user[0].username,user[0].number);
    res.cookie(token)
    return successResponse(res,200,"user login successful")
}
catch(err){
    return errorResponse(res,500,err);
}

}
// GET ALL USERS
const getUsers = async(req, res) => {
    try{
        const users = await userDetails.find();
        return successResponse(res, 200, users);
    }
    catch(err){
            errorResponse(res, 404, err);
    }
}

// GET USER BY ID
const getUserById = async(req, res) => {
    try{
        const user = await userDetails.findById(req.params.id) 
            return successResponse(res, 200, user);
        }
        catch(err){
            errorResponse(res, 404, err);
        }
}

// UPDATE USER BY ID
const updateUser = async(req, res) => {
    try{
        const updateUser = await userDetails.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }) 
        return successResponse(res, 201, `Updated ${updateUser.username} details`);
    } catch(err){
            errorResponse(res, 404, err);
    }
}

// DELETE USER BY ID
const deleteUser = async(req, res) => {
    try{
        const user = await userDetails.findByIdAndDelete(req.params.id); 
            return successResponse(res, 200, `Deleted user ${user.username}`);
        }
        catch(err){
            errorResponse(res, 404, err);
        }
}

export {getUsers, addUser, getUserById, updateUser, deleteUser,login};
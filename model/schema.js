import mongoose from 'mongoose';
//Schema used for sign in and sign up
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'User Name is required']
    },
    number:{
        type: Number,
        required: [true, 'Number is required']
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    date:{
        type: Date,
        default: Date.now
    }

})

const userDetails =  mongoose.model('userDetails', userSchema)
export default userDetails;
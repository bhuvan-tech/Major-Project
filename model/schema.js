import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: [true, 'User Name is required']
    },
    number:{
        type: 'number',
        required: [true, 'Number is required']
    },
    password:{
        type: 'string',
        required: [true, 'Password is required']
    },
    date:{
        type: 'date',
        default: Date.now
    }

})

const UserDetails =  mongoose.model('UserDetails', UserSchema)
export default UserDetails;
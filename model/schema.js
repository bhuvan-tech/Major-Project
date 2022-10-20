import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
    },
    number:{
        type: 'number',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    date:{
        type: 'date',
        default: Date.now
    }

})

const UserDetails =  mongoose.model('UserDetails', UserSchema)
export default UserDetails;
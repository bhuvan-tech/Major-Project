import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    fullname:{
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
        default: date.now
    }

})

module.exports = mongoose.model('UserDetails', schema)
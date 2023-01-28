import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'The "name" field is required.']
    },
    email:{
        type: String,
        required: [true, 'The "e-mail" field is required.']
    },
    pass:{
        type: String,
        required: [true, 'The "name" field is required.']
    },
})
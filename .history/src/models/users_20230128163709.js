import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'The "name" field']
    }
})
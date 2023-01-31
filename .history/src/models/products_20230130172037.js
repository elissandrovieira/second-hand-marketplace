import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema

const schema = new mongoose.Schema({
   title:{
    type: String,
    required: [true, 'The "Title" field is required.']
   },
   category:{
    type: String,
    required: [true, 'The "Category" field is required.']
   },
   description:{
    type: String,
    required: [true, 'The "description" field is required.']
   },
   price:{
    type: Number,
    required: [true, 'The "Price" field is required.']
   },
})

export default mongoose.models.users || mongoose.model('products', schema)
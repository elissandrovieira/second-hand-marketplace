import mongoose from 'mongoose'

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
    required: [true, 'The "Title" field is required.']
   },
   title:{
    type: String,
    required: [true, 'The "Title" field is required.']
   },
})

export default mongoose.models.users || mongoose.model('products', schema)
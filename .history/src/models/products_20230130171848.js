import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   title:{
    type: String,
    required: [true, ''The "name" field is required.'']
   }
})

export default mongoose.models.users || mongoose.model('products', schema)
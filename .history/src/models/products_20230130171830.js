import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   title:{
    type: String,
    required
   }
})

export default mongoose.models.users || mongoose.model('products', schema)
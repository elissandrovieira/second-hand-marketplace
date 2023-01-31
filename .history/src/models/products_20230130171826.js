import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   title:{
    type: String
   }
})

export default mongoose.models.users || mongoose.model('products', schema)
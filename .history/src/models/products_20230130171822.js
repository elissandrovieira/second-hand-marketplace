import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   title:{
    type: S
   }
})

export default mongoose.models.users || mongoose.model('products', schema)
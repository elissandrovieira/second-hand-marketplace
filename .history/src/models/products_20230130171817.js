import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   title:{
    
   }
})

export default mongoose.models.users || mongoose.model('products', schema)
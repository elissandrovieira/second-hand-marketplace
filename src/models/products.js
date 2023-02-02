import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
  name: String,
  path: String,
})

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The "Title" field is required.']
  },
  category: {
    type: String,
    required: [true, 'The "Category" field is required.']
  },
  description: {
    type: String,
    required: [true, 'The "description" field is required.']
  },
  price: {
    type: Number,
    required: [true, 'The "Price" field is required.']
  },
  district: {
    type: String,
    required: [true, 'The "district" field is required.']
  },
  city: {
    type: String,
    required: [true, 'The "city" field is required.']
  },
  year: {
    type: Number,
    required: [true, 'The "year" field is required.']
  },
  month: {
    type: Number,
    required: [true, 'The "month" field is required.']
  },
  day: {
    type: Number,
    required: [true, 'The "day" field is required.']
  },
  hour: {
    type: Number,
    required: [true, 'The "hour" field is required.']
  },
  minute: {
    type: Number,
    required: [true, 'The "minute" field is required.']
  },
  user: {
    name: String,
    email: String,
    phone: String,
    id: String,
    image: String,
  },
  files: {
    type: [filesSchema],
    default: undefined,
  }
})

export default mongoose.models.products || mongoose.model('products', schema)
import formidable from 'formidable-serverless'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

export const post = async (req, res) => {
  await dbConnect()

  const form = new formidable.IncomingForm({
    multiples: true,
    
  })

  form.parse(req, (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }

    console.log(fields, data)

    res.status(200).json({ success: true })
  })
}
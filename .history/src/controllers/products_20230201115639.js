import path from 'path'
import fs from 'fs'
import formidable from 'formidable-serverless'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

export const post = async (req, res) => {
  await dbConnect()

  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if (error) {
      return res.status(500).json({ success: false })
    }

    const { files } = data
    
    const 
    const filesToRename = files instanceof Array
      ? files
      : [files]

    const filesToSave = []

    filesToRename.forEach(file => {
      const timestamp = Date.now()
      const random = Math.floor(Math.random() * 99999999) + 1
      const extension = path.extname(file.name)

      const filename = `${timestamp}_${random}${extension}`

      const oldpath = path.join(__dirname, `../../../../${file.path}`)
      const newpath = path.join(__dirname, `../../../../${form.uploadDir}/${filename}`)

      filesToSave.push({
        name: filename,
        path: newpath,
      })

      fs.rename(oldpath, newpath, (error) => {
        if (error) {
          console.log(error)
          return res.status(500).json({ success: false })
        }
      })
    })

    const {
      title,
      category,
      description,
      price,
      district,
      city,
      name,
      email,
      phone,
      userId,
      image,
    } = fields
 
    const product = new ProductsModel({
      title,
      category,
      description,
      price,
      district,
      city,
      user:{
        name,
        email,
        phone,
        id: userId,
        image,
      },
      files: filesToSave,
    })

    const register = await product.save()

    console.log (fields)
    
    if(register) {
      res.status(201).json({ success: true })
    } else {
      res.status(500).json({ success: false })
    }
  })
}
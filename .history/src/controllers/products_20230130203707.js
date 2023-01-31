import formidable from 'formidable-serverless'
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

export const post = async (req, res) => {
    await dbConnect()

    const form = new formidable.IncomingForm()

    form.parse(req, (error, fields, data) => {
        if(error) 

        res.status(200)
    })
}
import * as yup from 'yup'

export const initialValues = {
    title: '',
    category: '',
    images: '',
    description: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    files: [],
  }

export const validationSchema = yup.object({
    title: yup.string()
    .required('Title is required')
    .min(6, 'Title should be of minimum 10 characters length')
    .max(70),
  
    category: yup.string()
    .required('Category is required'),
    
    description: yup.string()
    .required('Description is required')
    .min(50, 'Description should be of minimum 50 characters length'),
    
    price: yup.number()
    .required('Price is required'),
    
    name: yup.string()
    .required('Your name is required'),
    
    email: yup.string().email('Enter a valid E-mail')
    .required('E-mail is required'),
    
    phone: yup.number().typeError('Must be a number')
    .required('Phone number is required'),

    files: yup.array()
    .required('Upload image is required')
    .min(1, 'Upload at least one image')
})
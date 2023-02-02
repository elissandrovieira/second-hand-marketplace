import * as yup from 'yup'

export const initialValues = {
    email:'',
    password:'',
    userId:'',
    image:'',
  
  }
  
 const validationSchema = yup.object({
email: yup.string()
.required('This field is required')
.email('Enter a valid E-mail'),

password: yup.string()
.required('This field is required')
.min(8, 'Password must be 8 characters.'),

})

export default validationSchema
import * as yup from 'yup'

export const initialValues = {
    email:'',
    password:'',
  
  }
  
export const validationSchema = yup.object({
email: yup.string()
.required('This field is required')
.email('Enter a valid E-mail'),

password: yup.string()
.required('This field is required')
.min(8, 'Password must be 8 characters.'),

confirmPass: yup.string()
.required('This field is required')
.oneOf([yup.ref('password'), null], 'Passwords must match')

})
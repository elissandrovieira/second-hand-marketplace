import * as yup from 'yup'

export const initialValues = {
    name:'',
    email:'',
    password:'',
    confirmPass:'',
  
  }
  
const validationSchema = yup.object({
name: yup.string()
.required('This field is required'),

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

export default validationSchema
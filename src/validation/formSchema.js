// (8) Set Up Validation Schema:
import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Must include name')
    .min(3, 'Name needs to be at least 3 characters long'),
  email: yup
    .string()
    .required('Must include email address')
    .email('Email must be a valid address'),
  password: yup
    .string()
    .min(10, 'Password must be at least 10 characters long'),
  terms: yup
    .boolean()
    .oneOf([true], 'Must agree to Terms of Service')
})
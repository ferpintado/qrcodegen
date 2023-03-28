import * as Yup from 'yup';

export const vCardFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter a first name'),
  lastName: Yup.string().required('Please enter a last name'),
  homePhone: Yup.array().of(
    Yup.string().required('Please enter a phone number')
  ),
  workPhone: Yup.array().of(
    Yup.string().required('Please enter a phone number')
  ),
  email: Yup.array().of(Yup.string().email('Please enter a valid email')),
});

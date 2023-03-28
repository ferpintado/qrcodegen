import * as Yup from 'yup';

const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export const vCardFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter a first name'),
  lastName: Yup.string().required('Please enter a last name'),
  homePhone: Yup.array().of(
    Yup.string()
      .matches(phoneRegExp, 'Phone number should be in (xxx) xxx-xxxx format')
      .required('Please enter a phone number')
  ),
  workPhone: Yup.array().of(
    Yup.string()
      .matches(phoneRegExp, 'Phone number should be in (xxx) xxx-xxxx format')
      .required('Please enter a phone number')
  ),
  email: Yup.array().of(Yup.string().email('Please enter a valid email')),
});

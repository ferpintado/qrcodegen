import * as Yup from 'yup';

export const urlFormValidationSchema = Yup.object().shape({
  url: Yup.string()
    .url('Please enter a valid URL including http:// or https://')
    .required('Please enter a URL'),
});

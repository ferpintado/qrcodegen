import * as Yup from 'yup';

export const wifiFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a network name'),
  password: Yup.string().required('Please enter a password'),
  encryption: Yup.string().required('Please select an encryption type'),
});

import { useFormik } from 'formik';
import * as FormStyles from '../FormsWrapper.styles';

import { WifiFormProps, WifiFormValues } from './WifiForm.types';
import { wifiFormValidationSchema } from './WifiForm.validation';
import Input from '../../../../../shared/components/Input';
import Select from '../../../../../shared/components/Select/Select';

function WifiForm({ onSubmit }: WifiFormProps): JSX.Element {
  const initialValues: WifiFormValues = {
    name: '',
    password: '',
    encryption: 'WPA',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: wifiFormValidationSchema,
    onSubmit,
  });

  return (
    <>
      <Input label="Network name" field="name" formik={formik} />
      <Input label="Password" field="password" formik={formik} />
      <Select
        label="Security type"
        field="encryption"
        formik={formik}
        options={['WPA', 'WPE']}
      />
      <FormStyles.GenerateButton onClick={formik.submitForm}>
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default WifiForm;

import { useFormik } from 'formik';
import { useQrGeneratorContext } from '../../../QrGenerator.context';
import * as FormStyles from '../FormsWrapper.styles';

import { WifiFormProps } from './WifiForm.types';
import { valuesToUrlArgs } from '../../../services/valuesToUrlArgs';
import { wifiFormValidationSchema } from './WifiForm.validation';

function WifiForm(): JSX.Element {
  const { qrType, setQrArgs } = useQrGeneratorContext();

  const initialValues: WifiFormProps = {
    name: '',
    password: '',
    encryption: 'WPA',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: wifiFormValidationSchema,
    onSubmit: (values) => {
      const args = valuesToUrlArgs(qrType, values);
      setQrArgs(args);
    },
  });

  return (
    <>
      <FormStyles.InputWrapper>
        <label htmlFor="name">Network name:</label>
        <input type="text" id="name" {...formik.getFieldProps('name')} />
        <FormStyles.Error>
          {formik.touched.name && formik.errors.name}
        </FormStyles.Error>
      </FormStyles.InputWrapper>
      <FormStyles.InputWrapper>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          {...formik.getFieldProps('password')}
        />
        <FormStyles.Error>
          {formik.touched.password && formik.errors.password}
        </FormStyles.Error>
      </FormStyles.InputWrapper>

      <FormStyles.InputWrapper>
        <label htmlFor="password">Security type:</label>
        <select id="encryption" {...formik.getFieldProps('encryption')}>
          <option value="WPA">WPA</option>
          <option value="WEP">WEP</option>
        </select>
        <FormStyles.Error>
          {formik.touched.encryption && formik.errors.encryption}
        </FormStyles.Error>
      </FormStyles.InputWrapper>
      <FormStyles.GenerateButton
        onClick={formik.submitForm}
        disabled={!formik.isValid || !formik.dirty}
      >
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default WifiForm;

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
        <input
          type="text"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormStyles.Error>
          {formik.values.name && formik.errors.name}
        </FormStyles.Error>
      </FormStyles.InputWrapper>
      <FormStyles.InputWrapper>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <FormStyles.Error>
          {formik.values.password && formik.errors.password}
        </FormStyles.Error>
      </FormStyles.InputWrapper>

      <FormStyles.InputWrapper>
        <label htmlFor="password">Security type:</label>
        <select
          name="encryption"
          id="encryption"
          onChange={formik.handleChange}
          value={formik.values.encryption}
        >
          <option value="WPA">WPA</option>
          <option value="WEP">WEP</option>
        </select>
        <FormStyles.Error>
          {formik.values.encryption && formik.errors.encryption}
        </FormStyles.Error>
      </FormStyles.InputWrapper>
      <FormStyles.GenerateButton
        onClick={formik.submitForm}
        disabled={!formik.isValid}
      >
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default WifiForm;

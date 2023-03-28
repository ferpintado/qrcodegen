import { useFormik } from 'formik';
import * as FormStyles from '../FormsWrapper.styles';
import { UrlFormProps } from './UrlForm.types';
import { urlFormValidationSchema } from './UrlForm.validation';
import { useQrGeneratorContext } from '../../../QrGenerator.context';
import { valuesToUrlArgs } from '../../../services/valuesToUrlArgs';

function UrlForm(): JSX.Element {
  const { qrType, setQrArgs } = useQrGeneratorContext();

  const initialValues: UrlFormProps = {
    url: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: urlFormValidationSchema,
    onSubmit: (values) => {
      const args = valuesToUrlArgs(qrType, values);
      setQrArgs(args);
    },
  });

  return (
    <>
      <FormStyles.InputWrapper>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" {...formik.getFieldProps('url')} />
        <FormStyles.Error>
          {formik.touched.url && formik.errors.url}
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

export default UrlForm;

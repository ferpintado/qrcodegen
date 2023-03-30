import { useFormik } from 'formik';
import * as FormStyles from '../FormsWrapper.styles';
import { UrlFormProps, UrlFormValues } from './UrlForm.types';
import { urlFormValidationSchema } from './UrlForm.validation';
import Input from '../../../../../shared/components/Input/Input';

function UrlForm({ onSubmit }: UrlFormProps): JSX.Element {
  const initialValues: UrlFormValues = {
    url: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: urlFormValidationSchema,
    onSubmit,
  });

  return (
    <>
      <Input label="URL" field="url" formik={formik} />
      <FormStyles.GenerateButton onClick={formik.submitForm}>
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default UrlForm;

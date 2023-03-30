import { useFormik } from 'formik';
import RepeatableInput from '../../../../../shared/components/RepeatableInput';
import Input from '../../../../../shared/components/Input/Input';

import { VCardFormProps, VCardFormValues } from './VCardForm.types';
import { vCardFormValidationSchema } from './VCardForm.validation';

import * as FormStyles from '../FormsWrapper.styles';
import * as Styles from './VCardForm.styles';

function VCardForm({ onSubmit }: VCardFormProps): JSX.Element {
  const initialValues: VCardFormValues = {
    firstName: '',
    lastName: '',
    homePhone: [''],
    workPhone: [''],
    email: [''],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: vCardFormValidationSchema,
    onSubmit,
  });

  return (
    <>
      <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
        <Input label="First name" field="firstName" formik={formik} noMargin />
        <Input label="Last name" field="lastName" formik={formik} noMargin />
      </Styles.ColumnGrid>
      <RepeatableInput
        label="Home phone"
        field="homePhone"
        formik={formik}
        noMargin
      />
      <RepeatableInput
        label="Work phone"
        field="workPhone"
        formik={formik}
        noMargin
      />
      <RepeatableInput label="Email" field="email" formik={formik} noMargin />
      <FormStyles.GenerateButton onClick={formik.submitForm}>
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default VCardForm;

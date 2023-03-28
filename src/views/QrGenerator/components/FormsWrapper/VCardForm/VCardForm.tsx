import { useFormik } from 'formik';
import { useQrGeneratorContext } from '../../../QrGenerator.context';
import { valuesToUrlArgs } from '../../../services/valuesToUrlArgs';
import * as FormStyles from '../FormsWrapper.styles';

import { VCardFormProps } from './VCardForm.types';
import { vCardFormValidationSchema } from './VCardForm.validation';

import * as Styles from './VCardForm.styles';

function VCardForm(): JSX.Element {
  const { qrType, setQrArgs } = useQrGeneratorContext();

  const initialValues: VCardFormProps = {
    firstName: '',
    lastName: '',
    homePhone: [''],
    workPhone: [''],
    email: [''],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: vCardFormValidationSchema,
    onSubmit: (values) => {
      const args = valuesToUrlArgs(qrType, values);
      setQrArgs(args);
    },
  });

  return (
    <>
      <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
        <FormStyles.InputWrapper>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" />
          <FormStyles.Error>
            {formik.values.firstName && formik.errors.firstName}
          </FormStyles.Error>
        </FormStyles.InputWrapper>
        <FormStyles.InputWrapper>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" />
          <FormStyles.Error>
            {formik.values.lastName && formik.errors.lastName}
          </FormStyles.Error>
        </FormStyles.InputWrapper>
      </Styles.ColumnGrid>
      <FormStyles.InputWrapper>
        <label htmlFor="phone">Home phone:</label>
        <input type="text" id="phone" />
        {/* <FormStyles.Error>
          {formik.values.phone && formik.errors.phone}
        </FormStyles.Error> */}
      </FormStyles.InputWrapper>
      <FormStyles.InputWrapper>
        <label htmlFor="phone">Work phone:</label>
        <input type="text" id="phone" />
        {/* <FormStyles.Error>
          {formik.values.phone && formik.errors.phone}
        </FormStyles.Error> */}
      </FormStyles.InputWrapper>
      <FormStyles.InputWrapper>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
        <FormStyles.Error>
          {formik.values.email && formik.errors.email}
        </FormStyles.Error>
      </FormStyles.InputWrapper>

      <FormStyles.GenerateButton>Generate</FormStyles.GenerateButton>
    </>
  );
}

export default VCardForm;

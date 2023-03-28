import { useFormik } from 'formik';
import { useQrGeneratorContext } from '../../../QrGenerator.context';
import { valuesToUrlArgs } from '../../../services/valuesToUrlArgs';
import * as FormStyles from '../FormsWrapper.styles';

import { MultipleField, VCardFormProps } from './VCardForm.types';
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

  const addField = (field: MultipleField) => {
    formik.setFieldValue(field, [...formik.values[field], '']);
  };

  const removeField = (field: MultipleField) => {
    const values = [...formik.values[field]];
    const index = values.length - 1;
    values.splice(index, 1);
    formik.setFieldValue(field, values);
  };

  return (
    <>
      <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
        <FormStyles.InputWrapper noMargin>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps('firstName')}
          />
          <FormStyles.Error>
            {formik.touched.firstName && formik.errors.firstName}
          </FormStyles.Error>
        </FormStyles.InputWrapper>
        <FormStyles.InputWrapper noMargin>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            {...formik.getFieldProps('lastName')}
          />
          <FormStyles.Error>
            {formik.touched.lastName && formik.errors.lastName}
          </FormStyles.Error>
        </FormStyles.InputWrapper>
      </Styles.ColumnGrid>
      <FormStyles.Label>
        <label htmlFor={`homePhone`}>Home phone:</label>
      </FormStyles.Label>
      {formik.values.homePhone.map((phone, index) => (
        <FormStyles.InputWrapper noMargin>
          <input
            id={`homePhone[${index}]`}
            type="text"
            {...formik.getFieldProps(`homePhone[${index}]`)}
          />
          {formik.touched.homePhone && (
            <FormStyles.Error>
              {formik.errors.homePhone &&
                formik.errors.homePhone[index as number]}
            </FormStyles.Error>
          )}
          <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
            {index === formik.values.homePhone.length - 1 && (
              <FormStyles.AddButton onClick={() => addField('homePhone')}>
                Add work phone
              </FormStyles.AddButton>
            )}
            {index > 0 && (
              <FormStyles.RemoveButton onClick={() => removeField('homePhone')}>
                Remove
              </FormStyles.RemoveButton>
            )}
          </Styles.ColumnGrid>
        </FormStyles.InputWrapper>
      ))}
      <FormStyles.Label>
        <label htmlFor={`workPhone`}>Work phone:</label>
      </FormStyles.Label>
      {formik.values.workPhone.map((phone, index) => (
        <FormStyles.InputWrapper noMargin>
          <input
            id={`workPhone[${index}]`}
            type="text"
            {...formik.getFieldProps(`workPhone[${index}]`)}
          />
          {formik.touched.workPhone && (
            <FormStyles.Error>
              {formik.errors.workPhone &&
                formik.errors.workPhone[index as number]}
            </FormStyles.Error>
          )}
          <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
            {index === formik.values.workPhone.length - 1 && (
              <FormStyles.AddButton onClick={() => addField('workPhone')}>
                Add work phone
              </FormStyles.AddButton>
            )}
            {index > 0 && (
              <FormStyles.RemoveButton onClick={() => removeField('workPhone')}>
                Remove
              </FormStyles.RemoveButton>
            )}
          </Styles.ColumnGrid>
        </FormStyles.InputWrapper>
      ))}
      <FormStyles.Label>
        <label htmlFor={`email`}>Email:</label>
      </FormStyles.Label>
      {formik.values.email.map((email, index) => (
        <FormStyles.InputWrapper noMargin>
          <input
            id={`email[${index}]`}
            type="text"
            {...formik.getFieldProps(`email[${index}]`)}
          />
          {formik.touched.email && (
            <FormStyles.Error>
              {formik.errors.email && formik.errors.email[index as number]}
            </FormStyles.Error>
          )}
          <Styles.ColumnGrid gridTemplateColumns="1fr 1fr">
            {index === formik.values.email.length - 1 && (
              <FormStyles.AddButton onClick={() => addField('email')}>
                Add email
              </FormStyles.AddButton>
            )}
            {index > 0 && (
              <FormStyles.RemoveButton onClick={() => removeField('email')}>
                Remove
              </FormStyles.RemoveButton>
            )}
          </Styles.ColumnGrid>
        </FormStyles.InputWrapper>
      ))}

      <FormStyles.GenerateButton
        onClick={formik.submitForm}
        disabled={!formik.isValid || !formik.dirty}
      >
        Generate
      </FormStyles.GenerateButton>
    </>
  );
}

export default VCardForm;

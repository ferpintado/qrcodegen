import { Fragment } from 'react';
import Input from '../Input';
import * as Styles from './RepeatableInput.styles';
import { InputProps } from '../Input/Input.types';

function RepeatableInput({
  formik,
  label,
  field,
  noMargin,
}: InputProps): JSX.Element {
  const addField = (field: any) => {
    formik.setFieldValue(field, [...formik.values[field], '']);
  };

  const removeField = (field: any) => {
    const values = [...formik.values[field]];
    const index = values.length - 1;
    values.splice(index, 1);
    formik.setFieldValue(field, values);
  };

  return (
    <>
      <Styles.Label>
        <label htmlFor={field}>{label}:</label>
      </Styles.Label>
      {formik.values[field].map((value: string, index: number) => (
        <Fragment key={index}>
          <Input
            formik={formik}
            field={`${field}[${index}]`}
            noMargin={noMargin}
          />
          {formik.touched[field] && (
            <Styles.Error>
              {formik.errors[field] && formik.errors[field][index as number]}
            </Styles.Error>
          )}
          <Styles.ButtonsWrapper>
            {index === formik.values[field].length - 1 && (
              <Styles.AddButton onClick={() => addField(field)}>
                Add
              </Styles.AddButton>
            )}
            {index > 0 && (
              <Styles.RemoveButton onClick={() => removeField(field)}>
                Remove
              </Styles.RemoveButton>
            )}
          </Styles.ButtonsWrapper>
        </Fragment>
      ))}
    </>
  );
}

export default RepeatableInput;

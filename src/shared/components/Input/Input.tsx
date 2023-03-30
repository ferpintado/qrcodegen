import { InputProps } from './Input.types';

import * as Styles from './Input.styles';

function Input({ formik, field, label, noMargin }: InputProps): JSX.Element {
  return (
    <Styles.InputWrapper noMargin={noMargin}>
      {label && <label htmlFor={field}>{label}:</label>}
      <input
        type="text"
        id={field}
        data-testid={field}
        {...formik.getFieldProps(field)}
      />
      <Styles.Error>
        {formik.touched[field] && formik.errors[field]}
      </Styles.Error>
    </Styles.InputWrapper>
  );
}

export default Input;

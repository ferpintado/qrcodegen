import { SelectProps } from './Select.types';

import * as Styles from './Select.styles';

function Select({ formik, field, label, options }: SelectProps): JSX.Element {
  return (
    <Styles.SelectWrapper>
      <label htmlFor={field}>{label}:</label>
      <select id={field} {...formik.getFieldProps(field)}>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Styles.Error>
        {formik.touched[field] && formik.errors[field]}
      </Styles.Error>
    </Styles.SelectWrapper>
  );
}

export default Select;

import { render } from '@testing-library/react';
import Select from './Select';
import { SelectProps } from './Select.types';

describe('Select', () => {
  const formik = {
    getFieldProps: jest.fn(),
    touched: { field: false },
    errors: { field: '' },
  };

  const defaultProps = {
    formik,
    field: 'field',
    label: 'Label',
    options: ['a', 'b', 'c'],
  };

  const renderComponent = (props?: Partial<SelectProps>) => {
    return render(<Select {...{ ...defaultProps, ...props }} />);
  };

  it('should render idle Select', () => {
    const screen = renderComponent();

    const label = screen.queryByText(`${defaultProps.label}:`);
    const select = screen.container.querySelector('select');
    const options = screen.container.querySelectorAll('option');

    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(3);
  });

  it('should render Select with error', () => {
    const screen = renderComponent({
      formik: {
        ...formik,
        touched: { field: true },
        errors: { field: 'error message' },
      },
    });

    const error = screen.queryByText('error message');
    expect(error).toBeInTheDocument();
  });

  it('should render without label', () => {
    const screen = renderComponent({ label: undefined });

    const label = screen.queryByText(`${defaultProps.label}:`);
    expect(label).not.toBeInTheDocument();
  });
});

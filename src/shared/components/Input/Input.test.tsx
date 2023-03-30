import { render, screen } from '@testing-library/react';
import Input from './Input';
import { InputProps } from './Input.types';

describe('Input', () => {
  const formik = {
    getFieldProps: jest.fn(),
    touched: { field: false },
    errors: { field: '' },
  };

  const defaultProps = {
    formik,
    field: 'field',
    label: 'Label',
  };

  const renderComponent = (props?: Partial<InputProps>) => {
    return render(<Input {...{ ...defaultProps, ...props }} />);
  };
  it('should render idle input', () => {
    const screen = renderComponent();

    const label = screen.queryByText(`${defaultProps.label}:`);
    const input = screen.container.querySelector('input');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should render input with error', () => {
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

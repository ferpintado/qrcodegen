import { fireEvent, render } from '@testing-library/react';
import RepeatableInput from './RepeatableInput';
import { InputProps } from '../Input/Input.types';

describe('RepeatableInput', () => {
  const formik = {
    getFieldProps: jest.fn(),
    touched: { field: false },
    errors: { field: '' },
    values: { field: [''] },
    setFieldValue: jest.fn(),
  };

  const defaultProps = {
    formik,
    field: 'field',
    label: 'Label',
  };

  const renderComponent = (props?: Partial<InputProps>) => {
    return render(<RepeatableInput {...{ ...defaultProps, ...props }} />);
  };

  it('should render idle input', () => {
    const screen = renderComponent();

    const label = screen.queryByText(`${defaultProps.label}:`);
    const addBtn = screen.queryByText(`Add`);
    const removeBtn = screen.queryByText(`Remove`);
    const input = screen.container.querySelector('input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(removeBtn).not.toBeInTheDocument();
  });

  it('should render multiple inputs', () => {
    const screen = renderComponent({
      formik: {
        ...formik,
        values: { field: ['', ''] },
      },
    });

    const label = screen.queryByText(`${defaultProps.label}:`);
    const addBtn = screen.queryByText(`Add`);
    const removeBtn = screen.queryByText(`Remove`);
    const inputs = screen.container.querySelectorAll('input');

    expect(inputs).toHaveLength(2);
    expect(label).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it('should add a new input', () => {
    const screen = renderComponent();

    const addBtn = screen.queryByText(`Add`);

    if (!addBtn) {
      throw new Error('Add button not found');
    }

    fireEvent.click(addBtn);

    expect(formik.setFieldValue).toHaveBeenCalledWith('field', ['', '']);
  });

  it('should remove an input', () => {
    const screen = renderComponent({
      formik: {
        ...formik,
        values: { field: ['', ''] },
      },
    });

    const removeBtn = screen.queryByText(`Remove`);

    if (!removeBtn) {
      throw new Error('Remove button not found');
    }

    fireEvent.click(removeBtn);

    expect(formik.setFieldValue).toHaveBeenCalledWith('field', ['']);
  });
});

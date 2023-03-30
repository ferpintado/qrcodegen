import { render, fireEvent, act, waitFor } from '@testing-library/react';
import VCardForm from './VCardForm';
import { vCardFormValidationSchema } from './VCardForm.validation';

const validFirstName = 'John';
const validLastName = 'Doe';
const validHomePhone = '(604) 123-4567';
const validWorkPhone = '(604) 123-4567';
const validEmail = 'test@gmail.com';

describe('VCardForm component', () => {
  const onSubmitMock = jest.fn();

  const renderComponent = () => {
    return render(<VCardForm onSubmit={onSubmitMock} />);
  };

  it('should render ui', () => {
    const { getByText } = renderComponent();
    expect(getByText('First name:')).toBeInTheDocument();
    expect(getByText('Last name:')).toBeInTheDocument();
    expect(getByText('Home phone:')).toBeInTheDocument();
    expect(getByText('Work phone:')).toBeInTheDocument();
    expect(getByText('Email:')).toBeInTheDocument();
    expect(getByText('Generate')).toBeInTheDocument();
  });

  it('should submit value', async () => {
    const { getByLabelText, getByText, getByTestId } = renderComponent();
    const firstNameInput = getByLabelText('First name:');
    const lastNameInput = getByLabelText('Last name:');
    const homePhoneInput = getByTestId('homePhone[0]');
    const workPhoneInput = getByTestId('workPhone[0]');
    const emailInput = getByTestId('email[0]');

    await act(() => {
      fireEvent.change(firstNameInput, { target: { value: validFirstName } });
      fireEvent.change(lastNameInput, { target: { value: validLastName } });
      fireEvent.change(homePhoneInput, { target: { value: validHomePhone } });
      fireEvent.change(workPhoneInput, { target: { value: validWorkPhone } });
      fireEvent.change(emailInput, { target: { value: validEmail } });

      fireEvent.click(getByText('Generate'));
    });

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('should not submit value', async () => {
    const { getByLabelText, getByText } = renderComponent();
    const firstNameInput = getByLabelText('First name:');
    const lastNameInput = getByLabelText('Last name:');
    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.change(firstNameInput, { target: { value: '' } });
      fireEvent.change(lastNameInput, { target: { value: '' } });
    });

    await act(() => {
      fireEvent.click(generateButton);
    });

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should render error message', async () => {
    const { getByLabelText, getByText } = renderComponent();
    const firstNameInput = getByLabelText('First name:');
    const lastNameInput = getByLabelText('Last name:');
    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.change(firstNameInput, { target: { value: '' } });
      fireEvent.change(lastNameInput, { target: { value: '' } });
    });

    await act(() => {
      fireEvent.click(generateButton);
    });

    expect(getByText('Please enter a first name')).toBeInTheDocument();
    expect(getByText('Please enter a last name')).toBeInTheDocument();
    expect(getByText('Please enter an email')).toBeInTheDocument();
  });

  it('should validate input values', () => {
    const validValues = {
      firstName: 'John',
      lastName: 'Doe',
      homePhone: ['(604) 123-4567'],
      workPhone: ['(604) 123-4567'],
      email: ['test@gmail.com'],
    };
    const invalidValues = {
      firstName: '',
      lastName: '',
      homePhone: ['6041234567'],
      workPhone: ['1233a'],
      email: ['test@gmail.com'],
    };
    const validResult = vCardFormValidationSchema.isValidSync(validValues);
    const invalidResult = vCardFormValidationSchema.isValidSync(invalidValues);
    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
  });
});

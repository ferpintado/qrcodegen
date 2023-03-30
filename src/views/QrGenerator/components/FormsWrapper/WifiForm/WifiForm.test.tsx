import { render, fireEvent, act, waitFor } from '@testing-library/react';
import WifiForm from './WifiForm';
import { wifiFormValidationSchema } from './WifiForm.validation';

describe('WifiForm component', () => {
  const onSubmitMock = jest.fn();
  const validNetworkName = 'networkName';
  const validPassword = 'password';
  const validEncryption = 'WPA';

  const renderComponent = () => {
    return render(<WifiForm onSubmit={onSubmitMock} />);
  };

  it('should render ui', () => {
    const { getByText } = renderComponent();
    expect(getByText('Network name:')).toBeInTheDocument();
    expect(getByText('Password:')).toBeInTheDocument();
    expect(getByText('Security type:')).toBeInTheDocument();
    expect(getByText('Generate')).toBeInTheDocument();
  });

  it('should submit value', async () => {
    const { getByLabelText, getByText } = renderComponent();

    const networkNameInput = getByLabelText('Network name:');
    const passwordInput = getByLabelText('Password:');
    const encryptionInput = getByLabelText('Security type:');
    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.change(networkNameInput, {
        target: { value: validNetworkName },
      });
      fireEvent.change(passwordInput, { target: { value: validPassword } });
      fireEvent.change(encryptionInput, {
        target: { value: validEncryption },
      });
      fireEvent.click(generateButton);
    });

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('should not submit value', async () => {
    const { getByLabelText, getByText } = renderComponent();

    const networkNameInput = getByLabelText('Network name:');
    const passwordInput = getByLabelText('Password:');
    const encryptionInput = getByLabelText('Security type:');
    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.change(networkNameInput, {
        target: { value: '' },
      });
      fireEvent.change(passwordInput, { target: { value: '' } });
      fireEvent.change(encryptionInput, {
        target: { value: '' },
      });
      fireEvent.click(generateButton);
    });

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should render error message', async () => {
    const { getByLabelText, getByText } = renderComponent();

    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.click(generateButton);
    });

    expect(getByText('Please enter a network name')).toBeInTheDocument();
    expect(getByText('Please enter a password')).toBeInTheDocument();
  });

  it('should validate input values', () => {
    const validValues = {
      name: 'networkName',
      password: 'password',
      encryption: 'WPA',
    };

    const invalidValues = {
      name: '',
      password: '',
      encryption: '',
    };

    const validResult = wifiFormValidationSchema.isValidSync(validValues);
    const invalidResult = wifiFormValidationSchema.isValidSync(invalidValues);

    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
  });
});

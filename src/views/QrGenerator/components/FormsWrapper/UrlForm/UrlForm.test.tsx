import { render, fireEvent, act, waitFor } from '@testing-library/react';
import UrlForm from './UrlForm';
import { urlFormValidationSchema } from './UrlForm.validation';

describe('Url Form component', () => {
  const onSubmitMock = jest.fn();

  const renderComponent = () => {
    return render(<UrlForm onSubmit={onSubmitMock} />);
  };

  it('should render ui', () => {
    const { getByLabelText, getByText } = renderComponent();
    expect(getByLabelText('URL:')).toBeInTheDocument();
    expect(getByText('Generate')).toBeInTheDocument();
  });

  it('should submit value', async () => {
    const validUrl = 'https://www.example.com';
    const { getByLabelText, getByText } = renderComponent();
    const urlInput = getByLabelText('URL:');

    await act(() => {
      fireEvent.change(urlInput, { target: { value: validUrl } });
      fireEvent.click(getByText('Generate'));
    });

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('should not submit value', async () => {
    const invalidUrl = 'example.com';
    const { getByLabelText, getByText } = renderComponent();
    const urlInput = getByLabelText('URL:');

    await act(() => {
      fireEvent.change(urlInput, { target: { value: invalidUrl } });
      fireEvent.click(getByText('Generate'));
    });

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should render error message', async () => {
    const invalidUrl = 'example.com';
    const { getByLabelText, getByText } = renderComponent();
    const urlInput = getByLabelText('URL:');
    const generateButton = getByText('Generate');

    await act(() => {
      fireEvent.change(urlInput, { target: { value: invalidUrl } });
      fireEvent.click(generateButton);
    });

    expect(
      getByText('Please enter a valid URL including http:// or https://')
    ).toBeInTheDocument();
  });

  it('should validate input values', () => {
    const validValues = {
      url: 'https://www.example.com',
    };
    const invalidValues = {
      url: 'example.com',
    };
    const validResult = urlFormValidationSchema.isValidSync(validValues);
    const invalidResult = urlFormValidationSchema.isValidSync(invalidValues);
    expect(validResult).toBe(true);
    expect(invalidResult).toBe(false);
  });
});

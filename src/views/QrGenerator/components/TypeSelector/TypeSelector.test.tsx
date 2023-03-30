import { render } from '@testing-library/react';
import TypeSelector from './TypeSelector';
import { QrGeneratorContext } from '../../QrGenerator.context';

describe('Type Selector component', () => {
  const setQrType = jest.fn();

  const renderComponent = () => {
    return render(
      <QrGeneratorContext.Provider
        value={{
          qrType: 'url',
          setQrType,
          qrArgs: '',
          setQrArgs: () => {},
        }}
      >
        <TypeSelector />
      </QrGeneratorContext.Provider>
    );
  };

  it('should render type options', () => {
    const { getByText } = renderComponent();
    const buttons = document.querySelectorAll('button');

    expect(getByText('Url')).toBeInTheDocument();
    expect(getByText('Wifi')).toBeInTheDocument();
    expect(getByText('VCard')).toBeInTheDocument();

    expect(buttons).toHaveLength(3);
  });

  it('should call setQrType on button click', () => {
    const { getByText } = renderComponent();
    const wifiButton = getByText('Wifi');

    wifiButton.click();

    expect(setQrType).toHaveBeenCalledWith('wifi');
  });
});

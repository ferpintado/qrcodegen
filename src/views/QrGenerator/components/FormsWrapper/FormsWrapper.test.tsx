import { render } from '@testing-library/react';
import FormsWrapper from './FormsWrapper';
import { QrGeneratorContext } from '../../QrGenerator.context';
import { QrType } from '../../QrGenerator.types';

jest.mock('./WifiForm', () => () => <div>Wifi form</div>);
jest.mock('./UrlForm', () => () => <div>Url form</div>);
jest.mock('./VCardForm', () => () => <div>VCard form</div>);

describe('Forms Wrapper component', () => {
  const renderComponent = (qrType: QrType) => {
    return render(
      <QrGeneratorContext.Provider
        value={{
          qrType,
          setQrType: () => {},
          qrArgs: '',
          setQrArgs: () => {},
        }}
      >
        <FormsWrapper />
      </QrGeneratorContext.Provider>
    );
  };

  it('should render Url Form', () => {
    const { getByText } = renderComponent('url');
    expect(getByText('Url form')).toBeInTheDocument();
  });

  it('should render Wifi Form', () => {
    const { getByText } = renderComponent('wifi');
    expect(getByText('Wifi form')).toBeInTheDocument();
  });

  it('should render VCard Form', () => {
    const { getByText } = renderComponent('vcard');
    expect(getByText('VCard form')).toBeInTheDocument();
  });
});

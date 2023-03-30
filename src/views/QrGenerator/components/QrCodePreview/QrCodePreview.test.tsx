import { render } from '@testing-library/react';
import QrCodePreview from './QrCodePreview';
import { QrGeneratorContext } from '../../QrGenerator.context';
import { QR_API_URL } from './QrCodePreview.constants';

describe('Qr Code Preview component', () => {
  const defaultArgs = 'http://www.google.com';
  const renderComponent = (args = defaultArgs) => {
    return render(
      <QrGeneratorContext.Provider
        value={{
          qrType: 'url',
          setQrType: () => {},
          qrArgs: args,
          setQrArgs: () => {},
        }}
      >
        <QrCodePreview />
      </QrGeneratorContext.Provider>
    );
  };

  it('should render idle state', () => {
    const { getByText } = renderComponent('');

    expect(getByText('Generate your first QR code.')).toBeInTheDocument();
  });

  it('should render qr code', () => {
    const { container } = renderComponent();
    const mockQrHref = `${QR_API_URL}${defaultArgs}`;

    const qrImage = container.querySelector('image');
    expect(qrImage).toHaveAttribute('xlink:href', mockQrHref);
  });
});

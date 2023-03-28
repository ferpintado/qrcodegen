import { useQrGeneratorContext } from '../../QrGenerator.context';

import * as Styles from './QrCodePreview.styles';
import { QR_API_URL } from './QrCodePreview.constants';

function QrCodePreview(): JSX.Element {
  const { qrArgs } = useQrGeneratorContext();
  const qrHref = qrArgs ? `${QR_API_URL}${qrArgs}` : null;

  return (
    <Styles.QrCodePreviewContainer>
      {qrHref ? (
        <svg width="100%" height="100%">
          <image xlinkHref={qrHref} width="100%" height="100%" />
        </svg>
      ) : (
        <p>Generate your first QR code.</p>
      )}
    </Styles.QrCodePreviewContainer>
  );
}

export default QrCodePreview;

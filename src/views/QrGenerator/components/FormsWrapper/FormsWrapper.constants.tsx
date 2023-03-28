import { QR_CODE_TYPES } from '../../QrGenerator.constants';
import UrlForm from './UrlForm';
import VCardForm from './VCardForm';
import WifiForm from './WifiForm';

export const FORM_TYPES_COMPONENTS = {
  [QR_CODE_TYPES.URL]: <UrlForm />,
  [QR_CODE_TYPES.WIFI]: <WifiForm />,
  [QR_CODE_TYPES.VCARD]: <VCardForm />,
} as const;

import { QR_CODE_TYPES } from '../../QrGenerator.constants';
import UrlForm from './UrlForm';
import { UrlFormValues } from './UrlForm/UrlForm.types';
import VCardForm from './VCardForm';
import { VCardFormValues } from './VCardForm/VCardForm.types';
import WifiForm from './WifiForm';
import { WifiFormValues } from './WifiForm/WifiForm.types';

export const FORM_TYPES_COMPONENTS = {
  [QR_CODE_TYPES.URL]: UrlForm,
  [QR_CODE_TYPES.WIFI]: WifiForm,
  [QR_CODE_TYPES.VCARD]: VCardForm,
} as const;

export type Values = UrlFormValues | WifiFormValues | VCardFormValues;

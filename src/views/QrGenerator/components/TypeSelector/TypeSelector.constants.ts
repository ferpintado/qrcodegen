import { QR_CODE_TYPES } from '../../QrGenerator.constants';

export const contentTypes = [
  {
    label: 'Url',
    value: QR_CODE_TYPES.URL,
  },
  {
    label: 'Wifi',
    value: QR_CODE_TYPES.WIFI,
  },
  {
    label: 'VCard',
    value: QR_CODE_TYPES.VCARD,
  },
];

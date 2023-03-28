import { QR_CODE_TYPES } from '../../QrGenerator.constants';
import { UrlFormProps } from '../../components/FormsWrapper/UrlForm/UrlForm.types';
import { VCardFormProps } from '../../components/FormsWrapper/VCardForm/VCardForm.types';
import { WifiFormProps } from '../../components/FormsWrapper/WifiForm/WifiForm.types';

type Values = UrlFormProps | WifiFormProps | VCardFormProps;

const valuesToUrlArgs = (qrType: string, values: Values) => {
  let urlArgs = '';

  if (qrType === QR_CODE_TYPES.URL && 'url' in values) {
    urlArgs = values.url;
  }

  if (qrType === QR_CODE_TYPES.WIFI && 'encryption' in values) {
    const { name, password, encryption } = values;
    urlArgs = `WIFI:T:${encryption};S:${name};P:${password};;`;
  }

  return encodeURIComponent(urlArgs);
};

export default valuesToUrlArgs;

import { QR_CODE_TYPES } from '../../QrGenerator.constants';
import { UrlFormProps } from '../../components/FormsWrapper/UrlForm/UrlForm.types';
import { VCardFormProps } from '../../components/FormsWrapper/VCardForm/VCardForm.types';
import { WifiFormProps } from '../../components/FormsWrapper/WifiForm/WifiForm.types';

type Values = UrlFormProps | WifiFormProps | VCardFormProps;

const buildVCardString = ({
  firstName,
  lastName,
  homePhone,
  workPhone,
  email,
}: VCardFormProps) => {
  const emails = email.map((email) => `EMAIL:${email}`).join('\n');
  const homePhones = homePhone
    .map((phone) => `TEL;TYPE=HOME:${phone}`)
    .join('\n');
  const workPhones = workPhone
    .map((phone) => `TEL;TYPE=WORK:${phone}`)
    .join('\n');

  return `BEGIN:VCARD\nVERSION:2.1\nN:${lastName};${firstName}\n${emails}\n${homePhones}\n${workPhones}\nEND:VCARD`;
};

const valuesToUrlArgs = (qrType: string, values: Values) => {
  let urlArgs = '';

  if (qrType === QR_CODE_TYPES.URL && 'url' in values) {
    urlArgs = values.url;
  }

  if (qrType === QR_CODE_TYPES.WIFI && 'encryption' in values) {
    const { name, password, encryption } = values;
    urlArgs = `WIFI:T:${encryption};S:${name};P:${password};;`;
  }

  if (qrType === QR_CODE_TYPES.VCARD && 'email' in values) {
    urlArgs = buildVCardString(values);
  }

  const clean = urlArgs.replace(/ /g, '');

  return encodeURIComponent(clean);
};

export default valuesToUrlArgs;

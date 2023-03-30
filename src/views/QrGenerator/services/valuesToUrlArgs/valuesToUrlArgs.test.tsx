import { QR_CODE_TYPES } from '../../QrGenerator.constants';
import valuesToUrlArgs from './valuesToUrlArgs';

describe('valuesToUrlArgs function', () => {
  it('should return encoded url value', () => {
    const qrType = QR_CODE_TYPES.URL;
    const values = { url: 'https://www.example.com' };
    const result = valuesToUrlArgs(qrType, values);
    expect(result).toBe('https%3A%2F%2Fwww.example.com');
  });

  it('should return encoded wifi values', () => {
    const qrType = QR_CODE_TYPES.WIFI;
    const values = {
      name: 'MyWifi',
      password: 'password123',
      encryption: 'WPA',
    };
    const result = valuesToUrlArgs(qrType, values);
    expect(result).toBe('WIFI%3AT%3AWPA%3BS%3AMyWifi%3BP%3Apassword123%3B%3B');
  });

  it('should return encoded vcard values', () => {
    const qrType = QR_CODE_TYPES.VCARD;
    const values = {
      firstName: 'John',
      lastName: 'Doe',
      email: ['john.doe@example.com'],
      homePhone: ['(604) 123-4567', '(604) 123-4567'],
      workPhone: ['(604) 123-4567', '(604) 123-4567'],
    };
    const result = valuesToUrlArgs(qrType, values);
    expect(result).toBe(
      'BEGIN%3AVCARD%0AVERSION%3A2.1%0AN%3ADoe%3BJohn%0AEMAIL%3Ajohn.doe%40example.com%0ATEL%3BTYPE%3DHOME%3A(604)123-4567%0ATEL%3BTYPE%3DHOME%3A(604)123-4567%0ATEL%3BTYPE%3DWORK%3A(604)123-4567%0ATEL%3BTYPE%3DWORK%3A(604)123-4567%0AEND%3AVCARD'
    );
  });

  it('should return empty if is invalid type', () => {
    const qrType = 'invalidType';
    const values = { url: 'https://www.example.com' };
    expect(valuesToUrlArgs(qrType, values)).toEqual('');
  });
});

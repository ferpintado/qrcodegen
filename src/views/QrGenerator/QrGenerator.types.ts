export type QrType = 'url' | 'vcard' | 'wifi';

export type QrContextType =
  | {
      qrType: QrType;
      setQrType: (type: QrType) => void;
      qrArgs: string;
      setQrArgs: (data: string) => void;
    }
  | undefined;

export type QrGeneratorProviderProps = {
  children: React.ReactNode;
};

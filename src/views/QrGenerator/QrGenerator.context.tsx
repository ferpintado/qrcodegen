import React, { createContext, useContext, useState } from 'react';
import {
  QrContextType,
  QrGeneratorProviderProps,
  QrType,
} from './QrGenerator.types';
import { QR_CODE_TYPES, DEFAULT_QR_CODE } from './QrGenerator.constants';

const QrGeneratorContext = createContext({} as QrContextType);

export const useQrGeneratorContext = () => {
  const context = useContext(QrGeneratorContext);

  if (!context) {
    throw new Error(
      'useQrGeneratorContext must be used within a QrGeneratorProvider'
    );
  }

  return context;
};

export const QrGeneratorProvider: React.FC<QrGeneratorProviderProps> = ({
  children,
}) => {
  const [qrType, setQrType] = useState<QrType>(QR_CODE_TYPES.URL);
  const [qrArgs, setQrArgs] = useState<string>(DEFAULT_QR_CODE);

  const value = { qrType, setQrType, qrArgs, setQrArgs };

  return (
    <QrGeneratorContext.Provider value={value}>
      {children}
    </QrGeneratorContext.Provider>
  );
};

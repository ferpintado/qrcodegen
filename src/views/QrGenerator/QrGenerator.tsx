import TypeSelector from './components/TypeSelector';
import QrCodePreview from './components/QrCodePreview';
import FormsWrapper from './components/FormsWrapper';

import { QrGeneratorProvider } from './QrGenerator.context';
import * as Styles from './QrGenerator.styles';

function QrGenerator(): JSX.Element {
  return (
    <QrGeneratorProvider>
      <Styles.QrGeneratorContainer>
        <TypeSelector />
        <Styles.MainContainer>
          <FormsWrapper />
          <QrCodePreview />
        </Styles.MainContainer>
      </Styles.QrGeneratorContainer>
    </QrGeneratorProvider>
  );
}

export default QrGenerator;

import { useQrGeneratorContext } from '../../QrGenerator.context';
import { contentTypes } from './TypeSelector.constants';

import * as Styles from './TypeSelector.styles';

function TypeSelector(): JSX.Element {
  const { qrType, setQrType } = useQrGeneratorContext();

  return (
    <Styles.TypeSelectorContainer>
      {contentTypes.map((type) => (
        <Styles.TypeSelectorButton
          key={type.value}
          onClick={() => setQrType(type.value)}
          active={qrType === type.value}
        >
          {type.label}
        </Styles.TypeSelectorButton>
      ))}
    </Styles.TypeSelectorContainer>
  );
}

export default TypeSelector;

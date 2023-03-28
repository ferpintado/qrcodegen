import { useQrGeneratorContext } from '../../QrGenerator.context';
import { FORM_TYPES_COMPONENTS } from './FormsWrapper.constants';

import * as Styles from './FormsWrapper.styles';

function FormsWrapper(): JSX.Element {
  const { qrType } = useQrGeneratorContext();

  return <Styles.Wrapper>{FORM_TYPES_COMPONENTS[qrType]}</Styles.Wrapper>;
}

export default FormsWrapper;

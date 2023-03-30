import { useQrGeneratorContext } from '../../QrGenerator.context';
import { valuesToUrlArgs } from '../../services/valuesToUrlArgs';
import { FORM_TYPES_COMPONENTS, Values } from './FormsWrapper.constants';

import * as Styles from './FormsWrapper.styles';

function FormsWrapper(): JSX.Element {
  const { qrType, setQrArgs } = useQrGeneratorContext();

  const onSubmit = (values: Values) => {
    const args = valuesToUrlArgs(qrType, values);
    setQrArgs(args);
  };

  const Component = FORM_TYPES_COMPONENTS[qrType];

  return (
    <Styles.Wrapper>
      <Component onSubmit={onSubmit} />
    </Styles.Wrapper>
  );
}

export default FormsWrapper;

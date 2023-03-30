import { render } from '@testing-library/react';
import TypeSelector from './components/TypeSelector';
import QrCodePreview from './components/QrCodePreview';
import FormsWrapper from './components/FormsWrapper';
import QrGenerator from './QrGenerator';

jest.mock('./components/TypeSelector', () => () => <div>TypeSelector</div>);
jest.mock('./components/QrCodePreview', () => () => <div>QrCodePreview</div>);
jest.mock('./components/FormsWrapper', () => () => <div>FormsWrapper</div>);

describe('QrGenerator component', () => {
  const renderComponent = () => {
    return render(<QrGenerator />);
  };

  it('should render children components', () => {
    const { getByText } = renderComponent();

    expect(getByText('TypeSelector')).toBeInTheDocument();
    expect(getByText('QrCodePreview')).toBeInTheDocument();
    expect(getByText('FormsWrapper')).toBeInTheDocument();
  });
});

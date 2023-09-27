import { render } from '@testing-library/react';
import CalculatePage from '@app/enrollment/calculate/page';

jest.mock('@components/forms/CompoundInterestCalculator', () => {
  return () => <div data-testid="mock-compound-interest-calculator" />;
});

describe('<CalculatePage />', () => {
  it('should display the title "Compound Interest Calculator"', () => {
    const { getByText } = render(<CalculatePage />);
    const title = getByText('Compound Interest Calculator');
    expect(title).toBeInTheDocument();
  });

  it('should render the CompoundInterestCalculator component', () => {
    const { getByTestId } = render(<CalculatePage />);
    const calculatorComponent = getByTestId('mock-compound-interest-calculator');
    expect(calculatorComponent).toBeInTheDocument();
  });
});

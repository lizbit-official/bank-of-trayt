import { render } from '@testing-library/react';
import EnrollmentPage from '@app/enrollment/page';

jest.mock('@components/forms/DirectDepositEnrollmentForm', () => {
  return () => <div data-testid="mock-direct-deposit-enrollment-form" />;
});

describe('<EnrollmentPage />', () => {
  it('should display the title "New Direct Deposit Enrollment"', () => {
    const { getByText } = render(<EnrollmentPage />);
    const title = getByText('New Direct Deposit Enrollment');
    expect(title).toBeInTheDocument();
  });

  it('should render the DirectDepositEnrollmentForm component', () => {
    const { getByTestId } = render(<EnrollmentPage />);
    const calculatorComponent = getByTestId('mock-direct-deposit-enrollment-form');
    expect(calculatorComponent).toBeInTheDocument();
  });
});

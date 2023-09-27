import { render } from '@testing-library/react';
import HomePage from '@app/page';

describe('<HomePage />', () => {
  it('should display the title "Welcome to Bank of Trayt"', () => {
    const { getByText } = render(<HomePage />);
    const title = getByText('Welcome to Bank of Trayt');
    expect(title).toBeInTheDocument();
  });

  it('should display the subtitle "Initiate a new Direct Deposit to earn 5% for 36 Months!"', () => {
    const { getByText } = render(<HomePage />);
    const subtitle = getByText('Initiate a new Direct Deposit to earn 5% for 36 Months!');
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the "Learn More" button with the correct href', () => {
    const { getByText } = render(<HomePage />);
    const learnMoreButton = getByText('Learn More').closest('a');
    expect(learnMoreButton).toHaveAttribute('href', '/enrollment');
  });
});

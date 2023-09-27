import { render } from '@testing-library/react';
import AppHeader from '@components/layout/AppHeader';

describe('<AppHeader />', () => {
  it('should display "Bank of Trayt" title', () => {
    const { getByText } = render(<AppHeader />);
    const title = getByText('Bank of Trayt');
    expect(title).toBeInTheDocument();
  });

  it('should render the navigation items', () => {
    const { getByText } = render(<AppHeader />);
    const navItems = ['Sign In', 'En Español', 'Locations', 'Contact Us', 'Help'];
    navItems.forEach(item => {
      const navButton = getByText(item);
      expect(navButton).toBeInTheDocument();
    });
  });
});

import { render } from '@testing-library/react';
import AppSidebar from '@components/layout/AppSidebar';

describe('<AppSidebar />', () => {
  const mockWidth = 240;

  it('should render each link with the correct text, href, and icon', () => {
    const { getByText } = render(<AppSidebar width={mockWidth} />);
    const links = [
      { text: 'Personal', href: '/', icon: 'HomeIcon' },
      { text: 'Small Business', href: '/small-business', icon: 'StarIcon' },
      { text: 'Wealth Management', href: '/wealth-management', icon: 'ChecklistIcon' },
      { text: 'Business & Institutions', href: '/business-and-institutions', icon: 'ChecklistIcon' },
      { text: 'About Us', href: '/about', icon: 'ChecklistIcon' },
    ];

    links.forEach(({ text, href, icon }) => {
      const linkItem = getByText(text).closest('a');
      expect(linkItem).toHaveAttribute('href', href);

      // TODO: assert correct icon
    });
  });
});

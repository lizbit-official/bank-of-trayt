import React from 'react';
import { render } from '@testing-library/react';
import Layout from '@app/layout';

// mock imported components
jest.mock('@components/ThemeRegistry/ThemeRegistry', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-theme-registry">{children}</div>
));
jest.mock('@components/layout/AppHeader', () => () => <header data-testid="mock-app-header" />);
jest.mock('@components/layout/AppSidebar', () => () => <aside data-testid="mock-app-sidebar" />);

describe('<Layout />', () => {
  it('should render the AppHeader component', () => {
    const { getByTestId } = render(<Layout><div>Test child content</div></Layout>);
    expect(getByTestId('mock-app-header')).toBeInTheDocument();
  });

  it('should render the AppSidebar component', () => {
    const { getByTestId } = render(<Layout><div>Test child content</div></Layout>);
    expect(getByTestId('mock-app-sidebar')).toBeInTheDocument();
  });

  it('should render the children content', () => {
    const { getByText } = render(<Layout><div>Test child content</div></Layout>);
    expect(getByText('Test child content')).toBeInTheDocument();
  });

  it('should have the correct title, meta tags, and links in the head', () => {
    const { container } = render(<Layout><div>Test child content</div></Layout>);
    expect(document.title).toBe('Bank of Trayt');
    expect(container.querySelector('link[rel="manifest"]')?.getAttribute('href'))
      .toBe('/site.webmanifest');
    expect(container.querySelector('link[rel="shortcut icon"]')?.getAttribute('href'))
      .toBe('/favicon.ico');
    expect(container.querySelector('meta[name="application-name"]')?.getAttribute('content'))
      .toBe('Bank of Trayt<');
    expect(container.querySelector('meta[name="description"]')?.getAttribute('content'))
      .toBe('Take-home challenge for Trayt Health');
    expect(container.querySelector('meta[id="view"]')?.getAttribute('content'))
      .toBe('initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover');
    expect(container.querySelector('meta[name="theme-color"]')?.getAttribute('content'))
      .toBe('#1c6080');
  });
});

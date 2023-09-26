import React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@components/ThemeRegistry/ThemeRegistry';
import AppHeader from '@components/layout/AppHeader';
import AppSidebar from '@components/layout/AppSidebar';
import '../styles/global.css';

export const metadata = () => ({
  title: 'Bank of Trayt',
  description: 'Take-home challenge for Trayt Health',
});

const SIDEBAR_WIDTH = 240;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Bank of Trayt</title>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="application-name" content="Bank of Trayt<" />
        <meta name="description" content="Take-home challenge for Trayt Health" />

        <meta id="view" name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1c6080" />

        <meta name="apple-mobile-web-app-title" content="Bank of Trayt<" />
        <meta name="application-name" content="Bank of Trayt<" />
        <meta name="msapplication-TileColor" content="#00a0e0" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="theme-color" content="#00a0e0" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bank of Trayt<" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1c6080" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#00a0e0" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bank of Trayt<" />
        <meta property="og:site_name" content="Bank of Trayt<" />
      </head>
      <body>
        <ThemeRegistry>
          <AppHeader />
          <AppSidebar width={SIDEBAR_WIDTH} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${SIDEBAR_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default Layout;

import React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@components/ThemeRegistry/ThemeRegistry';
import AppHeader from '@components/layout/AppHeader';
import AppSidebar from '@components/layout/AppSidebar';
import '../styles/global.css';

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

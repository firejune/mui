import * as React from 'react';
import Divider from '@mui/material/Divider';
import Head from 'src/modules/components/Head';
import BrandingCssVarsProvider from 'src/BrandingCssVarsProvider';
import AppHeader from 'src/layouts/AppHeader';
import CoreHero from 'src/components/productCore/CoreHero';
import CoreProducts from 'src/components/productCore/CoreProducts';
import CoreHeroEnd from 'src/components/productCore/CoreHeroEnd';
import References, { CORE_CUSTOMERS } from 'src/components/home/References';
import AppFooter from 'src/layouts/AppFooter';
import AppHeaderBanner from 'src/components/banner/AppHeaderBanner';

export default function Core() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="MUI Core: Ready to use components, free forever"
        description="Get a growing list of React components, ready-to-use, free forever and with accessibility always in mind."
        card="/static/social-previews/core-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/material-ui" />
      <main id="main-content">
        <CoreHero />
        <CoreProducts />
        <Divider />
        <References companies={CORE_CUSTOMERS} />
        <Divider />
        <CoreHeroEnd />
        <Divider />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/material-ui" />
    </BrandingCssVarsProvider>
  );
}

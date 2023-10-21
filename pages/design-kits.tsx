import * as React from 'react';
import Divider from '@mui/material/Divider';
import Head from 'src/modules/components/Head';
import AppHeader from 'src/layouts/AppHeader';
import AppFooter from 'src/layouts/AppFooter';
import DesignKitHero from 'src/components/productDesignKit/DesignKitHero';
import DesignKitValues from 'src/components/productDesignKit/DesignKitValues';
import DesignKitDemo from 'src/components/productDesignKit/DesignKitDemo';
import DesignKitFAQ from 'src/components/productDesignKit/DesignKitFAQ';
import Testimonials from 'src/components/home/Testimonials';
import HeroEnd from 'src/components/home/HeroEnd';
import BrandingCssVarsProvider from 'src/BrandingCssVarsProvider';
import References, { DESIGNKITS_CUSTOMERS } from 'src/components/home/References';
import AppHeaderBanner from 'src/components/banner/AppHeaderBanner';

export default function DesignKits() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Material UI in your favorite design tool"
        description="Pick your favorite design tool to enjoy and use Material UI components. Boost consistency and facilitate communication when working with developers."
        card="/static/social-previews/designkits-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-design-kits" />
      <main id="main-content">
        <DesignKitHero />
        <References companies={DESIGNKITS_CUSTOMERS} />
        <Divider />
        <DesignKitValues />
        <Divider />
        <DesignKitDemo />
        <Divider />
        <DesignKitFAQ />
        <Divider />
        <Testimonials />
        <Divider />
        <HeroEnd />
      </main>
      <Divider />
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}

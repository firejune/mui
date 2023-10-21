import * as React from 'react';
import Divider from '@mui/material/Divider';
import Head from 'src/modules/components/Head';
import BrandingCssVarsProvider from 'src/BrandingCssVarsProvider';
import AppHeader from 'src/layouts/AppHeader';
import XHero from 'src/components/productX/XHero';
import XComponents from 'src/components/productX/XComponents';
import XDataGrid from 'src/components/productX/XDataGrid';
import XTheming from 'src/components/productX/XTheming';
import XRoadmap from 'src/components/productX/XRoadmap';
import References, { ADVANCED_CUSTOMERS } from 'src/components/home/References';
import AppFooter from 'src/layouts/AppFooter';
import XPlans from 'src/components/productX/XPlans';
import AppHeaderBanner from 'src/components/banner/AppHeaderBanner';

export default function X() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="MUI X: Performant advanced components"
        description="Build data-rich applications using a growing list of advanced React components. We're kicking it off with the most powerful Data Grid on the market."
        card="/static/social-previews/x-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <XHero />
        <References companies={ADVANCED_CUSTOMERS} />
        <Divider />
        <XComponents />
        <Divider />
        <XDataGrid />
        <Divider />
        <XTheming />
        <Divider />
        <XPlans />
        <Divider />
        <XRoadmap />
        <Divider />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}

import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppHeader from 'src/layouts/AppHeader';
import AppFooter from 'src/layouts/AppFooter';
import AboutHero from 'src/components/about/AboutHero';
import OurValues from 'src/components/about/OurValues';
import Team from 'src/components/about/Team';
import HowToSupport from 'src/components/about/HowToSupport';
import AboutEnd from 'src/components/about/AboutEnd';
import Head from 'src/modules/components/Head';
import BrandingCssVarsProvider from 'src/BrandingCssVarsProvider';
import AppHeaderBanner from 'src/components/banner/AppHeaderBanner';

export default function About() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="About us - MUI"
        description="MUI is a 100% remote globally distributed team, supported by a community of thousands
        of developers all across the world."
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <AboutHero />
        <Divider />
        <OurValues />
        <Divider />
        <Team />
        <Divider />
        <HowToSupport />
        <Divider />
        <AboutEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
